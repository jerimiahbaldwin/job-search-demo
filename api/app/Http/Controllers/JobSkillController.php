<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class JobSkillController extends Controller
{
  public function update(Request $request, $jobId, $skillId)
  {
    $importance_level = $request->input("importance_level");
    DB::update('update job_skill set importance_level = ? where job_id = ? and skill_id = ?', [$importance_level, $jobId, $skillId]);
  }
}
