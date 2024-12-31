
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { useProducto } from './hooks/useProductos';
import { ProductoType } from '../../Interfaces/ProductoRequest';

export interface IDashboardContext {
    isOpen: boolean
    loading: boolean

    setIsOpen: Dispatch<SetStateAction<boolean>>
    setIsLoading: Dispatch<SetStateAction<boolean>>
    delete_productos: (id: number) => void;
    get_productos: (id: number) => void;
    getAll_productos: () => void;
    post_productos: (producto: ProductoType) => void;
    put_productos: (producto: ProductoType) => void;
}

const DashboardContext = createContext({});

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [loading, setIsLoading] = useState<boolean>(false);

    const { delete_productos, get_productos, getAll_productos, post_productos, put_productos } = useProducto();

    const storage: IDashboardContext = { isOpen, setIsOpen, loading, setIsLoading, delete_productos, get_productos, getAll_productos, post_productos, put_productos };

    return <DashboardContext.Provider value={storage}>{children}</DashboardContext.Provider>;
};

export default DashboardContext;