<?php

namespace App\Http\Controllers;
use Alert;

use Illuminate\Http\Request;

class sweetalert extends Controller
{
    
    public function sweetalert($type = null)
    {
    	Alert::success('Success Message', 'Optional Title')->persistent("oky");
    	// switch ($type) {
    	// 	case 'info':
    	// 		Alert::info('Robots are working!');
    	// 		break;
    		
    	// 	default:
    	// 		Alert::message('Robots are working!');
    	// 		break;
    	// }
    	
	return redirect('/');
    }
}
