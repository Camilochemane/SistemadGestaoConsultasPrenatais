<aside id="slide-out" class="side-nav white fixed">
                <div class="side-nav-wrapper">
                    <div class="sidebar-profile">
                        <div class="sidebar-profile-image">
                            <img src="assets/images/profile-image.png" class="circle" alt="">
                            
                        </div>
                        <div class="sidebar-profile-info">
                            <a href="javascript:void(0);" class="account-settings-link">
                                <p>{{ Auth::user()->name." ".Auth::user()->Apelido }}</p>
                                <span>{{ Auth::user()->email }}<i class="material-icons right">arrow_drop_down</i></span>
                            </a>
                        </div>
                    </div>
                    <div class="sidebar-account-settings">
                        <ul>
                            
                            <li class="no-padding">
                                <a class="waves-effect waves-grey"><i class="material-icons">star_border</i>Perfil<span class="new badge">18</span></a>
                            </li>
                            <li class="no-padding">
                                <a class="waves-effect waves-grey"><i class="material-icons">history</i>Definicoes<span class="new grey lighten-1 badge">3 new</span></a>
                            </li>
                            <li class="divider"></li>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                   <li class="no-padding">
                                     <a class="waves-effect waves-grey" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        <i class="material-icons">exit_to_app</i>logout
                                    </a>
                                </li>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
                                </div>
                        </ul>
                    </div>
                <ul class="sidebar-menu collapsible collapsible-accordion" data-collapsible="accordion">
                    <li class="no-padding"><a class="waves-effect waves-grey" href="{{ url('/home') }}"><i class="material-icons">desktop_windows</i>Home</a></li>
                    <hr>
                    <li class="no-padding">
                        <a class="collapsible-header waves-effect waves-grey"><i class="material-icons">perm_identity</i>Utilizadores<i class="nav-drop-icon material-icons">keyboard_arrow_right</i></a>
                        <div class="collapsible-body">
                            <ul>
                                <li><a href="{{ route('formUtilizador') }}">Registar</a></li>
                                <li><a href="{{ route('listarUtilizadores') }}">Listar</a></li>
                            </ul>
                        </div>
                    </li>
                    <hr>
                    <li class="no-padding">
                        <a class="collapsible-header waves-effect waves-grey"><i class="material-icons">perm_identity</i>Medico<i class="nav-drop-icon material-icons">keyboard_arrow_right</i></a>
                        <div class="collapsible-body">
                            <ul>
                                <li><a href="{{ route('formMedico') }}">Registar</a></li>
                                <li><a href="{{ route('listarMedicos') }}">Listar</a></li>
                                <li><a href="{{ route('formAgenda') }}">Agendar</a></li>
                                <li><a href="{{ route('especialidade') }}">Especialidade</a></li>
                            </ul>
                        </div>
                    </li>
                    <hr>

                    <li class="no-padding">
                        <a class="collapsible-header waves-effect waves-grey"><i class="material-icons">perm_identity</i>Paciente<i class="nav-drop-icon material-icons">keyboard_arrow_right</i></a>
                        <div class="collapsible-body">
                            <ul>
                                <li><a href="{{ route('formPaciente') }}">Registar</a></li>
                                <li><a href="{{ route('listarPaciente') }}">Listar</a></li>
                            </ul>
                        </div>
                    </li>
                    <hr>
                    <li class="no-padding">
                        <a class="collapsible-header waves-effect waves-grey"><i class="material-icons">queue</i>Consultas<i class="nav-drop-icon material-icons">keyboard_arrow_right</i></a>
                        <div class="collapsible-body">
                            <ul>
                                <li><a href="{{ route('formMarcarconsulta') }}">Marcar</a></li>
                                <li><a href="{{ route('listarConsultas') }}">Listar</a></li>
                            </ul>
                        </div>
                    </li>
                    <hr>
                     <li class="no-padding">
                        <a class="collapsible-header waves-effect waves-grey"><i class="material-icons">reorder</i>Relatórios<i class="nav-drop-icon material-icons">keyboard_arrow_right</i></a>
                        <div class="collapsible-body">
                            <ul>
                                <li><a href="#">Registar</a></li>
                                <li><a href="{{ route('listarUtilizadores') }}">Listar</a></li>
                            </ul>
                        </div>
                    </li>
                    <hr>
                </ul>
                <div class="footer">
                    <p class="copyright">Steelcoders ©</p>
                    <a href="#!">Privacy</a> &amp; <a href="#!">Terms</a>
                </div>
                </div>
            </aside>