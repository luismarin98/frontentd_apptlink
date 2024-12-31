import { useContext } from "react"
import toast from "react-hot-toast";
import { AuthUsuarioType } from "../../../Interfaces/AuthRequest";
import axios, { AxiosError } from "axios";
import StartContext, { IStartContext } from "../provider";
import { api_consum } from "../../../Components/RutaApi";
import { UsuarioType } from "../../../Interfaces/UsuarioRequest";
import { jwtDecode } from "jwt-decode";

export const useAuth = () => {
    const { setLoading, navigate } = useContext(StartContext) as IStartContext;

    const login = (data: AuthUsuarioType) => {
        setLoading(true);
        toast.promise(axios.post(`${api_consum}/Usuario/auth`, { ...data }), {
            loading: 'Cargando...',
            success: (res) => {
                setLoading(false);
                const cliente_data: UsuarioType = JSON.parse(jwtDecode(res.data).sub!);
                navigate(`/dashboard/${cliente_data.id}`);
                localStorage.setItem('usuario', res.data)
                return 'Logueo exitoso';
            },
            error: (err: AxiosError<any>) => {
                setLoading(false);
                return err.response!.data
            }
        });
    }

    return { login }
}