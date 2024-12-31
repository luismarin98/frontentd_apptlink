import { useContext } from "react"
import StartContext, { IStartContext } from "../provider"
import toast from "react-hot-toast"
import axios, { AxiosError } from "axios"
import { api_consum } from "../../../Components/RutaApi"
import { RegisterUserType } from "../../../Interfaces/UsuarioRequest"

export const useRegister = () => {
    const { setLoading } = useContext(StartContext) as IStartContext

    const executeAsync = (usuario: RegisterUserType) => {
        setLoading(true);
        if (!usuario) return toast.error('Asegurate de rellenerar los campos antes completar el registro');
        toast.promise(axios.post(`${api_consum}/Usuario/register`, { ...usuario }), {
            loading: 'Cargando',
            success: (res) => {
                setLoading(false);
                return res.data;
            },
            error: (err: AxiosError<any>) => {
                setLoading(false);
                return err.response!.data;
            }
        })
    }

    return { executeAsync }
}