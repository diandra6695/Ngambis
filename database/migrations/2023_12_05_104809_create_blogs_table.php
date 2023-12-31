<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('blogs', function (Blueprint $table) {
            $table->id();
            $table->string('author');
            $table->string('title');
            $table->text('description');
            $table->string('image')->nullable();
            $table->string('slug')->nullable();
            $table->string('kategori')->references('kategori')->on('kategoris')->onDelete('cascade');
            // $table->foreign('kategori')->references('kategori')->on('kategoris')->onDelete('cascade');
            $table->string('mapel')->references('mapel')->on('mapels')->onDelete('cascade');
            // $table->foreign('mapel')->references('mapel')->on('mapels')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('blogs');
    }
};
