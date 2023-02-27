import { Component } from '@angular/core';
import { Peliculas } from '../peliculas';
import { PELIS } from '../mock-pelis';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent {
  peliculas: Peliculas[] = [];

  mostrarPelis(){
    this.peliculas = PELIS
  }
}

