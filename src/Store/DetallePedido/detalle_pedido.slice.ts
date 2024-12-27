import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./detalle_pedido.state";

export const detallePedidoSlice = createSlice({
    name: 'detallePedido', initialState, reducers: {
        getDetallePedido: (state, action) => { state.detallepedido = action.payload },
        getDetallePedidos: (state, action) => { state.detallepedidos = action.payload },
    }
});

export const { getDetallePedido, getDetallePedidos } = detallePedidoSlice.actions;