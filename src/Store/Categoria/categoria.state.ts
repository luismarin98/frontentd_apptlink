import { CategoriaType } from '../../Interfaces/CategoriaRequest';

export interface CategoriaState { categoria: CategoriaType | null, categorias: CategoriaType[] | null };

export const initialState: CategoriaState = { categoria: null, categorias: null };