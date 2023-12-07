<?php

namespace Database\Seeders;

use App\Models\Mapel;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MapelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Mapel::create([
            'mapel' => 'Matematika'
        ]);
        Mapel::create([
            'mapel' => 'Bahasa Inggris'
        ]);
        Mapel::create([
            'mapel' => 'Bahasa Indonesia'
        ]);
        Mapel::create([
            'mapel' => 'Sejarah'
        ]);
        Mapel::create([
            'mapel' => 'Bahasa Jawa'
        ]);
    }
}
