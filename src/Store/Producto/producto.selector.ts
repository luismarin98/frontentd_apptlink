import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { ProductoState } from "./producto.state";

const producto_state = (state: RootState) => state.productoState;

export const producto_selector = createSelector(producto_state, (state: ProductoState) => state.producto);

export const productos_selector = createSelector(producto_state, (state: ProductoState) => state.productos);