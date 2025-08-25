import { Component, EventEmitter, Input, Output } from '@angular/core';

import { type Usuario } from './usuario.model';
import { TarjetaComponent } from "../compartida/tarjeta/tarjeta.component";

@Component({
  selector: 'app-usuario',
  standalone: true,
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css',
  imports: [TarjetaComponent],
})
export class UsuarioComponent {

  @Input({ required: true }) usuario!: Usuario;
  //******************************************** */

  @Output() seleccion = new EventEmitter<string>();
  //******************************************** */

  @Input({ required: true }) seleccionado!: boolean;
  //******************************************** */

  get rutaImagen() {
    return 'assets/usuarios/' + this.usuario.avatar;
  }

  alSelecionarUsuario() {
    this.seleccion.emit(this.usuario.id);
  }
}
