<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Type;
// use Alert;
use RealRashid\SweetAlert\Facades\Alert;
use App\Http\Requests\UserValidation;
use App\Http\Requests\EditUserValidation;

class UserController extends Controller
{
    private $totalPaginate = 6;

    public function formUtilizador()
    {  
        
        $tipo = Type::where('id', '<>', 3)->get();
        return view('Utilizador.adicionar', compact('tipo'));
    }

    public function addUtilizador(UserValidation $request)
    {   
        $user                   = new User;
        $user->Apelido          = $request->input('Apelido');
        $user->name             = $request->input('name');
        $user->telefone         = $request->input('telefone');
        $user->endereco         = $request->input('endereco');
        $user->dataNasc         = $request->input('dataNasc');
        $user->sexo             = $request->input('sexo');
        $user->type_id          = $request->input('type_id');
        $user->email            = $request->input('email');
        $user->password         = bcrypt($request->input('password'));
        $user->specialties_id   = $request->input('specialties_id');
        $user->estado           = 'Activo';
        $user->descricao        = $request->input('descricao');
        $user->save();

        Alert::success('Gravado com sucesso')->persistent('Okay');
            return redirect()->back();                        
        
    }

    public function testeSweetalert()
    {
            
            return redirect()->back();

    }


    public function listarUtilizadores(User $user)
    {  
        $tipo                   = Type::all();
        $user                   = $user->where('type_id', '<>', 3)->paginate($this->totalPaginate);
        $i                      = 1;

        return view('Utilizador.listar', compact('user', 'i', 'tipo'));
    }

    public function getBlockuser(Request $request, $id)
    {
        $user = User::find($id);

        $user->estado = 'Bloqueado';

        $user->update();
       
       Alert::success('Bloqueado com sucesso')->persistent('Okay');
            return redirect()->back();    
    }

    public function getUnlock(Request $request, $id)
    {
        $user = User::find($id);

        $user->estado = 'Activo';
        $user->update();

      Alert::success('Desbloqueado com sucesso')->persistent('Okay');
            return redirect()->back();
    }


    public function formEditar(User $user, $id)
    {   
        $user = $user->find($id);
        $tipo = Type::where('id', '<>', 3)->get();

        return view('Utilizador.editar', compact('user', 'tipo'));
        
    }

    public function editarUser(EditUserValidation $request, $id)
    {
        $user                = User::find($id);
        $user->Apelido          = $request->input('Apelido');
        $user->name             = $request->input('name');
        $user->telefone         = $request->input('telefone');
        $user->endereco         = $request->input('endereco');
        $user->dataNasc         = $request->input('dataNasc');
        $user->sexo             = $request->input('sexo');
        $user->type_id          = $request->input('type_id');
        $user->email            = $request->input('email');
        $user->password         = bcrypt($request->input('password'));
        $user->specialties_id   = $request->input('specialties_id');
        $user->estado           = 'Activo';
        $user->descricao        = $request->input('descricao');
        $user->update();

        Alert::success('Editado com sucesso')->persistent('Okay');
            return redirect()->back();   

    }


    public function pesquisarUser(Request $request, User $user)
    {
        
        $dataForm               = $request->except('_token');
        $user                   = $user->pesquisar($dataForm, $this->totalPaginate);
        $tipo                   = Type::all();
        $i                      = 1; 

        return view('Utilizador.listar', ['user' => $user, 
                                                  'dataForm' => $dataForm, 
                                                  'tipo' => $tipo, 
                                                  'i' => $i]);  
        $user       = $user->paginate($this->totalPaginate);
    }
}
