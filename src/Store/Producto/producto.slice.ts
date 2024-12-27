import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./producto.state";

export const productoSlice = createSlice({
    name: 'producto', initialState, reducers: {
        getProducto: (state, action) => { state.producto = action.payload },
        getProductos: (state, action) => { state.productos = action.payload },
    }
})

export const { getProducto, getProductos } = productoSlice.actions;