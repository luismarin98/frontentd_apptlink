import { DetallePedidoType } from '../../Interfaces/DetallePedidoRequest';

export interface DetallePedidoState { detallepedido: DetallePedidoType | null, detallepedidos: DetallePedidoType[] | null };

export const initialState: DetallePedidoState = { detallepedido: null, detallepedidos: null };