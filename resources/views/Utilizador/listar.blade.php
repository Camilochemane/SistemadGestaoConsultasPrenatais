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
                            @include('sweet::alert')
                            {!!Form::open(['route'=>'pesquisarUser', 'method' => 'POST', 'class' => 'col s12'])!!}
                                    @csrf
                                <div class="row">
                                    <div class="input-field col s3">
                                        <p>Lista de Utilizadores</p>
                                    </div>
                                
                                    <div class="input-field col s9">
                                        
                                            <div class="input-field col s4">
                                                <input placeholder="digita o nome" name="name" id="first_name" type="text" class="validate valid">
                                            </div>
                                            <div class="input-field col s4">
                                            <select class="initialized" name="type_id">
                                            <option disabled="" selected="">--Selecione tipo--</option>
                                            @foreach($tipo as $tipos)
                                                <option value="{{ $tipos->id }}">{{ $tipos->name }}</option>
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
                                            <th data-field="id">Nome</th>
                                            <th data-field="name">Email</th>
                                            <th data-field="price">Edereço</th>
                                            <th data-field="price">Telefone</th>
                                            <th data-field="price">Estado</th>
                                            <th data-field="price">Acções</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    @forelse($user as $users)
                                        <tr>
                                            <td>{{ $i++ }}</td>
                                            <td>{{ $users->name }}</td>
                                            <td>{{ $users->email }}</td>
                                            <td>{{ $users->endereco }}</td>
                                            <td>{{ $users->telefone }}</td>
                                            <td>{{ $users->estado }}</td>
                                            <td>

                                                @if($users->estado == 'Activo')
                                                <a href="{{ route('userBloqueiar', $users->id) }}" class="waves-effect waves-light btn red m-b-xs">Bloqueiar</a>
                                                @else

                                                <a href="{{ route('userDesbloquear', $users->id) }}" class="waves-effect waves-light btn blue m-b-xs">Desbloqueiar</a>

                                                @endif

                                                <a href="{{ route('formEditar', $users->id) }}" class="waves-effect waves-light btn orange m-b-xs">Editar</a>
                                                <a href="#" class="waves-effect waves-light btn green m-b-xs">Detalhes</a>
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
                                        {{$user->appends($dataForm)->links()}}
                                    @else
                                         {{$user->links()}}
                                    @endif 
                                </div>
                            </div>
                        </div>

							</div>
						</div>

	</main>

@endsection
