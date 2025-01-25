import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./usuario.state";

export const usuarioSlice = createSlice({
    name: 'usuario', initialState, reducers: {
        getUsuario: (state, action) => { state.usuario = action.payload },
        getEmail: (state, action) => { state.email = action.payload }
    }
});

export const { getUsuario, getEmail } = usuarioSlice.actions;