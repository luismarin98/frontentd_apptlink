import DashboardContext, { IDashboardContext } from "../provider";
import { UsuarioType } from "../../../Interfaces/UsuarioRequest";
import { useContext } from "react";
import axios from "axios";
import { api } from "../../../Components/RutaApi";

export const useUsuario = () => {
    const { setIsLoading } = useContext(DashboardContext) as IDashboardContext;

    const get_usuario_info = async (id: number) => {
        setIsLoading(true);
        const response = await axios.get<UsuarioType | undefined>(`${api}/Usuario/${id}`);
        setIsLoading(false);
        return response.data;
    }

    return { get_usuario_info }
}