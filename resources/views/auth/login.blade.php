@extends('auth.templete')

@section('content')
 <div class="mn-content valign-wrapper">
            <main class="mn-inner container">
                <div class="valign">
                      <div class="row">
                          <div class="col s12 m6 l4 offset-l4 offset-m3">
                              <div class="card white darken-1">
                                  <div class="card-content ">

                   <span class="card-title">Entrar no Sistema</span>
                   <div class="row">
                    <form class="col s12" method="POST" action="{{ route('login') }}">
                        @csrf

                        <div class="input-field col s12">

                            <div class="col-md-6">
                                <input id="email" type="email" class="validate{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required autofocus placeholder="email">

                                @if ($errors->has('email'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                       <div class="input-field col s12">
                            <div class="col-md-6">
                                <input id="password" type="password" class="validate{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required au>

                                @if ($errors->has('password'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="col s12 right-align m-t-sm">

                                   <button type="submit" class="waves-effect waves-light btn teal">Login </button>
                                   <br>
                                   <br>
                                @if (Route::has('password.request'))
                                    <a class="waves-effect waves-light btn teal" href="{{ route('password.request') }}">
                                        {{ __('Esqueceu a password?') }}
                                    </a>
                                @endif
                            </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</main>
</div>
@endsection
