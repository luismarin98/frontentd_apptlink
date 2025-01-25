import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { UsuarioState } from "./usuario.state";

const usuario_state = (state: RootState) => state.usuarioState;

export const usuario_selector = createSelector(usuario_state, (state: UsuarioState) => state.usuario);
export const email_selector = createSelector(usuario_state, (state: UsuarioState) => state.email);