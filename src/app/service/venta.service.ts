import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Venta } from '../models/venta';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  ventaURL = "http://localhost:8080/venta";
  constructor(private httpClient: HttpClient) { }

  public getAllVentas():Observable<Venta>{
    return this.httpClient.get<Venta>(`${this.ventaURL}/listar`);
  }

  getV(){
    return this.httpClient.get(`${this.ventaURL}/listar`)
  }
}
