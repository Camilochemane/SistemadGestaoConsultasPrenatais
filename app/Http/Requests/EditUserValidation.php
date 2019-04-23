<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EditUserValidation extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'                 =>   'required',
            'Apelido'              =>   'required',
            'type_id'              =>   'required',
            'specialties_id'       =>   'required',
            'endereco'             =>   'required',
            'sexo'                 =>   'required',
            'telefone'             =>   'required|max:9',
            'email'                =>   'required|string|email|max:255|unique:users',
            'password'             =>   'min:6|confirmed',

        ];
    }
}
