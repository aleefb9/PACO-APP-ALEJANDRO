import { Injectable } from '@angular/core';
import { Peliculas } from './peliculas';
@Injectable({
  providedIn: 'root'
})
export class IDBService {
  public conexion: any;
  constructor() { }

  anadirFav():void{
    const peticion:IDBOpenDBRequest = indexedDB.open('PacoApp', 2)
    peticion.onerror = evento => {throw 'Error al conectar indexedDB'}
    peticion.onupgradeneeded = (evento:any) => {
                console.log(evento)
    this.conexion = evento.target.result
    this.crear()
        }
    peticion.onsuccess = (evento:any) => {this.conexion = evento.target.result}
  }

  crear(){
    const tabla:IDBObjectStore = this.conexion.createObjectStore('Favoritas', { keyPath: 'id', autoIncrement: true })
  }

  insertar(objeto:Peliculas[],mensajes:any){
    mensajes[1].titulo='Error'
    mensajes[2].titulo='Bien hecho'
    const transaccion:IDBTransaction = this.conexion.transaction(['Favoritas'], 'readwrite')
    transaccion.onerror = evento => {
      if(mensajes[1].tipo=='error'){
        mensajes[1].titulo='HAY ERROR'
      }
      throw 'Error al insertar, alomejor has elegido el mismo 🥲🤔'
    }
    if(mensajes[1].titulo!='HAY ERROR'){
      const tabla = transaccion.objectStore('Favoritas')
      const peticion:IDBRequest = tabla.add(objeto)
      if(mensajes[2].tipo=='exito'){
       mensajes[2].titulo='ESTA BIEN'
      }
    } 
}
}
