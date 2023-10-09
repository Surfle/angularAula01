import { Component, inject } from '@angular/core';
import { Livro } from '../livro';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss']
})
export class LivroslistComponent {
  lista: Livro[] = [];

  modalService = inject(NgbModal);


  constructor() {
    let livro1: Livro = new Livro();


    livro1.id = 1;
    livro1.nome = "LivroTeste1";
    livro1.autor = "AutorTeste1";


    let livro2: Livro = new Livro();
    livro2.id = 2;
    livro2.nome = "LivroTeste2";
    livro2.autor = "AutorTeste2";


    let livro3: Livro = new Livro();
    livro3.id = 3;
    livro3.nome = "LivroTeste3";
    livro3.autor = "AutorTeste3";


    let livro4: Livro = new Livro();
    livro4.id = 4;
    livro4.nome = "LivroTeste4";
    livro4.autor = "AutorTeste1";

    this.lista.push(livro1);
    this.lista.push(livro2);
    this.lista.push(livro3);
    this.lista.push(livro4);
  }
  
  abrirModal(abc: any){
    this.modalService.open(abc, { size: 'lg' });
  }

  addNaLista(livro: Livro){
    this.lista.push(livro);
    this.modalService.dismissAll();
  }
}
