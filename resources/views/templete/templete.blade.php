<!DOCTYPE html>
<html lang="en">
    
<!-- Mirrored from stacksthemes.com/alpha/layout-blank.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 19 Mar 2019 08:30:01 GMT -->
<head>
        
        <!-- Title -->
        <!-- Title -->
        <title>Alpha | Responsive Admin Dashboard Template</title>
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
        <meta charset="UTF-8">
        <meta name="description" content="Responsive Admin Dashboard Template" />
        <meta name="keywords" content="admin,dashboard" />
        <meta name="author" content="Steelcoders" />
        
        <!-- Styles -->

        {{Html::style('assets/plugins/materialize/css/materialize.min.css')}}
        <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">       
        {{Html::style('assets/plugins/material-preloader/css/materialPreloader.min.css')}}
        {{Html::style('assets/plugins/metrojs/MetroJs.min.css')}}
        {{Html::style('assets/plugins/weather-icons-master/css/weather-icons.min.css')}}

            
        <!-- Theme Styles -->
        {{Html::style('assets/css/alpha.min.css')}}
        {{Html::style('assets/css/custom.css')}}
        {{--  <link href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.0.1/sweetalert.min.css" rel="stylesheet"> --}}
        
    </head>
    <body>
        <div class="loader-bg"></div>
        <div class="mn-content fixed-sidebar">

                <header class="mn-header navbar-fixed">
                      @include('templete.navbar.navbar')
                </header>

                @include('templete.sidbar.sidbar')
         

                        @yield('content')
                        
                        @include('sweetalert::alert')
                         

                @include('templete.footer.footer')

        </div>
            
        <div class="left-sidebar-hover"></div>
        
        <!-- Javascripts -->

        {{Html::script('assets/plugins/jquery/jquery-2.2.0.min.js')}}
        {{Html::script('assets/plugins/materialize/js/materialize.min.js')}}
        {{Html::script('assets/plugins/material-preloader/js/materialPreloader.min.js')}}
        {{Html::script('assets/plugins/jquery-blockui/jquery.blockui.js')}}
        {{Html::script('assets/plugins/jquery-validation/jquery.validate.min.js')}}
        {{Html::script('assets/plugins/jquery-steps/jquery.steps.min.js')}}
        {{Html::script('assets/plugins/waypoints/jquery.waypoints.min.js')}}
        {{Html::script('assets/plugins/counter-up-master/jquery.counterup.min.js')}}
        {{Html::script('assets/plugins/jquery-sparkline/jquery.sparkline.min.js')}}
        {{Html::script('assets/plugins/chart.js/chart.min.js')}}
        {{Html::script('assets/plugins/flot/jquery.flot.min.js')}}
        {{Html::script('assets/plugins/flot/jquery.flot.time.min.js')}}
        {{Html::script('assets/plugins/flot/jquery.flot.symbol.min.js')}}
        {{Html::script('assets/plugins/flot/jquery.flot.resize.min.js')}}
        {{Html::script('assets/plugins/flot/jquery.flot.tooltip.min.js')}}
        {{Html::script('assets/plugins/curvedlines/curvedLines.js')}}
        {{Html::script('assets/plugins/peity/jquery.peity.min.js')}}
        {{Html::script('assets/js/alpha.min.js')}}
        {{Html::script('assets/js/pages/form-wizard.js')}}
        {{Html::script('assets/js/pages/form_elements.js')}}
        {{Html::script('assets/js/pages/dashboard.js')}}
        
      
        <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.0.1/sweetalert.min.js"></script>
                
                {{-- @include('sweet::alert') --}}

                        @yield('script')

            {{-- @include('sweetalert::alert') --}}
       
    </body>
</html>