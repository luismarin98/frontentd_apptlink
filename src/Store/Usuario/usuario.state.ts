import { UsuarioType } from '../../Interfaces/UsuarioRequest';

export interface UsuarioState { usuario: UsuarioType | null }

export const initialState: UsuarioState = { usuario: null }