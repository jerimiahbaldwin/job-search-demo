<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Utilities\ImportJobsCsv;

class JobsCsvUploadController extends Controller
{
  public function store(Request $request)
  {
    try {
      ImportJobsCsv::importUploadedFile($request->file('myFile'));
      return response()->json(array('status' => 'success'));
    } catch (\Exception $e) {
      return response()->json(array('status' => 'error', 'message' => $e->getMessage()));
    }
  }
}
