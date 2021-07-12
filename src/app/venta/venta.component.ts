import { Component, Input, OnInit } from '@angular/core';
import { Venta } from '../models/venta';
import { VentaService } from '../service/venta.service';
@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit{


  listax: string[] = ['Jose','Roland','Kevin','Diego'];



  @Input()
  ventas: Venta[] = []

  habilitar: boolean = true;
  
  setHabilitar():void {
    this.habilitar = (this.habilitar==true)?false:true;
  }

  ngOnInit():void{
    
  }


}
