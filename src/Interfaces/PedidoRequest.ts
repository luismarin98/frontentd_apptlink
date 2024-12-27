import { BaseType } from "./BaseRequest";

export interface PedidoType extends BaseType {
    id: number;
    usuario_id: number;
    fecha_pedido: string;
    estado: string | null;
    total: number;
}