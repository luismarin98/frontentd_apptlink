import { BaseType } from "./BaseRequest";

export interface CategoriaType extends BaseType {
    id: number;
    nombre: string | null;
    descripcion: string | null;
}

