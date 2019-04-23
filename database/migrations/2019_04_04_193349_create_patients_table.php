<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePatientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patients', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('apelido');
            $table->string('endereco');
            $table->string('bilheteIdentidade');
            $table->string('dataEmissaoProcesso'); // Data de emissao do processo
            $table->string('dataNasc'); // Data deNascimento
            $table->string('profissao');
            $table->string('naturalidade');
            $table->string('telefone');
            $table->string('filiacao');
            $table->string('codigoPaciente');
            $table->string('descricao')->nullable();
            $table->string('estado')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('patients');
    }
}
