import axios, { AxiosError } from "axios";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import StartContext, { IStartContext } from "../provider";

export const useRestore = () => {
    const [codeInput, setCodeInput] = useState<boolean>(false);
    const { setLoading } = useContext(StartContext) as IStartContext;

    const verificarCodigo = (email: string, code: string) => {
        setLoading(true);
        setCodeInput(true);
        toast.promise(axios.get(`${process.env.REACT_APP_RUTA_API}/${email}/${code}`), {
            loading: 'Cargando...',
            success: (res) => {
                setLoading(false);
                setCodeInput(false);
                return 'Verificacion completada, redireccionando...'
            },
            error: (err: AxiosError<any>) => {
                setLoading(false);
                return err.response!.data
            }
        })
    }

    return { codeInput, verificarCodigo }
}