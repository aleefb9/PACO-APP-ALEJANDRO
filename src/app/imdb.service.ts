import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Peliculas } from './peliculas';
import{ Reparto } from './reparto';

@Injectable({
  providedIn: 'root'
})
export class ImdbService{

  constructor(private _http: HttpClient) {
  }

  getPeliculas(url: string):Observable<Peliculas[]>{
    return this._http.get<Peliculas[]>(url);
  }

  getReparto(url: string):Observable<Reparto[]>{
    return this._http.get<Reparto[]>(url);
  }
}
