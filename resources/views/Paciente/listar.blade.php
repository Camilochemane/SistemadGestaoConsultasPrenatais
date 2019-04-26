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
                            @include('sweet::alert')
                            {!!Form::open(['route'=>'pesquisarPaciente', 'method' => 'POST', 'class' => 'col s12'])!!}
                                    @csrf
                                <div class="row">
                                    <div class="input-field col s2">
                                        <p>Lista dos pacientes</p>
                                    </div>
                                    <div class="input-field col s1" align="left">
                                         <a class=" tooltipped" data-position="right" data-delay="50" data-tooltip="Imprimir lista dos utilizadores" href="#"><i class="material-icons left">print</i></a>
                                    </div>
                                
                                    <div class="input-field col s9">
                                        
                                            <div class="input-field col s4">
                                                <input placeholder="digita o nome" name="name" id="first_name" type="text" class="validate valid">
                                            </div>
                                            <div class="input-field col s4">
                                            	<input placeholder="digita o estado" name="estado" id="first_name" type="text" class="validate valid">
                                            </div>
                                            <div class="input-field col s4">
                                                <button type="submit" class="waves-effect waves-black btn-flat m-b-xs">Pesquisar</button>
                                            </div>
                                         </div>
                                 </div>
                                 {{ Form::close() }}
                                 <hr>
                                    
                                <table class="striped">
                                     @include('includes.alerts')
                                    <thead>
                                        <tr>
                                            <th data-field="id">#</th>
                                            <th data-field="id">Nome</th>
                                            <th data-field="name">Profissao</th>
                                            <th data-field="price">Edereço</th>
                                            <th data-field="price">Telefone</th>
                                            <th data-field="price">Naturalidade</th>
                                            <th data-field="price">Estado</th>
                                            <th data-field="price">Acções</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    @forelse($paciente as $pacientes)
                                        <tr>
                                            <td>{{ $i++ }}</td>
                                            <td>{{ $pacientes->name.' '.$pacientes->apelido}}</td>
                                            <td>{{ $pacientes->profissao }}</td>
                                            <td>{{ $pacientes->endereco }}</td>
                                            <td>{{ $pacientes->telefone }}</td>
                                            <td>{{ $pacientes->naturalidade }}</td>
                                            <td>{{ $pacientes->estado }}</td>
                                            <td>

                                                <a href="#" class="waves-effect waves-light btn orange m-b-xs">Editar</a>
                                                <a href="{{ route('pacientDdetalhes',$pacientes->id ) }}" class="waves-effect waves-light btn green m-b-xs">Detalhes</a>
                                            </td>
                                        </tr>
                                    @empty
                                    	<tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                    		<td>Nenhum registo encontrado</td>
                                            <td></td>
                                            <td></td>
                                    	</tr>
                                    @endforelse
                                    </tbody>
                                </table>
                                <div align="right">
                                    @if(isset($dataForm))
                                        {{$paciente->appends($dataForm)->links()}}
                                    @else
                                         {{$paciente->links()}}
                                    @endif 
                                </div>
                            </div>
                        </div>

							</div>
						</div>
	</main>

@endsection