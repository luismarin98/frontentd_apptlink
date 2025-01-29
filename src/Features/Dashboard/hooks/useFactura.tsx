import { useContext } from "react";
import DashboardContext, { IDashboardContext } from "../provider";
import toast from "react-hot-toast";
import axios from "axios";
import { api_consum } from "../../../Components/RutaApi";

export const useFactura = () => {
    const { setIsLoading } = useContext(DashboardContext) as IDashboardContext;

    const get_factura = (id_pedido: number) => {
        setIsLoading(true);
        toast.promise(axios.get(`${api_consum}/Factura/GenerarFactura/${id_pedido}`), {
            loading: 'Buscando factura',
            success: (res) => {
                setIsLoading(false);
                return res.data;
            },
            error: (err) => {
                setIsLoading(false);
                return err.response!.data;
            }
        })
    }

    return { get_factura }
}