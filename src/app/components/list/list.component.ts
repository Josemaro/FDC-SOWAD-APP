import { Component, OnInit } from '@angular/core';
import { Venta } from 'src/app/models/venta';
import { DataService } from './data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  ventas: Venta[]=[];
  filterVentas :string = '';


  constructor(private dataSvc:DataService) { }

  ngOnInit(): void {
    this.dataSvc.getAllVentas().subscribe(data => console.log(this.ventas = data))
  }
  
  habilitar: boolean = true;
  
  setHabilitar():void {
    this.habilitar = (this.habilitar==true)?false:true;
  }
  
}
