import { useContext } from "react"
import DashboardContext, { IDashboardContext } from "../provider"
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import axios, { AxiosError } from "axios";
import { getProducto, getProductos } from "../../../Store/Producto/producto.slice";
import { ProductoType } from "../../../Interfaces/ProductoRequest";

export const useProducto = () => {
    const { setIsLoading } = useContext(DashboardContext) as IDashboardContext;
    const dispatch = useDispatch();

    const getAll_productos = () => {
        setIsLoading(true);
        toast.promise(axios.get<ProductoType[]>(`${process.env.REACT_APP_RUTA_API}/Producto`), {
            loading: 'Cargando productos...',
            success: (res) => {
                setIsLoading(false);
                dispatch(getProductos(res.data));
                return 'Lista actualizada';
            },
            error: (err: AxiosError<any>) => {
                setIsLoading(false);
                return err.response!.data;
            }
        });
    }

    const get_filter_productos = (id: number) => {
        setIsLoading(true);
        toast.promise(axios.get<ProductoType[]>(`${process.env.REACT_APP_RUTA_API}/Producto/filtrar_categoria/${id}`), {
            loading: 'Cargando productos...',
            success: (res) => {
                setIsLoading(false);
                dispatch(getProductos(res.data));
                return 'Lista filtrada cargada';
            },
            error: (err: AxiosError<any>) => {
                setIsLoading(false);
                return err.response!.data;
            }
        });
    }

    const get_productos = (id: number) => {
        setIsLoading(true);
        toast.promise(axios.get<ProductoType>(`${process.env.REACT_APP_RUTA_API}/Producto/${id}`), {
            loading: 'Cargando informacion del producto...',
            success: (res) => {
                setIsLoading(false);
                dispatch(getProducto(res.data));
                return 'Data Cargada';
            },
            error: (err: AxiosError<any>) => {
                setIsLoading(false);
                return err.response!.data;
            }
        });
    }

    const post_productos = (producto: ProductoType) => {
        setIsLoading(true);
        toast.promise(axios.post(`${process.env.REACT_APP_RUTA_API}/Producto`, { ...producto }), {
            loading: 'Guardando...',
            success: (res) => {
                setIsLoading(false);
                return res.data;
            },
            error: (err: AxiosError<any>) => {
                setIsLoading(false);
                return err.response!.data;
            }
        });
    }

    const put_productos = (producto: ProductoType) => {
        setIsLoading(true);
        toast.promise(axios.put(`${process.env.REACT_APP_RUTA_API}/Producto`, { ...producto }), {
            loading: 'Actualizando...',
            success: (res) => {
                setIsLoading(false);
                return res.data;
            },
            error: (err: AxiosError<any>) => {
                setIsLoading(false);
                return err.response!.data;
            }
        });
    }

    const delete_productos = (id: number) => {
        setIsLoading(true);
        toast.promise(axios.post(`${process.env.REACT_APP_RUTA_API}/Producto/${id}`), {
            loading: 'Eliminando contenido',
            success: (res) => {
                setIsLoading(false);
                return res.data;
            },
            error: (err: AxiosError<any>) => {
                setIsLoading(false);
                return err.response!.data;
            }
        });
    }

    return { getAll_productos, get_productos, post_productos, put_productos, delete_productos, get_filter_productos }
}