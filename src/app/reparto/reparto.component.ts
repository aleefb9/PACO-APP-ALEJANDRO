import { Component } from '@angular/core';
import{ Reparto } from '../reparto'
import{ REPARTOS } from '../mock-reparto'

@Component({
  selector: 'app-reparto',
  templateUrl: './reparto.component.html',
  styleUrls: ['./reparto.component.css']
})
export class RepartoComponent {
  reparto: Reparto[]= [];

  verReparto(){
    this.reparto = REPARTOS
    return this.reparto
  }
}
