import { Component } from '@angular/core';
import { Peliculas } from '../peliculas';
import { PELIS } from '../mock-pelis';
import { ImdbService } from '../imdb.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent {
  public peliculas : any;
  constructor(private _service: ImdbService ){

  }

  mostrarPelis(): void{
   // var peliculas = this._service.getPeliculas()
  }


}

