import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./categoria.state";

export const categoriaSlice = createSlice({
    name: 'categoria', initialState, reducers: {
        getCategoria: (state, action) => { state.categoria = action.payload },
        getCategorias: (state, action) => { state.categorias = action.payload },
    }
});

export const { getCategoria, getCategorias } = categoriaSlice.actions;