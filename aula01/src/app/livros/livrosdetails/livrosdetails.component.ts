import { Component, inject } from '@angular/core';
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

  constructor(){
    let id = this.roteador.snapshot.paramMap.get('id');
    console.log(id);
  }
}
