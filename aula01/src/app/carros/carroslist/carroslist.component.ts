import { Component } from '@angular/core';
import { Carro } from '../carro';

@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss']
})
export class CarroslistComponent {
  lista: Carro[] = [];


  constructor() {
    let carro1: Carro = new Carro();


    carro1.id = 1;
    carro1.marca = "carroTeste1";
    carro1.modelo = 20;


    let carro2: Carro = new Carro();
    carro2.id = 2;
    carro2.marca = "carroTeste2";
    carro2.modelo = 30;


    let carro3: Carro = new Carro();
    carro3.id = 3;
    carro3.marca = "carroTeste3";
    carro3.modelo = 40;


    let carro4: Carro = new Carro();
    carro4.id = 4;
    carro4.marca = "carroTeste4";
    carro4.modelo = 50;

    this.lista.push(carro1);
    this.lista.push(carro2);
    this.lista.push(carro3);
    this.lista.push(carro4);
  }
}
