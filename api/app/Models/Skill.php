<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Candidate;
Use App\Models\Job;

class Skill extends Model
{
    use HasFactory;
    protected $fillable = ['key', 'name'];

    public function candidates(){
        return $this->belongsToMany(Candidate::class);
    }
    
    public function jobs(){
        return $this->belongsToMany(Job::class);
    }
}
