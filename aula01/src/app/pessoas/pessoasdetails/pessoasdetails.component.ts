import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Pessoa } from '../pessoaslist/pessoa';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pessoasdetails',
  templateUrl: './pessoasdetails.component.html',
  styleUrls: ['./pessoasdetails.component.scss']
})
export class PessoasdetailsComponent {

  pessoa = new Pessoa();

  roteador = inject(ActivatedRoute);

  @Output() retorno = new EventEmitter<Pessoa>();


  constructor(){
    let id = this.roteador.snapshot.paramMap.get('id');
  }
  salvar(){
    this.retorno.emit(this.pessoa);
  }
}
