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
                                <span class="card-title">Formulário de registo de Médico</span><br>
                                <div class="row">
                                    {!!Form::open(['route'=>'addMedico', 'method' => 'POST', 'class' => 'col s12'])!!}
                                    @csrf
                                     @include('includes.alerts')
                                     @include('sweet::alert')
                                     
                                                <div class="row">
                                                    <div class="col m6">
                                                        <div class="row">
                                                            <div class="input-field col m6 s12">
                                                                <input id="firstName" placeholder="Apelido" name="Apelido" type="text" class="required validate">
                                                            </div>
                                                            <div class="input-field col m6 s12">
                                                                <input id="lastName" placeholder="Nomes" name="name" type="text" class="required validate">
                                                            </div>
                                                            <div class="input-field col s12">
                                                                <input id="email" placeholder="Email" name="email" type="email" class="required validate" autocomplete="new-password">
                                                            </div>
                                                            <div class="input-field col s12">
                                                                <input id="password" name="password" type="password" autocomplete="new-password" class="required validate" placeholder="password">
                                                            </div>
                                                            <div class="input-field col s12">
                                                                <input id="confirm" name="password_confirmation" type="password" class="required validate" placeholder="Confirmar Password">
                                                            </div>
                                                        </div>
                                                    </div>
                                  <div class="col m6">
                                   <div class="row">
                                                         <div class="col m10">
                                                            <div class="input-field col m12 s12">
                                                                 <select class="initialized" name="specialties_id">
                                                                <option disabled="" selected="">--Selecione especialidade--</option>
                                                                @foreach($specialtie as $specialties)
                                                                    <option value="{{ $specialties->id }}">{{ $specialties->designacao }}</option>
                                                                @endforeach
                                                            </select>
                                                            </div>
                                                        </div>
                                                        <div class="col m2">
                                                            <a href="#modal1" class="modal-trigger btn tooltipped" data-position="right" data-delay="50" data-tooltip="adicionar esoecialidade">+</a>
                                                        </div>

                                                            <input type="hidden" name="type_id" value="3" >

                                                            <div class="input-field col m12 s12">
                                                                <input id="address" placeholder="Endereço" name="endereco" type="text">
                                                            </div>
                                                            <div class="input-field col m6 s12">
                                                                <input id="birthdate" name="dataNasc" type="date" placeholder="Data de Nascimento" class="datepicker required">
                                                            </div>
                                                            <div class="input-field col m6 s12">
                                                                <input id="phone" name="telefone" type="tel" class="required validate" placeholder="telefone">
                                                            </div>
                                                            <div class="input-field col s12">
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

@endsection

<div id="modal1" class="modal">
 {!!Form::open(['route'=>'addEspecialidade', 'method' => 'POST', 'class' => 'col s12'])!!}
    <div class="modal-content">
        <h4>Registar especialidade do medico</h4>
        <div class="row">
            <div class="input-field col m12 s12">
                <input id="address" placeholder="Especialidade" name="specialidade" type="text">
             </div>
        </div>
    </div>
    <hr>
    <div class="modal-footer">
         <button  type="submit" class="modal-action modal-close waves-effect waves-blue btn-flat"> Gravar</button>
    </div>
 {{ Form::close() }}
</div>