<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Skill;

class Job extends Model
{
  use HasFactory;
  protected $fillable = ['title', 'company'];

  public function skills()
  {
    return $this->belongsToMany(Skill::class)->withPivot(['importance_level'])->withTimestamps();
  }
}
