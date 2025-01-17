
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { useProducto } from './hooks/useProductos';
import { ProductoType } from '../../Interfaces/ProductoRequest';
import { useDetallePedido } from './hooks/useDetallePedido';
import { useCategoria } from './hooks/useCategoria';
import { DetallePedidoType } from '../../Interfaces/DetallePedidoRequest';
import { CategoriaType } from '../../Interfaces/CategoriaRequest';
import { usePedidos } from './hooks/usePedidos';
import { PedidoType } from '../../Interfaces/PedidoRequest';
import { useUsuario } from './hooks/useUsuario';
import { UsuarioType } from '../../Interfaces/UsuarioRequest';

export interface IDashboardContext {
    isOpen: boolean
    isOpenModal: boolean
    loading: boolean
    isEdit: boolean
    openDraw: boolean
    createCategoria: boolean
    openSearchProducto: boolean

    setCreateCategoria: Dispatch<SetStateAction<boolean>>
    setOpenDraw: Dispatch<SetStateAction<boolean>>
    setIsEdit: Dispatch<SetStateAction<boolean>>
    setIsOpen: Dispatch<SetStateAction<boolean>>
    setIsOpenModal: Dispatch<SetStateAction<boolean>>
    setIsLoading: Dispatch<SetStateAction<boolean>>
    setOpenSearchProducto: Dispatch<SetStateAction<boolean>>

    //Productos
    delete_productos: (id: number) => void;
    get_productos: (id: number) => void;
    getAll_productos: () => void;
    post_productos: (producto: ProductoType) => void;
    put_productos: (producto: ProductoType) => void;
    get_filter_productos: (id: number) => void;

    //DetallePedido
    getAll_detallePedidos: () => void;
    get_detallePedidos: (id: number) => void;
    post_detallePedidos: (body: DetallePedidoType) => void;
    put_detallePedidos: (body: DetallePedidoType) => void;
    delete_detallePedidos: (id: number) => void;

    //Categoria
    delete_categoria: (id: number) => void;
    get_all_categorias: () => void;
    get_categoria: (id: number) => void;
    post_categoria: (body: CategoriaType) => void;
    put_categoria: (body: CategoriaType) => void;

    //Pedido
    delete_pedido: (id: number) => void;
    getAll_pedidos: () => void;
    get_pedido: (id: number) => void;
    post_pedido: (body: PedidoType) => void;
    put_pedido: (body: PedidoType) => void;

    //Usuario
    get_usuario_info: (id: number) => Promise<UsuarioType | undefined>
}

const DashboardContext = createContext({});

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [loading, setIsLoading] = useState<boolean>(false);
    const [openDraw, setOpenDraw] = useState<boolean>(false);
    const [createCategoria, setCreateCategoria] = useState<boolean>(false);
    const [openSearchProducto, setOpenSearchProducto] = useState<boolean>(false);

    const { delete_productos, get_productos, getAll_productos, post_productos, put_productos, get_filter_productos } = useProducto();
    const { getAll_detallePedidos, get_detallePedidos, post_detallePedidos, put_detallePedidos, delete_detallePedidos } = useDetallePedido();
    const { delete_categoria, get_all_categorias, get_categoria, post_categoria, put_categoria } = useCategoria();
    const { delete_pedido, getAll_pedidos, get_pedido, post_pedido, put_pedido } = usePedidos();
    const { get_usuario_info } = useUsuario();

    const storage: IDashboardContext = {
        isOpen,
        setIsOpen,
        loading,
        setIsLoading,
        delete_productos, get_productos, getAll_productos, post_productos, put_productos, get_filter_productos,
        getAll_detallePedidos, get_detallePedidos, post_detallePedidos, put_detallePedidos, delete_detallePedidos,
        delete_categoria, get_all_categorias, get_categoria, post_categoria, put_categoria,
        delete_pedido, getAll_pedidos, get_pedido, post_pedido, put_pedido,
        get_usuario_info,
        isOpenModal, setIsOpenModal,
        isEdit, setIsEdit,
        openDraw, setOpenDraw,
        createCategoria, setCreateCategoria,
        openSearchProducto, setOpenSearchProducto
    };

    return <DashboardContext.Provider value={storage}>{children}</DashboardContext.Provider>;
};

export default DashboardContext;