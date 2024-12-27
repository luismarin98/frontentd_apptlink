import { BaseType } from "./BaseRequest";

export interface UsuarioType extends BaseType {
    id: number;
    nombre: string | null;
    apellido: string | null;
    email: string | null;
    password: string | null;
    admin: boolean;
    estado: boolean;
}