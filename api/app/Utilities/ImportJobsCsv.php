<?php

namespace App\Utilities;

use App\DTOs\JobDTO;
use App\DTOs\SkillDTO;
use App\Models\Job;
use App\Models\Skill;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;


class ImportJobsCsv {

  // Load the entire file into memory.
  private static function parseFile($path){
    $file_h = fopen($path, "r");
    $jobs = array();
    $i = 0;

    while (($filedata = fgetcsv($file_h, 1000, ",")) !== FALSE) {

      // Skip first row
      if ($i == 0) {
        $i++;
        continue;
      }

      $job = new JobDTO();
      $job->title = $filedata[1];
      $job->company = $filedata[2];
      $job->skills_str = $filedata[3];
      $job->skills = array();

      // Parse skills string into kvp;
      foreach(explode(",", $job->skills_str) as $name){
        $key = strtolower($name);
        if (!array_key_exists($key, $job->skills)){
          $skill = new SkillDTO();
          $skill->key = $key;
          $skill->name = $name;
          $job->skills[$key] = $skill;
        }
      }

      array_push($jobs, $job);

    }
    fclose($file_h);

    return $jobs;
  }

  private static function getUniqueSkills(array $jobs){

    // Flatten the multi-dimensional array of skills.
    // Note: The first occurence of a skill sets the case/capitalization of the skill name.
    $skills = array();
    foreach($jobs as $job){
      foreach($job->skills as $key => $skill){
        if (!array_key_exists($key, $skills)){
          $skills[$key] = $skill;
        }
      }
    }

    return $skills;
  }

  private static function loadSkills(array $skills){
    $skillModels = array();
    foreach ($skills as $key => $skill) {
      $skillModels[$key] = Skill::create((array)$skill);
    }
    return $skillModels;
  }

  private static function loadJobs(array $jobs, array $skillModels){
    foreach($jobs as $job){
      $jobModel = Job::create(array(
        'title' => $job->title,
        'company' => $job->company,
      ));

      // Add skills to the pivot table.
      foreach($job->skills as $key => $skill){
        $jobModel->skills()->attach($skillModels[$key]->id);
      }
    }
  }

  private static function truncateData(){

    DB::table("job_skill")->truncate();
    DB::table("candidate_skill")->truncate();
    DB::table("skills")->truncate();
    DB::table("jobs")->truncate();

  }

  public static function importFile(string $path){

    // Truncate existing data from jobs, skills, and the pivot tables associated with them.
    self::truncateData();

    // Parse the data.
    $jobs = self::parseFile($path);

    // Get an associative array of skills across all jobs.
    $skills = self::getUniqueSkills($jobs);

    // Save the unique skills to the DB.
    $skillModels = self::loadSkills($skills);

    // Create the jobs and associate with them their respective skills.
    self::loadJobs($jobs, $skillModels);

  }

  public static function importUploadedFile(UploadedFile $file){

    // Uncomment to persist file to disk.
    // $file->store("uploads");

    return self::importFile($file->getRealPath());

  }
  
}