@extends('templete.templete')

@section('content')
	
		<main class="mn-inner">
                <div class="row">
                    <div class="col s12">
                        <div class="page-title">Utilizadores</div>
                    </div>
                    <div class="col s12 m12 l12">
                        <div class="card">
                            <div class="card-content">
                                <span class="card-title">Formulário de registo de utilizadores</span><br>
                                <div class="row">
                                	{!!Form::open(['route'=>['editarUser', $user->id], 'method' => 'PUT', 'class' => 'col s12'])!!}
                                	@csrf
                                     @include('includes.alerts')
                                        <div class="row">
                                            <div class="input-field col s6">
                                                <input value="{{ $user->Apelido }}" id="first_name" name="Apelido" type="text" class="validate" placeholder="Apelido">
                                            </div>
                                            <div class="input-field col s6">
                                                <input value="{{ $user->name }}" id="last_name" name="name" type="text" class="validate" placeholder="Nomes">
                                            </div>
                                        </div>
                                         <div class="row">
                                            <div class="input-field col s6">
                                                <input value="{{ $user->telefone }}" id="first_name" name="telefone" type="number" class="validate" placeholder="telefone">
                                            </div>
                                            <div class="input-field col s6">
                                                <input value="{{ $user->endereco }}" id="last_name" name="endereco" type="text" class="validate" placeholder="Endereço">
                                            </div>
                                        </div>
                                        <div class="row">

                                            <div class="input-field col s6">
                                                 <input id="birthdate" value="{{ $user->dataNasc }}" name="dataNasc" type="text" class="datepicker" placeholder="Data de Nascimento">
                                            </div>
                                            <div class="input-field col s6">
                                            <label for="last_name">Sexo</label>
                                            	<p class="p-v-xs">
                                            		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		                                            <input class="with-gap" value="Masculino" name="sexo" type="radio" id="test1">
		                                            <label for="test1">Masculino</label>
		                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		                                            <input class="with-gap"  value="Femenino" name="sexo" type="radio" id="test2">
		                                            <label for="test2">Femenino</label>

		                                        </p>
                                               
                                            </div>
                                        </div>
                                    <div class="row">
                                       	<div class="input-field col s6">
                                        <select class="initialized" name="type_id">
                                            <option disabled="" selected="">--Selecione tipo--</option>
                                            @foreach($tipo as $tipos)
                                                <option value="{{ $tipos->id }}">{{ $tipos->name }}</option>
                                            @endforeach
                                        </select>
                                    </div>

                                   	<div class="input-field col s6">
                                                <input value="{{ $user->email }}" id="last_name" name="email" type="text" class="validate" autocomplete="new-password"  placeholder="Email">
                                            </div>
                                    </div>

                                        <div class="row">
                                            <div class="input-field col s6">
                                                <input id="first_name" name="password" type="password" class="validate" autocomplete="new-password" placeholder="Password">
                                            </div>
                                            <div class="input-field col s6">
                                                <input id="last_name" name="password_confirmation" type="password" class="validate" placeholder="Confirmar Password">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="input-field col s12">
                                                <textarea value="{{ $user->descricao }}" id="textarea1" name="descricao" placeholder="Descrição" class="materialize-textarea" length="120"></textarea>
                                            <span class="character-counter" style="float: right; font-size: 12px; height: 1px;"></span></div>
                                        </div>

                                        <div class="row" align="right">
                                            <button  type="submit" class="btn-floating btn-large waves-effect waves-light blue"><i class="material-icons">send</i> Gravar</button>
                                        </div>
                                        
                                   {{ Form::close() }}
                                </div>
                            </div>
                        </div>               
                    </div>
                </div>
            </main>

@endsection