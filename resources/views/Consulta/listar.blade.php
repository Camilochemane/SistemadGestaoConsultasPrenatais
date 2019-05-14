@extends('templete.templete')

@section('content')	

	<main class="mn-inner">
                <div class="row">
                    <div class="col s12">
                        <div class="page-title">Consultas</div>
                    </div>
                    <div class="col s12 m12 l12">
                    	<div class="card">
                            <div class="card-content">
                            @include('sweet::alert')
                            {!!Form::open(['route'=>'pesquisarConsulta', 'method' => 'POST', 'class' => 'col s12'])!!}
                                    @csrf
                                <div class="row">
                                    <div class="input-field col s3">
                                        <p>Lista das consultas marcadas</p>
                                    </div>
                                    <div class="input-field col s1" align="left">
                                         <a class=" tooltipped" data-position="right" data-delay="50" data-tooltip="Imprimir lista dos utilizadores" href="{{ route('relatorioConsulta') }}"><i class="material-icons left">print</i></a>
                                    </div>
                                
                                    <div class="input-field col s8">
                                        
                                            <div class="input-field col s4">
                                                <select class="initialized" name="paciente_id">
                                                                <option disabled="" selected="">--Selecione o paciente--</option>
                                                                @foreach($paciente as $pacientes)
                                                                    <option value="{{ $pacientes->id }}">{{ $pacientes->name }}</option>
                                                                @endforeach
                                                            </select>
                                            </div>
                                            <div class="input-field col s4">
                                            	<select class="initialized" name="medico_id">
                                                                <option disabled="" selected="">--Selecione o medico--</option>
                                                                @foreach($medico as $medico)
                                                                    <option value="{{ $medico->id }}">{{ $medico->name }}</option>
                                                                @endforeach
                                                            </select>
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
                                            <th data-field="id">Nome do paciente</th>
                                            <th data-field="name">Nome do Medico</th>
                                            <th data-field="price">Data/Hora</th>
                                            <th data-field="price">Estado</th>
                                            <th data-field="price">Acções</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    @forelse($consulta as $consultas)
                                        <tr>
                                            <td>{{ $i++ }}</td>
                                            <td>{{ $consultas->paciente->name.' '.$consultas->paciente->Apelido}}</td>
                                            <td>{{ $consultas->medico->name.' '.$consultas->medico->Apelido }}</td>
                                            <td>{{ $consultas->dataConsulta. ' '.$consultas->horaConsulta }}</td>
                                            <td>{{ $consultas->estado }}</td>
                                            <td>
                                             @if($consultas->estado == 'Cancelado')
                                                <a class="waves-effect disabled  waves-light btn blue m-b-xs">Atender</a>
                                                <a href="{{ route('cancelarConsulta',$consultas->id) }}" class="waves-effect  disabled  waves-light btn red m-b-xs">Cancelar</a>
                                                <a href="{{ route('detalhesConsulta',$consultas->id) }}" class="waves-effect waves-light btn green m-b-xs">Detalhes</a>
                                             @else
                                                <a class="waves-effect  waves-light btn blue m-b-xs">Atender</a>
                                                <a href="{{ route('cancelarConsulta',$consultas->id) }}" class="waves-effect   waves-light btn red m-b-xs">Cancelar</a>
                                                <a href="{{ route('detalhesConsulta',$consultas->id) }}" class="waves-effect waves-light btn green m-b-xs">Detalhes</a>
                                             @endif
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
                                        {{$consulta->appends($dataForm)->links()}}
                                    @else
                                         {{$consulta->links()}}
                                    @endif 
                                </div>
                            </div>
                        </div>

							</div>
						</div>
	</main>

@endsection