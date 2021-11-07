import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControlName, FormControl ,Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})


export class CadastroComponent implements OnInit {


  nomeDoUsuario = "henrique rocha"

  formCadastro = new FormGroup({
    nome: new FormControl('', Validators.required),
    email :new FormControl('', Validators.compose([Validators.required,
       Validators.email])),
    data : new FormControl(''),
    senha: new FormControl('',Validators.compose([Validators.required, Validators.minLength(4),Validators.maxLength(8)])),
  })

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {


  }


verificarData(){
  let dataAtual = new Date()
  console.log(dataAtual)
}


cadastratar(){

  console.log(this.formCadastro.get('senha')?.invalid)
  console.log(this.formCadastro, "meu formulario")
}
}