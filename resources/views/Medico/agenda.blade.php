@extends('templete.templete')

@section('content')
    
        <main class="mn-inner">
                <div class="row">
                    <div class="col s12">
                        <div class="page-title">Medico</div>
                    </div>
                    <div class="col s12 m12 l12">
                        <div class="card">
                            <div class="card-content">
                                <span class="card-title">Agenda medica</span><br>
                                <div class="row">
                                    {!!Form::open(['route'=>'addAgenda', 'method' => 'POST', 'class' => 'col s12'])!!}
                                    @csrf
                                     @include('includes.alerts')
                                     @include('sweet::alert')
                                     
                                                <div class="row">
                                                    <div class="col m6">
                                                        <div class="row">
                                                        
                                                        @if(isset($user))
                                                            <div class="input-field col  s12">
                                                                <input id="lastName" placeholder="Nome do medico"  type="text" class="required validate" disabled="" value="{{ $user->name.' '.$user->Apelido }}">
                                                                <input type="hidden" name="user_id" value="{{ $user->id }}">

                                                            </div>
                                                        @else

                                                         <div class="input-field col m12 s12">
                                                                 <select class="initialized" name="user_id">
                                                                <option disabled="" selected="">--Selecione o medico--</option>
                                                                @foreach($medico as $medico)
                                                                    <option value="{{ $medico->id }}">{{ $medico->name.' '.$medico->Apelido }}</option>
                                                                @endforeach
                                                            </select>
                                                            </div>

                                                        @endisset
                                                            <div class="input-field col s12">
                                                                <input id="horaInicio" name="horaInicio" type="time" placeholder="00:00" class="required">
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                  <div class="col m6">
                                   <div class="row">
                                                            <div class="input-field col m12 s12">
                                                                 <select class="initialized" name="diaSemana">
                                                                <option disabled="" selected="">--Selecione o dia de semana--</option>
                                                                
                                                                    <option value="Monday">Segunda feira</option>
                                                                    <option value="Tuesday">Terça feira</option>
                                                                    <option value="Wednesday">Quarta feira</option>
                                                                    <option value="Thursday">Quinta feira</option>
                                                                    <option value="Friday">Sexta feira</option>
                                                             
                                                            </select>
                                                            </div>

                                                         <div class="input-field col s12">
                                                                <input id="horaInicio" name="horaFim" type="time" placeholder="00:00" class="required">
                                                            </div>   
                                                        </div>
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

@endsection