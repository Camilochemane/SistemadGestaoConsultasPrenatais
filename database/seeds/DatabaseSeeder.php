<?php

use Illuminate\Database\Seeder;

use App\Type;
use App\User;
use App\Specialtie;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        Type::create([
            'name'      => 'Admin',

            ]);
        Type::create([
            'name'      => 'Secretaria',

            ]);
         Type::create([
            'name'      => 'Medico',

            ]);

        Specialtie::create([
            'designacao'      => 'Cirugiao',

            ]);
        Specialtie::create([
            'designacao'      => 'Medico geral',

            ]);
        Specialtie::create([
            'designacao'      => 'pediatra',

            ]);
        Specialtie::create([
            'designacao'      => 'teste',

            ]);

        User::create([
		'name'     		     => 'Isaac',
		'Apelido'  		     => 'Badru', 
		'email'    		     => 'isaacbadru@gmail.com', 
		'password' 		     => bcrypt('123456'),   
		'telefone' 		     => '842317035',  
		'endereco' 		     => 'Maputo-Mozambique',
		'sexo'     		     =>'Masculino',
        'estado'             => 'Activo',
        'type_id'            => 1,
        'specialties_id'     => 4,

    		]);

   		User::create([
		'name'     		     => 'Camilo',
		'Apelido'  		     => 'Chemane', 
		'email'    		     => 'chemanecamilo@gmail.com', 
		'password' 		     => bcrypt('123456'),   
		'telefone' 		     => '842317035',  
		'endereco' 		     => 'Maputo-Mozambique',
		'sexo'     		     =>'Masculino',
        'estado'             => 'Activo',
        'type_id'            => 2,
        'specialties_id'     => 4,

    		]);

		User::create([
		'name'     		     => 'Isabel',
		'Apelido'  		     => 'Jaime', 
		'email'    		     => 'isabel@gmail.com', 
		'password' 		     => bcrypt('123456'),   
		'telefone' 		     => '842317035',  
		'endereco' 		     => 'Maputo-Mozambique',
		'sexo'     		     =>'Masculino',
        'estado'             => 'Activo',
        'type_id'            => 3,
        'specialties_id'     => 3,

    		]);
    }
}
