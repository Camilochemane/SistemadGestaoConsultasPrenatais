@extends('templete.templete')

@section('content')
	<main class="mn-inner">
                <div class="row">
                    <div class="col s12">
                        <div class="page-title">Gestante</div>
                    </div>
                    <div class="col s12 m12 l12">
                        <div class="card">
                            <div class="card-content">
                                <span class="card-title">Formulário de registo das Gestantes</span><br>
                                <div class="row">
                                    {!!Form::open(['route'=>'addConsulta', 'method' => 'POST', 'class' => 'col s12'])!!}
                                    @csrf
                                     @include('includes.alerts')
                                     
                                                <div class="row">
                                                    <div class="col m6">
                                                        <div class="row">
                                                            <div class="input-field col m12 s12">
                                                               <select class="initialized" name="paciente_id">
                                                                    <option disabled="" selected="">--Selecione o paciente--</option>
                                                                    @foreach($paciente as $pacientes)
                                                                        <option value="{{ $pacientes->id }}">{{ $pacientes->name }}</option>
                                                                    @endforeach
                                                                </select>                
                                                             </div>
                                                             <div class="input-field col m12 s12">
                                                                <input id="birthdate" name="dataConsulta" type="date" placeholder="Data da consulta" class="datepicker required">
                                                            </div>
                                                        </div>
                                                    </div>
			                                   <div class="col m6">
			                                   <div class="row">
                                                            <div class="input-field col m12 s12">
                                                               <select class="initialized" name="user_id">
                                                                    <option disabled="" selected="">--Selecione o medico--</option>
                                                                    @foreach($user as $users)
                                                                        <option value="{{ $users->id }}">{{ $users->name }}</option>
                                                                    @endforeach
                                                                </select>                
                                                             </div>
                                                            
                                                            <div class="input-field col m12 s12">
                                                                <input id="phone" name="horaConsulta" type="time" class="required validate" placeholder="Horas">
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                           <div class="row">
                                            <div class="input-field col s12">
                                                <textarea id="textarea1" placeholder="Descrição" name="descricao" class="materialize-textarea" length="120"></textarea>
                                            <span class="character-counter" style="float: right; font-size: 12px; height: 1px;"></span></div>
                                        </div>
                                          <div class="row" align="right">
                                            <button  type="submit" class="btn-floating btn-large waves-effect waves-light blue"><i class="material-icons">send</i> Gravar</button>
                                        </div>
                                        
                                                </div>
                                   {{ Form::close() }}
                                </div>
                            </div>
                        </div>               
                    </div>
                </div>
            </main>
@stop

