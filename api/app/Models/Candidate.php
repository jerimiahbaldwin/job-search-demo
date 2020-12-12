<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Candidate extends Model
{
    use HasFactory;
    protected $fillable = ['firstname', 'lastname'];

    public function skills(){
      return $this->belongsToMany(Skill::class)->withPivot(['competence_level'])->withTimestamps();
    }
}
