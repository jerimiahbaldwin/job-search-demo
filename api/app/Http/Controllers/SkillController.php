<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Skill;

class SkillController extends Controller
{

    public function index()
    {
        return Skill::all();
    }
 
    public function show($id)
    {
        return Skill::find($id);
    }

    public function store(Request $request)
    {
        return Skill::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $skill = Skill::findOrFail($id);
        $skill->update($request->all());

        return $skill;
    }

    public function delete(Request $request, $id)
    {
        $skill = Skill::findOrFail($id);
        $skill->delete();

        return 204;
    }
}
