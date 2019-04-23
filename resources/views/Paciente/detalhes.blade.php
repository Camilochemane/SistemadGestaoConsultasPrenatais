@extends('templete.templete')

@section('content')	

	<main class="mn-inner">
                <div class="row">
                		<div class="col s12 m12 l12">
                        <div class="card">
                            <div class="card-content">
                               {{--  <p><strong> Detalhes {{ $paciente->name.' '.$paciente->apelido }} </strong></p> --}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col s4">
                        <div class="card">
                            <div class="card-content">
                                <span class="card-title">Avatar Content</span>
                                <ul class="collection">
                                    <li class="collection-item avatar">
                                        {{ Html::image('assets/images/profile-image.png', 'alt' ,array('class' => 'circle' )) }}
                                        {{-- <img src="../assets/images/profile-image.png" alt="" class="circle"> --}}
                                        <span class="title">Perfil</span>
                                        <p>Nome Completo <br>
                                           {{ $paciente->name.' '.$paciente->apelido }}
                                            
                                        </p>
                                        <a href="#!" class="secondary-content"><i class="material-icons"></i></a>
                                    </li>
                                    <li class="collection-item avatar">
                                        <i class="material-icons circle">folder</i>
                                        <p>Contacto <br>
                                           {{ $paciente->telefone }}
                                        </p>
                                        <a href="#!" class="secondary-content"><i class="material-icons"></i></a>
                                    </li>
                                    <li class="collection-item avatar">
                                        <i class="material-icons circle green">insert_chart</i>
                                        <p>Morada <br>
                                           {{ $paciente->endereco }}
                                            
                                        </p>
                                        <a href="#!" class="secondary-content"><i class="material-icons"></i></a>
                                    </li>
                                    <li class="collection-item avatar">
                                        <i class="material-icons circle red">play_arrow</i>
                                        <p>Estado <br>
                                           {{ $paciente->estado }}
                                           
                                        </p>
                                        <a href="#!" class="secondary-content"><i class="material-icons"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col s8">
                         <div class="card ">
                            <div class="input-field col s12">
                                        <p>Consultas Marcadas</p>
                                    </div>
                            <div class="card-content">
                                <table class="striped">
                                  <thead>
                                    <tr>
                                        <th>Medico</th>
                                        <th>Data</th>
                                        <th>Hora</th>
                                        <th>estado</th>
                                        <th>Acções</th>
                                    </tr>
                                  </thead>

                                  <tbody>
                                    @forelse($consulta as $consultasPendentes)
                                    <tr>
                                      <td>{{ $consultasPendentes->medico->name.' '.$consultasPendentes->Apelido }}</td>
                                      <td>{{ $consultasPendentes->dataConsulta }}</td>
                                      <td>{{ $consultasPendentes->horaConsulta }}</td>
                                      <td>{{ $consultasPendentes->estado }}</td>

                                      <td>
                                        @if($consultasPendentes->estado != 'Cancelada')
                                        <a href="{{ route('userBloqueiar', $consultasPendentes->id) }}" class="waves-effect waves-light btn red m-b-xs">Cancelar</a>
                                        @else
                                            <a class="btn-flat disabled m-b-xs">Cancelar</a>
                                        @endif
                                        </td>
                                    </tr>
                                    @empty
                                    <tr>
                                        <td> </td>
                                        <td> </td>
                                        <td> <p> Nenhum registo encontrado </p></td>
                                        <td> </td>
                                    </tr>
                                   @endforelse
                                  </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
    </main>
@endsection