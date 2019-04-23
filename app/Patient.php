<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    
    protected $fillable = [ 'name','apelido','endereco','bilheteIdentidade','dataEmissaoProcesso','dataNasc','profissao','naturalidade','telefone','filiacao' ];


    public function pesquisar(Array $data, $totalPaginate)
    {
        return $this->where(function ($query) use ($data){

            if(isset($data['name']))
                    $query->where('name', 'like', '%'.$data['name'].'%');


            if(isset($data['estado']))
                    $query->where('estado', $data['estado']);

        })->paginate($totalPaginate);
}
}
