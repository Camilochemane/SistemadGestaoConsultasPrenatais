<?php

namespace App\Http\Controllers;
use App\Patient;
use RealRashid\SweetAlert\Facades\Alert;
use App\Type;
use App\Inquirie;
use App\Http\Requests\PacienteValidation;
use Illuminate\Http\Request;

class PacienteController extends Controller
{
    private $totalPaginate =    6;
    public function formPaciente()
    {
    	
    	return view('Paciente.adicionar');
    }

    public function listarPaciente(Patient $paciente)
    {
        $paciente = $paciente->paginate($this->totalPaginate);
        $i        = 1;
    	return view('Paciente.listar', compact('paciente', 'i'));
    }

    public function addPaciente(PacienteValidation $request)
    {   
        $pacienteCodigo                     = Patient::all()->last();
        $ano                                = date('Y');
        $paciente                           = new Patient;
        $paciente->name                     = $request->input('name');
        $paciente->apelido                  = $request->input('apelido');
        $paciente->endereco                 = $request->input('endereco');
        $paciente->bilheteIdentidade        = $request->input('bilheteIdentidade');
        $paciente->dataEmissaoProcesso      = $request->input('dataEmissaoProcesso');
        $paciente->dataNasc                 = $request->input('dataNasc');
        $paciente->profissao                = $request->input('profissao');
        $paciente->naturalidade             = $request->input('naturalidade');
        $paciente->telefone                 = $request->input('telefone');
        $paciente->filiacao                 = $request->input('filiacao');
        $paciente->estado                   = 'em processo';

                if(!$pacienteCodigo){
                    $paciente->codigoPaciente   = $ano.'0001';
                } else{
                    $paciente->codigoPaciente   = ($pacienteCodigo->codigoPaciente + 1);
                }
        $paciente->save();

    	Alert::success('Gravado com sucesso')->persistent('Okay');
        // $view     = view('Paciente.fichaPrenatal', compact('paciente'));
        // $pdf      = \App::make('dompdf.wrapper');
        // $pdf->loadHTML($view);
        // return $pdf->stream('paciente');
        return redirect()->back();
            
    }

     public function pacientDdetalhes($id)
     {
          $consulta     = Inquirie::where('paciente_id', '=', $id)->get();
          $paciente     = Patient::find($id)->first();

         return view('Paciente.detalhes', compact('consulta', 'paciente'));
     }

     public function pesquisarPaciente(Request $request, Patient $paciente)
    {
        
        $dataForm               = $request->except('_token');
        $paciente               = $paciente->pesquisar($dataForm, $this->totalPaginate);
        $i                      = 1; 

        return view('Paciente.listar', ['paciente' => $paciente, 
                                                  'dataForm' => $dataForm, 
                                                  'i' => $i]);  
        $paciente       = $paciente->paginate($this->totalPaginate);
    }


    public function relatorio()
{
        $paciente = Patient::all();
        $view     = view('Relatorios.pacientes', compact('paciente'));
        $pdf      = \App::make('dompdf.wrapper');
        $pdf->loadHTML($view);
        return $pdf->stream('paciente');
}

    public function pacientesIRelatorio($id)
    {
        $paciente = Patient::find($id);
        $view     = view('Relatorios.pacientes', compact('paciente'));
        $pdf      = \App::make('dompdf.wrapper');
        $pdf->loadHTML($view);
        return $pdf->stream('paciente');
    }


    public function fichaPrenatal($id)
    {
       $paciente = Patient::find($id);

       return view('Relatorios.pacientes', compact('paciente'));
    }
}
