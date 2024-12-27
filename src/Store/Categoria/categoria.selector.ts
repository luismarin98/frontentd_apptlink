import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { CategoriaState } from "./categoria.state";

export const selectCategoria = (state: RootState) => state.categoriaState;

export const categoria_selector = createSelector(selectCategoria, (state: CategoriaState) => state.categoria);

export const categoria_list_selector = createSelector(selectCategoria, (state: CategoriaState) => state.categorias);