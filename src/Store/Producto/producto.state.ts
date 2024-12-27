import { ProductoType } from "../../Interfaces/ProductoRequest";

export interface ProductoState { producto: ProductoType | null, productos: ProductoType[] | null }

export const initialState: ProductoState = { producto: null, productos: null }