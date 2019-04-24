<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Patient;
use App\Schedules;
use RealRashid\SweetAlert\Facades\Alert;
use App\User;
use App\Inquirie;
use App\Http\Requests\ConsultaValidation;


class ConsultaController extends Controller
{
    private $totalPaginate = 6;

    public function formMarcarconsulta(Patient $paciente, Schedules $agenda , User $user)
    {
        $paciente           = $paciente->all();
        $agenda             = $agenda->all();
        $user               = $user->where('type_id', '=' , 3)->get();

    	return view('Consulta.marcar', compact('paciente' ,'agenda','user'));
    }

    public function listarConsultas(Inquirie $consulta)
    {
        $paciente       = Patient::all();
        $medico         = User::where('type_id', 3)->get();
        $consulta       = $consulta->paginate($this->totalPaginate);
        $i              = 1;
    	return view('Consulta.listar', compact('consulta', 'i', 'paciente', 'medico'));
    }

    public function addConsulta(ConsultaValidation $request)
    {
        $idMedico                   = $request->input('user_id');
        $nomeMedica                 = User::where('id', '=', $idMedico )->first();
        $diaSemana                  = $request->input('dataConsulta');
        $horaConsulta               = $request->input('horaConsulta');
        $dataFormArray              = explode(' ',$diaSemana);
        if($dataFormArray[1] == 'January,' ){
            $dataFormArray[1] = 1;
        }elseif($dataFormArray[1] == 'February,'){
            $dataFormArray[1] = 2;
        }elseif($dataFormArray[1] == 'March,'){
            $dataFormArray[1] = 3;
        }elseif($dataFormArray[1] == 'April,'){
            $dataFormArray[1] = 4;
        }elseif($dataFormArray[1] == 'May,'){
            $dataFormArray[1] = 5;
        }elseif($dataFormArray[1] == 'June,'){
            $dataFormArray[1] = 6;
        }elseif($dataFormArray[1] == 'July,'){
            $dataFormArray[1] = 7;
        }elseif($dataFormArray[1] == 'August,'){
            $dataFormArray[1] = 8;
        }elseif($dataFormArray[1] == 'September,'){
            $dataFormArray[1] = 9;
        }elseif($dataFormArray[1] == 'October,'){
            $dataFormArray[1] = 10;
        }elseif($dataFormArray[1] == 'November,'){
            $dataFormArray[1] = 11;
        }elseif($dataFormArray[1] == 'December,'){
            $dataFormArray[1] = 12;
        }
                                    // esta funcao retorna o dia de semana de uma determinada data e recebe como parametros mes, dia e o ano correspondente
         $retornarDiaSeman           = gregoriantojd($dataFormArray[1], $dataFormArray[0],$dataFormArray[2]);
         $diaDasemanaEscolhido       = jddayofweek($retornarDiaSeman,1);
         // retorna dados do dia da semana de acordo com a data escolhida
         $existeDataSemana         = Schedules::where('user_id', '=', $idMedico )
                                                 ->where('diaSemana', '=', $diaDasemanaEscolhido)
                                                 ->first();
        if(!$existeDataSemana){

             return redirect()->back()->with('error', 'O medico na trabalha nas ' .$diaDasemanaEscolhido);
        }else{ 
            
            if($horaConsulta >= $existeDataSemana->horaInicio && $horaConsulta <= $existeDataSemana->horaFim) {
                // rotorna a data e a hora da consulta marcada num dia especifico
                $jamarcouNessaDataHora       = Inquirie::where('user_id', '=', $idMedico )
                                                        ->where('horaConsulta', '=', $horaConsulta)
                                                          ->where('dataConsulta', '=', $diaSemana)
                                                            ->first();

                    if (!$jamarcouNessaDataHora) {
                        
                         $consulta                   = new Inquirie();
                         $consulta->paciente_id      = $request->input('paciente_id');
                         $consulta->user_id          = $request->input('user_id');
                         $consulta->dataConsulta     = $request->input('dataConsulta');
                         $consulta->horaConsulta     = $request->input('horaConsulta');
                         $consulta->estado           = 'Pendente';

                         $consulta->save();
                        Alert::success('Gravado com sucesso')->persistent('Okay');
                           return redirect()->back();
                    }else{

                        return redirect()->back()->with('error', 'O Medico '.$nomeMedica->name.' ja possui uma consulta para a hora selecionada, verfique a agenda medica');
                    }

            }else{
              return redirect()->back()->with('error', 'Por Favor escolha outra hora, pode consultar na agenda do medico.');  
            }

        }                                    
    }
    public function detalhesConsulta($id)
    {
      $detalhesConsulta = Inquirie::find($id);

      return view('Consulta.detalhes', compact('detalhesConsulta'));
    }

    public function cancelarConsulta($id)
    {
      $detalhesConsulta              = Inquirie::find($id);
      $detalhesConsulta->estado      = 'Cancelado';

      $detalhesConsulta->update();

      return redirect()->back();
    }
    public function pesquisarConsulta(Request $request, Inquirie $consulta)
    {
        
        $dataForm               = $request->except('_token');
        $consulta               = $consulta->pesquisarPaciente($dataForm, $this->totalPaginate);
        $paciente               = Patient::all();
        $medico                 = User::where('type_id', 3)->get();
        $i                      = 1;

        return view('Consulta.listar', ['consulta' => $consulta, 
                                                  'dataForm' => $dataForm, 
                                                  'paciente' => $paciente, 
                                                  'medico'   => $medico, 
                                                  'i'        => $i]);  

        $consulta                = $consulta->paginate($this->totalPaginate);
    }
}
