import { Detalle } from "./detalle";
import { Usuario } from "./usuario";
export interface Venta{
    idventa: number,
    seriecomprobante: string,
    tipocomprobante: string,
    numcomprobante: string,
    total: number,
    impuesto: number,
    fecha : any,
    estado: string,
    usuario :  Usuario,
    lista_detalle_ventas: Detalle[]
}