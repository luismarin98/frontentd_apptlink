import { ProductoType } from "./ProductoRequest";
import { CategoriaType } from "./CategoriaRequest";
import { UsuarioType } from "./UsuarioRequest";

export const productos: ProductoType[] = [
    {
        id: 1,
        categoria_id: 1,
        descripcion: 'Producto para la higiene personal',
        fecha_actualizacion: new Date().toISOString(),
        fecha_creacion: new Date().toISOString(),
        nombre: 'Shampoo',
        precio: 15.30,
        stock: 10,
    },
    {
        id: 2,
        categoria_id: 2,
        descripcion: 'Producto para el cuidado de la piel',
        fecha_actualizacion: new Date().toISOString(),
        fecha_creacion: new Date().toISOString(),
        nombre: 'Crema hidratante',
        precio: 25.50,
        stock: 5,
    },
    {
        id: 3,
        categoria_id: 3,
        descripcion: 'Producto para la limpieza del hogar',
        fecha_actualizacion: new Date().toISOString(),
        fecha_creacion: new Date().toISOString(),
        nombre: 'Detergente',
        precio: 8.99,
        stock: 20,
    },
    // ...otros productos
];

export const categorias: CategoriaType[] = [
    {
        id: 1,
        nombre: 'Higiene',
        descripcion: 'Productos de higiene personal',
        fecha_creacion: new Date().toISOString(),
        fecha_actualizacion: new Date().toISOString(),
    },
    {
        id: 2,
        nombre: 'Cuidado de la piel',
        descripcion: 'Productos para el cuidado de la piel',
        fecha_creacion: new Date().toISOString(),
        fecha_actualizacion: new Date().toISOString(),
    },
    {
        id: 3,
        nombre: 'Limpieza',
        descripcion: 'Productos para la limpieza del hogar',
        fecha_creacion: new Date().toISOString(),
        fecha_actualizacion: new Date().toISOString(),
    },
    // ...otras categorías
];

export const usuarios: UsuarioType[] = [
    {
        id: 1,
        nombre: 'Juan',
        email: 'juan.perez@example.com',
        password: 'password123',
        fecha_creacion: new Date().toISOString(),
        fecha_actualizacion: new Date().toISOString(),
        admin: true,
        apellido: 'Perez',
        estado: true
    },
    {
        id: 2,
        nombre: 'María ',
        email: 'maria.garcia@example.com',
        password: 'password456',
        fecha_creacion: new Date().toISOString(),
        fecha_actualizacion: new Date().toISOString(),
        admin: false,
        apellido: 'García',
        estado: true
    },
    {
        id: 3,
        nombre: 'Carlos ',
        email: 'carlos.lopez@example.com',
        password: 'password789',
        fecha_creacion: new Date().toISOString(),
        fecha_actualizacion: new Date().toISOString(),
        admin: false,
        apellido: 'López',
        estado: true
    },
];
