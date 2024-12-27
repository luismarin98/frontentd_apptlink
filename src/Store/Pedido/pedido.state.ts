import { PedidoType } from "../../Interfaces/PedidoRequest";

export interface PedidoState { pedido: PedidoType | null, pedidos: PedidoType[] | null };

export const initialState: PedidoState = { pedido: null, pedidos: null };