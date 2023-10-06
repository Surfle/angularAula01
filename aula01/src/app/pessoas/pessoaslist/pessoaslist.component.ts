import { Component } from '@angular/core';
import { Pessoa } from './pessoa';

@Component({
  selector: 'app-pessoaslist',
  templateUrl: './pessoaslist.component.html',
  styleUrls: ['./pessoaslist.component.scss']
})
export class PessoaslistComponent {
  lista: Pessoa[] = [];


  constructor() {
    let pessoa1: Pessoa = new Pessoa();


    pessoa1.id = 1;
    pessoa1.nome = "PessoaTeste1";
    pessoa1.idade = 20;


    let pessoa2: Pessoa = new Pessoa();
    pessoa2.id = 2;
    pessoa2.nome = "PessoaTeste2";
    pessoa2.idade = 30;


    let pessoa3: Pessoa = new Pessoa();
    pessoa3.id = 3;
    pessoa3.nome = "PessoaTeste3";
    pessoa3.idade = 40;


    let pessoa4: Pessoa = new Pessoa();
    pessoa4.id = 4;
    pessoa4.nome = "PessoaTeste4";
    pessoa4.idade = 50;

    this.lista.push(pessoa1);
    this.lista.push(pessoa2);
    this.lista.push(pessoa3);
    this.lista.push(pessoa4);
  }
}
