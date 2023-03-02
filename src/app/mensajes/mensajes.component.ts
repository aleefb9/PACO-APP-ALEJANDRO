import { Component } from '@angular/core';
import{ Mensaje} from '../mensaje'
import{ Mensajes} from '../mock-mensaje'
@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent {
    mensajes: Mensaje[]= [];

  mostrarMensaje(){
    this.mensajes = Mensajes
    return this.mensajes
  }
}
