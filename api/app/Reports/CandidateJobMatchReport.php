<?php

namespace App\Reports;

use App\Models\Candidate;
use App\Models\Job;

const COMPETENCE_LEVELS = 5;

class CandidateJobMatchReport{
  private int $_candidateId;
  public function __construct($candidateId)
  {
    $this->_candidateId = $candidateId;
  }
  public function execute(){
    $candidate = Candidate::with("skills")->findOrFail($this->_candidateId);
    $jobs = Job::with("skills")->get();
    $matchStrengths = array();
    foreach($jobs as $job){
      $pointsPossible = 0;
      foreach($job->skills as $skill){
        $pointsPossible += $skill->pivot->importance_level;
      }
      $totalPoints = 0;
      foreach($job->skills as $jobSkill){
        foreach($candidate->skills as $candidateSkill){
          if ($candidateSkill->id == $jobSkill->id){
            $totalPoints += $jobSkill->pivot->importance_level * $candidateSkill->pivot->competence_level/COMPETENCE_LEVELS;
            break;
          }
        }
        $matchStrengths[$job->id] = $totalPoints / $pointsPossible;
      }
    }
    return array(
      'jobs' => $jobs,
      'matchStrengths' => $matchStrengths,
    );
  }
}