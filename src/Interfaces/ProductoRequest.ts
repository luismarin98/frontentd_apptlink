import { BaseType } from "./BaseRequest";

export interface ProductoType extends BaseType {
    id: number;
    nombre: string | null;
    descripcion: string | null;
    precio: number;
    stock: number;
    categoria_id: number;
}