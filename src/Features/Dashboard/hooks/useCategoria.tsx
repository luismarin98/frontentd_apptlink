import { useContext } from "react"
import DashboardContext, { IDashboardContext } from "../provider"
import toast from "react-hot-toast";
import axios, { AxiosError } from "axios";
import { useDispatch } from "react-redux";
import { getCategoria, getCategorias } from "../../../Store/Categoria/categoria.slice";
import { CategoriaType } from "../../../Interfaces/CategoriaRequest";
import { api_consum } from "../../../Components/RutaApi";

export const useCategoria = () => {
    const { setIsLoading } = useContext(DashboardContext) as IDashboardContext;
    const dispatch = useDispatch();

    const get_categoria = (id: number) => {
        setIsLoading(true);
        toast.promise(axios.get<CategoriaType>(`${api_consum}/Categoria/${id}`), {
            loading: 'Cargando categorias',
            success: (res) => {
                setIsLoading(false);
                dispatch(getCategoria(res.data));
                return 'Filtro actualizado'
            },
            error: (err: AxiosError<any>) => {
                setIsLoading(false);
                return err.response!.data;
            }
        });
    };

    const get_all_categorias = () => {
        setIsLoading(true);
        toast.promise(axios.get<CategoriaType[]>(`${api_consum}/Categoria`), {
            loading: 'Cargando categorias',
            success: (res) => {
                setIsLoading(false);
                dispatch(getCategorias(res.data));
                return 'Lista de categoria actualizada'
            },
            error: (err: AxiosError<any>) => {
                setIsLoading(false);
                return err.response!.data;
            }
        });
    };

    const post_categoria = (categoria: CategoriaType) => {
        setIsLoading(true);
        toast.promise(axios.post(`${api_consum}/Categoria`, { ...categoria }), {
            loading: 'Guardando categorias',
            success: (res) => {
                setIsLoading(false);
                dispatch(getCategoria(res.data));
                return 'Categoria guardada'
            },
            error: (err: AxiosError<any>) => {
                setIsLoading(false);
                return err.response!.data;
            }
        });
    };

    const put_categoria = (categoria: CategoriaType) => {
        setIsLoading(true);
        toast.promise(axios.put(`${api_consum}/Categoria`, { ...categoria }), {
            loading: 'Guardando categorias',
            success: (res) => {
                setIsLoading(false);
                dispatch(getCategoria(res.data));
                return 'Categoria actualizada'
            },
            error: (err: AxiosError<any>) => {
                setIsLoading(false);
                return err.response!.data;
            }
        });
    };

    const delete_categoria = (id: number) => {
        setIsLoading(true);
        toast.promise(axios.delete(`${api_consum}/Categoria/${id}`), {
            loading: 'Cargando categorias',
            success: (res) => {
                setIsLoading(false);
                dispatch(getCategoria(res.data));
                return 'Filtro actualizado'
            },
            error: (err: AxiosError<any>) => {
                setIsLoading(false);
                return err.response!.data;
            }
        });
    };

    return { get_categoria, get_all_categorias, post_categoria, put_categoria, delete_categoria }
}