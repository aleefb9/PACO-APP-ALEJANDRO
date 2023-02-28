import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ImdbService{

  constructor(private _http: HttpClient) {
    
   }

  getPeliculas():Observable<any>{
    var url='https://imdb-api.com/en/API/SearchMovie/k_28i8k3sj/avatar'
    var urlFin = url;
   return this._http.get(urlFin);
  }
}
