import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Livro } from '../livro';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-livrosdetails',
  templateUrl: './livrosdetails.component.html',
  styleUrls: ['./livrosdetails.component.scss']
})
export class LivrosdetailsComponent {
  livro = new Livro();

  roteador = inject(ActivatedRoute);

  @Output() retorno = new EventEmitter<Livro>();


  constructor(){
    let id = this.roteador.snapshot.paramMap.get('id');
    console.log(id);
  }

  salvar(){
    this.retorno.emit(this.livro);
  }
}
