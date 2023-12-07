<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;

    protected $guarded = [
        'id'
    ];

    public function kategori()
    {
        return $this->belongsTo(Kategori::class, 'kategori', 'kategori');
    }
    public function mapel()
    {
        return $this->belongsTo(Mapel::class, 'mapel', 'mapel');
    }
}
