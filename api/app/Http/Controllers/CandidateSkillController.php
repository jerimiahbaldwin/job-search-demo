<?php

namespace App\Http\Controllers;

use App\Models\Candidate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CandidateSkillController extends Controller
{
  public function store(Request $request, $candidateId)
  {
    $candidate = Candidate::with('skills')->findOrFail($candidateId);
    $skill_id = $request->input('skillId');
    $competence_level = $request->input('competenceLevel');
    return $candidate->skills()->attach($skill_id, ['competence_level' => $competence_level]);;
  }

  public function update(Request $request, $candidateId, $skillId)
  {
    $competence_level = $request->input("competence_level");
    DB::update('update candidate_skill set competence_level = ? where candidate_id = ? and skill_id = ?', [$competence_level, $candidateId, $skillId]);
  }

  public function delete(Request $request, $candidateId, $skillId)
  {
    DB::delete("delete from candidate_skill where candidate_id = ? and skill_id = ?", [$candidateId, $skillId]);
    return 204;
  }

}
