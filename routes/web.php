<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
	 // $nexmo  = app('Nexmo\Client');
  //                   $nexmo->message()->send([
  //                   'to'    => '258842317035',
  //                   'from'  => 'Carlitos',
  //                   'text'  => 'Mensagem enviada por '.config('Carlitos', ' Carlitos Hair Internactional').' Caro cliente foste Bloqueado pelo numro excessivo de reservas nao compridas'
  //                   ]); 
    return view('welcome');
    // return view('home.home');
});


Route::get('redirect', [
	'uses'  =>'sweetalert@sweetalert',
	'as'    => 'redirect'
]);
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::group(['prefix' => 'user', 'middleware' => 'auth'], function(){

	Route::get('form', [
		'uses' => 'UserController@formUtilizador',
		'as'   => 'formUtilizador'
	]);

	Route::post('add', [
		'uses' => 'UserController@addUtilizador',
		'as'   => 'addUtilizador'
	]);
	Route::get('sweetalert1', [
		'uses' => 'UserController@testeSweetalert',
		'as'   => 'testeSweetalert'
	]);

	Route::get('list', [
		'uses' => 'UserController@listarUtilizadores',
		'as'   => 'listarUtilizadores'
	]);

	Route::post('pesquisar', [
		'uses' => 'UserController@pesquisarUser',
		'as'   => 'pesquisarUser'
	]);

	Route::get('bloqueiar/{id}', [
		'uses' => 'UserController@getBlockuser',
		'as'   => 'userBloqueiar'
		]);

	Route::get('desbloquear/{id}', [
		'uses' => 'UserController@getUnlock',
		'as'   => 'userDesbloquear'
		]); 

	Route::get('editar/{id}', [
		'uses' => 'UserController@formEditar',
		'as'   => 'formEditar'
	]);


	Route::put('editar/{id}', [
		'uses' => 'UserController@editarUser',
		'as'   => 'editarUser'
	]);
});


Route::group(['prefix' => 'user/medico', 'middleware' => 'auth'], function(){

	Route::get('form', [
		'uses' => 'MedicoController@formMedico',
		'as'   => 'formMedico'
	]);

	Route::get('list', [
		'uses' => 'MedicoController@listarMedicos',
		'as'   => 'listarMedicos'
	]);

	Route::post('add', [
		'uses' => 'MedicoController@addMedico',
		'as'   => 'addMedico'
	]);

	Route::post('especialidade', [
		'uses' => 'MedicoController@addEspecialidade',
		'as'   => 'addEspecialidade'
	]);

	Route::get('form/agenda', [
		'uses'=> 'MedicoController@formAgenda',
		'as'  => 'formAgenda'
	]);

	Route::get('list/agenda', [
			'uses' => 'MedicoController@listAgenda',
			'as'   => 'listAgenda'
		]);

		Route::post('add/agenda', [
			'uses' => 'MedicoController@addAgenda',
			'as'   => 'addAgenda'
		]);

		Route::get('detalhes/{id}', [
			'uses' => 'MedicoController@detalhesAgenda',
			'as'   => 'detalhesAgenda'
		]);

	Route::post('pesquisar', [
		'uses' => 'MedicoController@pesquisarMedico',
		'as'   => 'pesquisarMedico'
	]);
});

Route::group(['prefix' => 'paciente', 'middleware' => 'auth'], function(){

		Route::get('form', [
			'uses' => 'PacienteController@formPaciente',
			'as'   => 'formPaciente'

		]);

		Route::get('listar', [
			'uses' => 'PacienteController@listarPaciente',
			'as'   => 'listarPaciente'
		]);

		Route::post('add', [
			'uses' => 'PacienteController@addPaciente',
			'as'   =>'addPaciente'
		]);

		Route::post('pesquisar', [
			'uses' => 'PacienteController@pesquisarPaciente',
			'as'   => 'pesquisarPaciente'
		]);
		Route::get('detalhes/{id}', [
			'uses' => 'PacienteController@pacientDdetalhes',
			'as'   => 'pacientDdetalhes'
		]);

		Route::get('relatorio/{id}', [
			'uses' => 'PacienteController@pacientesIRelatorio',
			'as'   => 'pacientesIRelatorio'
		]);
	} );


	Route::group(['prefix' => 'consulta', 'middleware' => 'auth'], function(){

		Route::get('form', [
			'uses' => 'ConsultaController@formMarcarconsulta',
			'as'   => 'formMarcarconsulta'
		]);

		Route::get('listar', [
			'uses' => 'ConsultaController@listarConsultas',
			'as'   => 'listarConsultas'
		]);

		Route::get('listar/medico', [
			'uses' => 'ConsultaController@listarConsultasmedico',
			'as'   => 'listarConsultasmedico'
		]);

		Route::post('add', [
			'uses' => 'ConsultaController@addConsulta',
			'as'   => 'addConsulta'
		]);
		Route::post('pesquisar', [
			'uses' => 'ConsultaController@pesquisarConsulta',
			'as'   => 'pesquisarConsulta'
		]);

		Route::get('detalhes/{id}', [
			'uses' => 'ConsultaController@detalhesConsulta',
			'as'   => 'detalhesConsulta'
		]);

		Route::get('cancelar/{id}', [
			'uses' => 'ConsultaController@cancelarConsulta',
			'as'   => 'cancelarConsulta'
		]);
	});
	

