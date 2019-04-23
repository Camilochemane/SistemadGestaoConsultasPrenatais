@if($errors->any())
  	  <div class="card-panel deep-orange lighten-3">
  	  	@foreach($errors->all() as $error)
  	  	<p>	{{ $error}}</p>
  	  	@endforeach	
  	  </div>
  @endif
  @if(session('success'))
  	<div class="card-panel cyan lighten-4">
  		{{session('success')}}
  	</div>
  @endif
  @if(session('error'))
  	<div class="card-panel deep-orange lighten-3">
  		{{session('error')}}
  	</div>
  @endif


