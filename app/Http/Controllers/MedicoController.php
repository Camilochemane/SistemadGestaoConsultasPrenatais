<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\MedicoValidation;
use App\Http\Requests\AgendaValidation;
use App\Specialtie;
use App\User;
use App\Type;
use RealRashid\SweetAlert\Facades\Alert;
use App\Schedules;
use App\Inquirie;
// use Alert;



class MedicoController extends Controller
{
    private $totalPaginate = 6;
    public function formMedico(Specialtie $specialtie)
    {
        // Alert::success('Success Message', 'Sucessos')->persistent("oky");
        $specialtie = $specialtie->where('id', '<>', 4)->get();
    	return view('Medico.adicionar', compact('specialtie'));
    }

	public function listarMedicos(User $user)
	{

        $especialidade          = Specialtie::where('id', '<>', 4)->get();
        $user                   = $user->where('type_id', '=' , 3)->paginate($this->totalPaginate);
        $i                      = 1;
    	return view('Medico.listar', compact('i', 'user', 'especialidade'));
	}

    public function addMedico(MedicoValidation $request)
    {   
        $user                   = new User;
        $user->Apelido          = $request->input('Apelido');
        $user->name             = $request->input('name');
        $user->telefone         = $request->input('telefone');
        $user->endereco         = $request->input('endereco');
        $user->dataNasc         = $request->input('dataNasc');
        $user->sexo             = $request->input('sexo');
        $user->type_id          = $request->input('type_id');;
        $user->email            = $request->input('email');
        $user->password         = bcrypt($request->input('password'));
        $user->specialties_id   = $request->input('specialties_id');;
        $user->estado           = 'Activo';
        $user->descricao        = $request->input('descricao');
        $user->save();

         Alert::success('Gravado com sucesso')->persistent('Okay');
            return redirect()->back();
    }

    public function pesquisarMedico(Request $request, User $user)
    {
        
        $dataForm               = $request->except('_token');
        $user                   = $user->pesquisarMedico($dataForm, $this->totalPaginate);
        $especialidade          = Specialtie::where('id', '<>', 4)->get();
        $i                      = 1; 

        return view('Medico.listar', ['user' => $user, 
                                                  'dataForm' => $dataForm, 
                                                  'especialidade' => $especialidade, 
                                                  'i' => $i]);  
        $user                   = $user->paginate($this->totalPaginate);
    }

    public function formAgenda(User $user)
    {   
        $medico                = $user->where('type_id', '=' , 3)->get();
    	return view('Medico.agenda', compact('medico'));
    }


    public function addAgenda(AgendaValidation $request)
    {   
        $existeAgenda            = Schedules::where('user_id', '=', $request->input('user_id'))
                                            ->where('diaSemana', '=', $request->input('diaSemana'))
                                                ->first();
        if($existeAgenda){
            Alert::error('Erro ao gravar', 'o medico ja possui uma agenda para a data e hora escolhida!!')->persistent('Okay');
        return redirect()->back();
        }else{
        $agenda                  = new Schedules();
        $agenda->diaSemana       = $request->input('diaSemana');
        $agenda->horaInicio      = $request->input('horaInicio');
        $agenda->horaFim         = $request->input('horaFim');
        $agenda->reserva         = 'agendado';
        $agenda->user_id         = $request->input('user_id');

        $agenda->save();
         Alert::success('Gravado com sucesso')->persistent('Okay');
        return redirect()->back();
        }
    }

    public function detalhesAgenda($id)
    {   
        $medico                = User::find($id);
        $detalhesSegunda       = Schedules::where('user_id', '=', $id)
                                                        ->where('diaSemana','=','Monday')->first();
        $detalhesTerca         = Schedules::where('user_id', '=', $id)
                                                        ->where('diaSemana','=','Tuesday')->first();
        $detalhesQuarta        = Schedules::where('user_id', '=', $id)
                                                        ->where('diaSemana','=','Wednesday')->first();
        $detalhesQuinta        = Schedules::where('user_id', '=', $id)
                                                        ->where('diaSemana','=','Thursday')->first();
        $detalhesSexta         = Schedules::where('user_id', '=', $id)
                                                        ->where('diaSemana','=','Friday')->first();
        $consultasPendente     = Inquirie::where('user_id', '=', $id)
                                                ->where('estado', '=', 'Pendente')->get();
        $consultasRealizadas   = Inquirie::where('user_id', '=', $id)
                                                ->where('estado', '<>', 'Pendente')->get();
        return view('Medico.detalhes', compact('detalhesSegunda','detalhesTerca','detalhesQuarta','detalhesQuinta','detalhesSexta', 'medico', 'consultasPendente', 'consultasRealizadas'));
    }
    public function addEspecialidade()
    {   
        
        Alert::success('Gravado com sucesso')->persistent('Okay');
        return redirect()->route('formMedico');
    }
}
