import { Pipe, PipeTransform } from '@angular/core';
import { Venta } from '../models/venta';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any):any {

    if (arg === '' || arg.lenght < 3) return value;
    const resultVentas = [];
    for(const post of value){
      if(post.usuario.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
       post.tipocomprobante.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
       post.fecha.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        console.log('Siii');
        resultVentas.push(post);
      };
    };
    return resultVentas;
  }
}
