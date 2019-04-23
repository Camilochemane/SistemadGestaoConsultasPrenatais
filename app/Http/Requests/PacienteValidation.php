<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PacienteValidation extends FormRequest
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
            'name'                       =>   'required',
            'apelido'                    =>   'required',
            'endereco'                   =>   'required',
            'bilheteIdentidade'          =>   'required',
            'dataEmissaoProcesso'        =>   'required',
            'dataNasc'                   =>   'required',
            'profissao'                  =>   'required',
            'naturalidade'               =>   'required',
            'telefone'                   =>   'required|max:9',
            'filiacao'                   =>   'required',
        ];
    }
}
