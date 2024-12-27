import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { usuarioSlice } from "./Usuario/usuario.slice";
import { productoSlice } from "./Producto/producto.slice";
import { pedidoSlice } from "./Pedido/pedido.slice";
import { detallePedidoSlice } from "./DetallePedido/detalle_pedido.slice";
import { categoriaSlice } from "./Categoria/categoria.slice";

const reducer = {
    usuarioState: usuarioSlice.reducer,
    productoState: productoSlice.reducer,
    pedidoState: pedidoSlice.reducer,
    detallePedidoState: detallePedidoSlice.reducer,
    categoriaState: categoriaSlice.reducer,
}

export const store = configureStore({ reducer: reducer });

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AddDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;