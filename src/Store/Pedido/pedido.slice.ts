import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./pedido.state";

export const pedidoSlice = createSlice({
    name: 'pedido', initialState, reducers: {
        getPedido: (state, action) => { state.pedido = action.payload },
        getPedidos: (state, action) => { state.pedidos = action.payload },
    }
});

export const { getPedido, getPedidos } = pedidoSlice.actions;