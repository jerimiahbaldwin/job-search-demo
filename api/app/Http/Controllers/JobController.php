<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Job;

class JobController extends Controller
{

    public function index()
    {
        return Job::with('skills')->get();
    }
 
    public function show($id)
    {
        return Job::find($id);
    }

    public function store(Request $request)
    {
        return Job::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $job = Job::findOrFail($id);
        $job->update($request->all());

        return $job;
    }

    public function delete(Request $request, $id)
    {
        $job = Job::findOrFail($id);
        $job->delete();

        return 204;
    }
}
