import { Component } from '@angular/core';
import { Peliculas } from '../peliculas';
import { ImdbService } from '../imdb.service';
import { IDBService } from '../idb.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent {
  public peliculas : any;
  public i:any = 0;
  constructor(private _service: ImdbService,private _idb:IDBService ){
    
  }

  mostrarPelis(): void{
    this._idb.anadirFav();
    let input: any = document.getElementById('buscador');
    let url: string = "https://imdb-api.com/en/API/SearchMovie/k_28i8k3sj/" + input.value;
    this._service.getPeliculas(url).subscribe(peliculas => this.peliculas = peliculas);
  }

  anadirFav(objeto:Peliculas[]){
     this._idb.insertar(objeto);
  }
}

