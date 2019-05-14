@extends('templete.templete')

@section('content')	

	<main class="mn-inner">
                <div class="row">
                	<div class="col s12">
                        <div class="page-title">Relátorios <a class=" tooltipped" data-position="right" data-delay="50" data-tooltip="Imprimir lista das consultas" href="{{ route('relatorioConsulta') }}"><i class="material-icons left">print</i></a></div>
                    </div>
                    <div class="row no-m-t no-m-b">
                    <div class="col s12 m12 l4">
                        <div class="card stats-card">
                            <div class="card-content">
                                <div class="card-options">
                                    <ul>
                                        <li class="red-text"><span class="badge cyan lighten-1">gross</span></li>
                                    </ul>
                                </div>
                                <span class="card-title">Número total de Médicos</span>
                                <span class="stats-counter"><span class="counter">{{ $totalMedicos }}</span><small></small></span>
                            </div>
                            <div id="sparkline-bar"><canvas width="471" height="40" style="display: inline-block; width: 471px; height: 40px; vertical-align: top;"></canvas></div>
                        </div>
                    </div>
                        <div class="col s12 m12 l4">
                        <div class="card stats-card">
                            <div class="card-content">
                                <div class="card-options">
                                    <ul>
                                        <li><a href="javascript:void(0)"><i class="material-icons">more_vert</i></a></li>
                                    </ul>
                                </div>
                                <span class="card-title">Número total de Pacientes</span>
                                <span class="stats-counter"><span class="counter">{{ $totalPacientes }}</span><small></small></span>
                            </div>
                            <div id="sparkline-line"><canvas width="507" height="45" style="display: inline-block; width: 507px; height: 45px; vertical-align: top;"></canvas></div>
                        </div>
                    </div>
                    <div class="col s12 m12 l4">
                        <div class="card stats-card">
                            <div class="card-content">
                                <span class="card-title">Número total das Consultas</span>
                                <span class="stats-counter"><span class="counter">{{ $totalConsultas }}</span><small></small></span>
                                <div class="percent-info green-text">{{-- 8<i class="material-icons">trending_up --}}</i></div>
                            </div>
                            <div class="progress stats-card-progress">
                                <div class="determinate" style="width: 50%"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col s6">
                    	<div class="card white">
                 		   {!! $consultasPendentes->html() !!}
                    	</div>
                    </div>
                    <div class="col s6">
                    	<div class="card white">
                 		   {!! $consultasCanceladas->html() !!}
                    	</div>
                    </div>
                </div>

                <div class="row">
                    <div class="col s6">
                        <div class="card white">
                           {!! $consultasPer->html() !!}
                        </div>
                    </div>
                    <div class="col s6">
                        <div class="card white">
                           {!! $consultasCanceladas->html() !!}
                        </div>
                    </div>
                </div>

                </div>
    </main>


{!! Charts::scripts() !!}
{!! $consultasPendentes->script() !!}
{!! $consultasPer->script() !!}
{!! $consultasCanceladas->script() !!}
@endsection