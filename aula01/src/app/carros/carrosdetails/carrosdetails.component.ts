import { Component, inject } from '@angular/core';
import { Carro } from '../carro';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carrosdetails',
  templateUrl: './carrosdetails.component.html',
  styleUrls: ['./carrosdetails.component.scss']
})
export class CarrosdetailsComponent {
  carro = new Carro();

  roteador = inject(ActivatedRoute);

  constructor(){
    let id = this.roteador.snapshot.paramMap.get('id');
    console.log(id);
  }
}
