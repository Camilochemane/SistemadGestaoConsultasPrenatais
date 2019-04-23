<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('Apelido')->nullable();
            $table->string('name');  
            $table->integer('telefone')->nullable();
            $table->string('endereco')->nullable();
            $table->string('dataNasc')->nullable();
            $table->string('sexo')->nullable();
            $table->string('email', 30)->index()->unique();
            $table->string('password');
            $table->string('estado')->nullable();
            $table->text('descricao')->nullable();
            $table->unsignedInteger('type_id');
            $table->unsignedInteger('specialties_id');
            $table->rememberToken();
            $table->timestamps();
            
            $table->foreign('type_id')->references('id')->on('types');
            $table->foreign('specialties_id')->references('id')->on('specialties');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
