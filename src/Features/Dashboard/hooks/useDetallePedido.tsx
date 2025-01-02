import { useContext } from "react"
import DashboardContext, { IDashboardContext } from "../provider"
import { DetallePedidoType } from "../../../Interfaces/DetallePedidoRequest";
import toast from "react-hot-toast";
import axios, { AxiosError } from "axios";
import { api_consum } from "../../../Components/RutaApi";
import { useDispatch } from "react-redux";
import { getDetallePedido, getDetallePedidos } from "../../../Store/DetallePedido/detalle_pedido.slice";

export const useDetallePedido = () => {
    const { setIsLoading } = useContext(DashboardContext) as IDashboardContext;
    const dispatch = useDispatch();

    const get_detallePedidos = (id: number) => {
        setIsLoading(true);
        toast.promise(axios.get<DetallePedidoType>(`${api_consum}/DetallePedido/${id}`), {
            loading: 'Obteniendo informacion del pedido',
            success: (res) => {
                setIsLoading(false);
                dispatch(getDetallePedido(res.data));
                return 'Datos cargados';
            },
            error: (err: AxiosError<any>) => {
                setIsLoading(false);
                return err.response!.data;
            }
        });
    }

    const getAll_detallePedidos = () => {
        setIsLoading(true);
        toast.promise(axios.get<DetallePedidoType[]>(`${api_consum}/DetallePedido`), {
            loading: 'Obteniendo pedidos',
            success: (res) => {
                setIsLoading(false);
                dispatch(getDetallePedidos(res.data));
                return 'Datos cargados';
            },
            error: (err: AxiosError<any>) => {
                setIsLoading(false);
                return err.response!.data;
            }
        });
    }

    const post_detallePedidos = (detalle_pedido: DetallePedidoType) => {
        setIsLoading(true);
        toast.promise(axios.post<string>(`${api_consum}/DetallePedido`, { ...detalle_pedido }), {
            loading: 'Guardando detalle del pedido',
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

    const put_detallePedidos = (detalle_pedido: DetallePedidoType) => {
        setIsLoading(true);
        toast.promise(axios.put<string>(`${api_consum}/DetallePedido`, { ...detalle_pedido }), {
            loading: 'Actualizando detalle del pedido',
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

    const delete_detallePedidos = (id: number) => {
        setIsLoading(true);
        toast.promise(axios.delete<string>(`${api_consum}/DetallePedido/${id}`), {
            loading: 'Eliminando detalle',
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

    return { getAll_detallePedidos, get_detallePedidos, post_detallePedidos, put_detallePedidos, delete_detallePedidos }
}