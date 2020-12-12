<?php

namespace App\Http\Controllers;

use App\DTOs\CandidateJobMatchDTO;
use App\Reports\CandidateJobMatchReport;
use Illuminate\Http\Request;


class ReportController extends Controller
{
  public function candidateJobMatchReport(Request $request){
    $candidateId = $request->input("candidateId");
    $report = new CandidateJobMatchReport($candidateId);
    $data = $report->execute();

    $results = new CandidateJobMatchDTO();
    $results->matchStrengths = $data['matchStrengths'];
    $results->jobs = $data['jobs']->toArray();
    return json_encode($results);
  }
}
