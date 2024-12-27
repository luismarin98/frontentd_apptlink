import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { PedidoState } from "./pedido.state";

const pedido_state = (state: RootState) => state.pedidoState;

export const pedido_selector = createSelector(pedido_state, (state: PedidoState) => state.pedido);

export const pedido_list_selector = createSelector(pedido_state, (state: PedidoState) => state.pedidos);