@extends('templete.templete')

@section('content')
 
 <main class="mn-inner">
      <div class="row">
      	<div class="col s12 m12 l12">
                        <div class="card">
                            <div class="card-content">
                                <p><strong> Agenda do medico {{ $medico->name.' '.$medico->Apelido }} </strong></p>
                            </div>
                        </div>
                    </div>
     	 {{-- <p> <i class="material-icons">print</i>Imprimir</p> --}}
		  <div class="row">

		  	@if(isset($detalhesSegunda) || isset($detalhesTerca) || isset($detalhesQuarta) || isset($detalhesQuinta) || isset($detalhesSexta)  )
		  	@if(isset($detalhesSegunda))
                    <div class="col s3"><div class="card white"><div class="card-content center"><strong>Segunda Feira</strong> <br> <hr>

	                            <p>   {{ $detalhesSegunda->horaInicio }}&nbsp;&nbsp;&nbsp; -- &nbsp;&nbsp;&nbsp;
	                               {{ $detalhesSegunda->horaFim }}&nbsp;&nbsp;&nbsp;</p>
	                          
                    </div></div>

                	</div>
			@endif
            @if(isset($detalhesTerca))      
                    <div class="col s3"><div class="card white"><div class="card-content center">Terca Feira
                    	<br> <hr>
                    	
	                               <p>   {{ $detalhesTerca->horaInicio }}&nbsp;&nbsp;&nbsp; --&nbsp;&nbsp;&nbsp;
	                               {{ $detalhesTerca->horaFim }}&nbsp;&nbsp;&nbsp;</p>
	                          
                    </div></div></div>
			@endif
            @if(isset($detalhesQuarta))        
                    <div class="col s3"><div class="card white"><div class="card-content center">Quarta Feira

                    	<br> <hr>
                    	
	                              <p>   {{ $detalhesQuarta->horaInicio }}&nbsp;&nbsp;&nbsp; --&nbsp;&nbsp;&nbsp;
	                               {{ $detalhesQuarta->horaFim }}&nbsp;&nbsp;&nbsp;</p>
	                          

                    </div></div></div>
			@endif
            @if(isset($detalhesQuinta))
                    <div class="col s3"><div class="card white"><div class="card-content center">Quinta Feira
                    	<br> <hr>
                    	
	                               <p>   {{ $detalhesQuarta->horaInicio }}&nbsp;&nbsp;&nbsp; --&nbsp;&nbsp;&nbsp;
	                               {{ $detalhesQuarta->horaFim }}&nbsp;&nbsp;&nbsp;</p>
	                          
                    </div></div></div>
			@endif
            @if(isset($detalhesSexta))
                    <div class="col s3"><div class="card white"><div class="card-content center">Sexta Feira
                    	<br> <hr>
                    	
                    	
	                              <p>   {{ $detalhesQuarta->horaInicio }}&nbsp;&nbsp;&nbsp; --&nbsp;&nbsp;&nbsp;
	                               {{ $detalhesQuarta->horaFim }}&nbsp;&nbsp;&nbsp;</p>
	                  
                    </div></div></div>

              @endif
              @else
             <div class="col s12">
                    	<div class="card white">
                    		<div class="card-content center">
                    				<p>O(a) medico(a) {{ $medico->name.' '.$medico->Apelido  }} esta sem agenda registada</p>
                   			 </div>
               		 </div>

                </div>
            @endif       
                </div>

                {{-- <div align="right" "> <a href="#!" class="btn waves-effect waves-teal">Marcar</a> </div> --}}
                <div class="row">
                	 <div class="col s6">
                        <div class="card ">
                        	<div class="input-field col s12">
                                        <p>Consultas Marcadas(Pendentes)</p>
                                    </div>
                            <div class="card-content">
                                <table class="striped">
						          <thead>
						            <tr>
						                <th>Paciente</th>
						                <th>Data</th>
						                <th>Hora</th>
						                <th>estado</th>
						            </tr>
						          </thead>

						          <tbody>
						          	@forelse($consultasPendente as $consultasPendentes)
						            <tr>
						              <td>{{ $consultasPendentes->paciente->name }}</td>
						              <td>{{ $consultasPendentes->dataConsulta }}</td>
						              <td>{{ $consultasPendentes->horaConsulta }}</td>
						              <td>{{ $consultasPendentes->estado }}</td>
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
                    
                    <div class="col s6">
                        <div class="card ">
                        	<div class="input-field col s12">
                                        <p>Consultas Marcadas(Realizadas)</p>
                                    </div>
                            <div class="card-content">
                                <table class="striped">
						          <thead>
						            <tr>
						               <th>Paciente</th>
						                <th>Data</th>
						                <th>Hora</th>
						                <th>estado</th>
						            </tr>
						          </thead>

						          <tbody>
						          	@forelse($consultasRealizadas as $consultasRealizadass)
						            <tr>
						              <td>{{ $consultasRealizadass->paciente->name }}</td>
						              <td>{{ $consultasRealizadass->dataConsulta }}</td>
						              <td>{{ $consultasRealizadass->horaConsulta }}</td>
						              <td>{{ $consultasRealizadass->estado }}</td>
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
    </div>
	
</main>
@stop
