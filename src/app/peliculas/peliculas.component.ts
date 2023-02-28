import { Component } from '@angular/core';
import { Peliculas } from '../peliculas';
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
    let input: any = document.getElementById('buscador');
    let url: string = "https://imdb-api.com/en/API/SearchMovie/k_28i8k3sj/" + input.value;
    this._service.getPeliculas(url).subscribe(peliculas => this.peliculas = peliculas);
  }


}

