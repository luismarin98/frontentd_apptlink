import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { DetallePedidoState } from "./detalle_pedido.state";

export const selectDetallePedido = (state: RootState) => state.detallePedidoState;

export const detalle_pedido_selector = createSelector(selectDetallePedido, (state: DetallePedidoState) => state.detallepedido);

export const detalle_pedido_list_selector = createSelector(selectDetallePedido, (state: DetallePedidoState) => state.detallepedidos);