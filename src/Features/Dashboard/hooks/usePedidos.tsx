import { useContext } from "react"
import DashboardContext, { IDashboardContext } from "../provider"
import toast from "react-hot-toast";
import axios, { AxiosError } from "axios";
import { api } from "../../../Components/RutaApi";
import { useDispatch } from "react-redux";
import { getPedido, getPedidos } from "../../../Store/Pedido/pedido.slice";
import { PedidoType } from "../../../Interfaces/PedidoRequest";

export const usePedidos = () => {
    const { setIsLoading } = useContext(DashboardContext) as IDashboardContext;
    const dispatch = useDispatch();

    const getAll_pedidos = () => {
        setIsLoading(true);
        toast.promise(axios.get<PedidoType[]>(`${api}/Pedido`), {
            loading: 'cargando pedidos',
            success: (res) => {
                dispatch(getPedidos(res.data));
                setIsLoading(false);
                return 'Lista Actualizada'
            },
            error: (err: AxiosError<any>) => {
                setIsLoading(false);
                return err.response!.data
            }
        });
    }

    const get_pedido = (id: number) => {
        setIsLoading(true);
        toast.promise(axios.get<PedidoType>(`${api}/Pedido/${id}`), {
            loading: 'Buscando pedido',
            success: (res) => {
                dispatch(getPedido(res.data));
                setIsLoading(false);
                return 'Datos actualizados';
            },
            error: (err: AxiosError<any>) => {
                setIsLoading(false);
                return err.response!.data;
            }
        });
    }

    const post_pedido = (pedido: PedidoType) => {
        setIsLoading(true);
        toast.promise(axios.post<string>(`${api}/Pedido`, { ...pedido }), {
            loading: 'Guardando pedido',
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

    const delete_pedido = (id: number) => {
        setIsLoading(true);
        toast.promise(axios.post<string>(`${api}/Pedido/${id}`), {
            loading: 'Eliminando pedido',
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

    const put_pedido = (pedido: PedidoType) => {
        setIsLoading(true);
        toast.promise(axios.put<string>(`${api}/Pedido`, { ...pedido }), {
            loading: 'Guardando pedido',
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

    return { getAll_pedidos, get_pedido, post_pedido, delete_pedido, put_pedido }
}