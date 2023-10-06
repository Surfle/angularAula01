import { Component, inject } from '@angular/core';
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

  constructor(){
    let id = this.roteador.snapshot.paramMap.get('id');
    console.log(id);
  }
}
