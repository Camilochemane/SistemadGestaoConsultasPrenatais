<<!DOCTYPE html>
<html>
<head>
{{-- https://github.com/barryvdh/laravel-dompdf --}}
	<title>Relatorio de todas consultas</title>
    {!!Html::style('assets/css/neon-theme.css')!!}
    {!!Html::style('assets/css/neon-forms.css')!!}
    {!!Html::style('assets/css/custom.css')!!}
</head>
<body>  
	<div class="login-header login-caret">
           <div class="row">
                <div class="col s12 m8 l9">
                 
                </div>
                <div class="col s12 m4 l3">
                 <div>Av. 24 de Julho</div>
                 <div>(+258)21 310 693</div>
                </div>
              </div>
        	<div class="login-content" align="center">
        	 <a href="#" class="logo">
                <img src="assets/images/moz.png" width="100" alt="" />
            </a>  
            <h3>República de Moçambique</h3>
            <h3>Unidade Sanitária Polana Caniço</h3>
     	   </div> 
    </div>

    <br>
    
    <div class="row" align="left">Reibo nº:<?php echo date('ymd/s')?>
    {{-- <P>Nome do Expediente:</P>
    <P>Estado do Expediente:</P>
    <P>Nome do Contribuente:</P> --}}
    </div>
    <div class="row" align="right"><p><strong>Maputo <?php echo date('Y-m-d H:i:s') ?></strong></p></div>
   
    <hr>
    
	<div class="row">
                  <table class="striped">
                    <thead>
                        <tr role="row">
                        <th class="sorting_asc" tabindex="0" aria-controls="table-4" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending" style="width: 177px;">Nome do paciente</th><th class="sorting" tabindex="0" aria-controls="table-4" rowspan="1" colspan="1" aria-label="Browser: activate to sort column ascending" style="width: 258px;">Nome do medico</th><th class="sorting" tabindex="0" aria-controls="table-4" rowspan="1" colspan="1" aria-label="Browser: activate to sort column ascending" style="width: 258px;">Data da consulta</th><th class="sorting" tabindex="0" aria-controls="table-4" rowspan="1" colspan="1" aria-label="Engine version: activate to sort column ascending" style="width: 153px;">Estado</th></tr>
                </thead>
                    <tbody>
                @foreach($consultas as $consultas)
                    <tr class="gradeA odd" role="row">
     				   <td>{{ $consultas->paciente->name.' '.$consultas->paciente->Apelido}}</td>
                        <td>{{ $consultas->medico->name.' '.$consultas->medico->Apelido }}</td>
                        <td>{{ $consultas->dataConsulta. ' '.$consultas->horaConsulta }}</td>
                        <td>{{ $consultas->estado }}</td>
                    </tr>
            @endforeach
            <tr>
                <td>Total</td>
                <td></td>
                <td></td>
                <td></td>
                
            </tr>
                </tbody>
                  </table>
    </div>

    	<div class="row" align="center"> 
    	<p>_________________________________________________</p>
    	<p>{{ Auth::user()->name.' '.Auth::user()->Apelido }}</p>
    	</div>
    	<br>
    	<br>
    	<br>
    	<br>
    	<br>
    	<br>
    	<br>
    	<br>
    	<br>
    	
    	<hr>
    	<p align="center">Sistema de gestão de consultas pré-natais</p>

</body>
</html>