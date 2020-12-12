<?php

namespace Database\Seeders;

use App\Models\Candidate;
use App\Utilities\ImportJobsCsv;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
      DB::table("candidates")->truncate();
      $path = base_path() . "/data/jobs.txt";
      ImportJobsCsv::importFile($path);
      $candidate = new Candidate();
      $candidate->firstName = "John";
      $candidate->lastName = "Doe";
      $candidate->save();

    }
}
