<?php

namespace Database\Factories;

use App\Models\Kategori;
use App\Models\Mapel;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Blog>
 */
class BlogFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $kategori = Kategori::pluck('kategori')->toArray();
        $mapel = Mapel::pluck('mapel')->toArray();
        return [
            'author' => fake()->name(),
            'title' => fake()->sentence(),
            'description' => fake()->paragraph(),
            'kategori' => fake()->randomElement($kategori),
            'mapel' => fake()->randomElement($mapel),
        ];
    }
}
