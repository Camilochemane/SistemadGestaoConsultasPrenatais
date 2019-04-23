<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Specialtie extends Model
{
    


    public function pesquisar(Array $data, $totalPaginate)
    {
        return $this->where(function ($query) use ($data){

            if(isset($data['name']))
                    $query->where('name', $data['name']);


            if(isset($data['specialties_id']))
                    $query->where('specialties_id', $data['specialties_id']);

        })->paginate($totalPaginate);
}
}
