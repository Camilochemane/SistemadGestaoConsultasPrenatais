@extends('templete.templete')

@section('content')
    
        <main class="mn-inner">
                <div class="row">
                    <div class="col s12">
                        <div class="page-title">Paciente</div>
                    </div>
                    <div class="col s12 m12 l12">
                        <div class="card">
                            <div class="card-content">
                                <span class="card-title">Formulário de registo dos pacientes</span><br>
                                <div class="row">
                                    {!!Form::open(['route'=>'addPaciente', 'method' => 'POST', 'class' => 'col s12'])!!}
                                    @csrf
                                     @include('includes.alerts')
                                     @include('sweet::alert')
                                     
                                                <div class="row">
                                                    <div class="col m6">
                                                        <div class="row">
                                                            <div class="input-field col m6 s12">
                                                                <input id="firstName" placeholder="Apelido" name="apelido" type="text" class="required validate">
                                                            </div>
                                                            <div class="input-field col m6 s12">
                                                                <input id="lastName" placeholder="Nomes" name="name" type="text" class="required validate">
                                                            </div>
                                                            <div class="input-field col m6 s12">
                                                                <input id="address" placeholder="Bilhete Identidade" name="bilheteIdentidade" type="text">
                                                            </div>
                                                            <div class="input-field col m6 s12">
                                                                <input id="address" placeholder="Naturalidade" name="naturalidade" type="text">
                                                            </div>
                                                            <div class="input-field col m6 s12">
                                                                <input id="address" placeholder="Profissao" name="profissao" type="text">
                                                            </div>
                                                            <div class="input-field col m6 s12">
                                                                <input id="phone" name="telefone" type="tel" class="required validate" placeholder="telefone">
                                                            </div>
                                                            <div class="input-field col m12 s12">
                                                                <input id="birthdate" name="dataNasc" type="date" placeholder="Data de nascimento" class="datepicker required">
                                                            </div>
                                                        </div>
                                                    </div>
			                                   <div class="col m6">
			                                   <div class="row">
                                                            <div class="input-field col m12 s12">
                                                                <input id="address" placeholder="Endereço" name="endereco" type="text">
                                                            </div>
                                                            <div class="input-field col m12 s12">
                                                                <input id="birthdate" name="dataEmissaoProcesso" type="date" placeholder="Data de emissao do processo" class="datepicker required">
                                                            </div>
                                                            <div class="input-field col m12 s12">
                                                                <input id="phone" name="filiacao" type="text" class="required validate" placeholder="Filiacao">
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