import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  listax: string[] = ['Jose','Roland','Kevin','Diego'];

  habilitar: boolean = true;
  constructor() { }
  
  setHabilitar():void {
    this.habilitar = (this.habilitar==true)?false:true;
  }

}
