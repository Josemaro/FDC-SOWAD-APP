import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Venta } from './models/venta';
import { VentaService } from './service/venta.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Examen Final';
  curso: string = "SOWAD";
  estudiante: string = "Jose Wong"

  ventas: Venta[] = [];
  
  
  ngOnInit(): void {

  }


}
