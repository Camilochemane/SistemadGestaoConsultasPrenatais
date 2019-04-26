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
                                    {!!Form::open(['route'=>['editarUser', $user->id] , 'method' => 'PUT', 'class' => 'col s12'])!!}
                                    @csrf
                                     @include('includes.alerts')
                                     
                                                <div class="row">
                                                    <div class="col m6">
                                                        <div class="row">
                                                            <div class="input-field col m6 s12">
                                                                <input id="firstName" placeholder="Apelido" name="Apelido" value="{{ $user->Apelido }}" type="text" class="required validate">
                                                            </div>
                                                            <div class="input-field col m6 s12">
                                                                <input id="lastName" placeholder="Nomes" name="name" value="{{ $user->name }}" type="text" class="required validate">
                                                            </div>
                                                            <div class="input-field col s12">
                                                                <input id="email" placeholder="Email" name="email" value="{{ $user->email }}"type="email" class="required validate" autocomplete="new-password">
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
                                            <input type="hidden" name="specialties_id" value="3">

                                                            <div class="input-field col m12 s12">
                                                                 <select class="initialized" name="type_id">
                                                                <option disabled="" selected="">--Selecione tipo--</option>
                                                                    @foreach($tipo as $tipos)
                                                                <option value="{{ $tipos->id }}">{{ $tipos->name }}</option>
                                                            @endforeach
                                                                            </select>
                                                            </div>

                                                            <div class="input-field col m12 s12">
                                                                <input id="address" placeholder="Endereço" name="endereco" value="{{ $user->endereco }}" type="text">
                                                            </div>
                                                            <div class="input-field col m6 s12">
                                                                <input id="birthdate" name="dataNasc" value="{{ $user->dataNasc }}" type="date" placeholder="Data de Nascimento" class="datepicker required">
                                                            </div>
                                                            <div class="input-field col m6 s12">
                                                                <input id="phone" name="telefone" value=" {{ $user->telefone }}" type="tel" class="required validate" placeholder="telefone">
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
                                                <textarea id="textarea1" placeholder="Descrição" name="descricao" {{ $user->descricao }} class="materialize-textarea" length="120"></textarea>
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


