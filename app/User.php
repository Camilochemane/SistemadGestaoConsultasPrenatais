<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['Apelido','name','telefone','endereco','dataNasc','sexo','type_id','email','password','estado','descricao',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

     public function pesquisar(Array $data, $totalPaginate)
    {
        return $this->where(function ($query) use ($data){

            if(isset($data['name']))
                    $query->where('name', $data['name']);


            if(isset($data['type_id']))
                    $query->where('type_id', $data['type_id']);

        })->paginate($totalPaginate);
}

public function pesquisarMedico(Array $data, $totalPaginate)
    {
        return $this->where(function ($query) use ($data){

            if(isset($data['name']))
                    $query->where('name', $data['name']);


            if(isset($data['specialties_id']))
                    $query->where('specialties_id', $data['specialties_id']);

        })->paginate($totalPaginate);
}

}