<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Specialtie;
use App\User;
use App\Type;
use RealRashid\SweetAlert\Facades\Alert;
use App\Schedules;
use App\Inquirie;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        if (Auth::user()->id == 1) {

           return view('Admin.index');
        }elseif(Auth::user()->id == 2){

           return view('Utilizador.index');

        }else{
        $id                    = Auth::user()->id; 
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
        return view('Medico.index', compact('detalhesSegunda','detalhesTerca','detalhesQuarta','detalhesQuinta','detalhesSexta', 'medico', 'consultasPendente', 'consultasRealizadas'));

        }
        
    }
}
