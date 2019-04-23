<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;
use App\Patient;

class Inquirie extends Model
{
    public function medico()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function paciente()
    {
        return $this->belongsTo(Patient::class, 'paciente_id');
    }


    public function pesquisarPaciente(Array $data, $totalPaginate)
    {
        return $this->where(function ($query) use ($data){

            if(isset($data['paciente_id']))
                    $query->where('paciente_id', $data['paciente_id']);


            if(isset($data['medico_id']))
                    $query->where('user_id', $data['medico_id']);

        })->paginate($totalPaginate);
}

}
