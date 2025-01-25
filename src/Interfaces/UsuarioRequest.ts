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

export interface RegisterUserType extends BaseType {
    nombre: string | null;
    apellido: string | null;
    email: string | null;
    password: string | null;
    admin: boolean;
    estado: boolean;
}

export interface NewPasswordType {
    new_password: string;
    repeat_password: string;
    code: number;
    email: string;
}

export interface RestorePassword {
    email: string;
    code: number;
    password: string;
}