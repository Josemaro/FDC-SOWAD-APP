import { Injectable } from '@angular/core';
import { Venta } from 'src/app/models/venta';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private urlAPI =  "http://localhost:8080/venta/listar"
  constructor(private http: HttpClient) {

  }

  getAllVentas():Observable<Venta[]>{
    return this.http.get<Venta[]>(this.urlAPI)
  }

}
