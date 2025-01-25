import { UsuarioType } from '../../Interfaces/UsuarioRequest';

export interface UsuarioState { usuario: UsuarioType | null, email: string | null }

export const initialState: UsuarioState = { usuario: null, email: null }