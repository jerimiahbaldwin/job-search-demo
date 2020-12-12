<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// CSV Uploads
Route::post('jobs/csv', 'App\Http\Controllers\JobsCsvUploadController@store');

// Reports
Route::post('reports/candidate-job-match', 'App\Http\Controllers\ReportController@candidateJobMatchReport');

// Job Skills
Route::put('jobs/{jobId}/skills/{jobSkillId}', 'App\Http\Controllers\JobSkillController@update');

// Candidate Skills
Route::post('candidates/{candidateId}/skills', 'App\Http\Controllers\CandidateSkillController@store');
Route::put('candidates/{candidateId}/skills/{candidateSkillId}', 'App\Http\Controllers\CandidateSkillController@update');
Route::delete('candidates/{candidateId}/skills/{skillId}', 'App\Http\Controllers\CandidateSkillController@delete');

// Candidates
Route::get('candidates', 'App\Http\Controllers\CandidateController@index');
Route::get('candidates/{candidate}', 'App\Http\Controllers\CandidateController@show');
Route::post('candidates', 'App\Http\Controllers\CandidateController@store');
Route::put('candidates/{candidate}', 'App\Http\Controllers\CandidateController@update');
Route::delete('candidates/{candidate}', 'App\Http\Controllers\CandidateController@delete');

// Jobs
Route::get('jobs', 'App\Http\Controllers\JobController@index');
Route::get('jobs/{job}', 'App\Http\Controllers\JobController@show');
Route::post('jobs', 'App\Http\Controllers\JobController@store');
Route::put('jobs/{job}', 'App\Http\Controllers\JobController@update');
Route::delete('jobs/{job}', 'App\Http\Controllers\JobController@delete');

// Skills
Route::get('skills', 'App\Http\Controllers\SkillController@index');
Route::get('skills/{skill}', 'App\Http\Controllers\SkillController@show');
Route::post('skills', 'App\Http\Controllers\SkillController@store');
Route::put('skills/{skill}', 'App\Http\Controllers\SkillController@update');
Route::delete('skills/{skill}', 'App\Http\Controllers\SkillController@delete');
