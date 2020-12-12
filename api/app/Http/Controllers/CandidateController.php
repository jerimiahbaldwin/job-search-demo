<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Candidate;

class CandidateController extends Controller
{

    public function index()
    {
        return Candidate::with('skills')->get();
    }
 
    public function show($id)
    {
        return Candidate::with("skills")->find($id);
    }

    public function store(Request $request)
    {
        return Candidate::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $candidate = Candidate::findOrFail($id);
        $candidate->update($request->all());

        return $candidate;
    }

    public function delete(Request $request, $id)
    {
        $candidate = Candidate::findOrFail($id);
        $candidate->delete();

        return 204;
    }    
}
