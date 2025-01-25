import { useContext, useState } from "react";
import StartContext, { IStartContext } from "../provider";
import { AuthUsuarioType } from "../../../Interfaces/AuthRequest";
import toast from "react-hot-toast";
import axios, { AxiosError } from "axios";
import { RegisterUserType, RestorePassword, UsuarioType } from "../../../Interfaces/UsuarioRequest";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { getEmail } from "../../../Store/Usuario/usuario.slice";

export const useUsuario = () => {
    const { setLoading, navigate } = useContext(StartContext) as IStartContext;
    const dispatch = useDispatch();

    const login = (data: AuthUsuarioType) => {
        setLoading(true);
        toast.promise(axios.post(`${process.env.REACT_APP_RUTA_API}/Usuario/auth`, { ...data }), {
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

    const register_usuario = (usuario: RegisterUserType) => {
        setLoading(true);
        if (!usuario) return toast.error('Asegurate de rellenerar los campos antes completar el registro');
        toast.promise(axios.post(`${process.env.REACT_APP_RUTA_API}/Usuario/register`, { ...usuario }), {
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

    const get_recover = (email: string) => {
        setLoading(true);
        dispatch(getEmail(email));
        if (!email) return toast.error("Asegurate de enviar un correo electronico antes");
        toast.promise(axios.get(`${process.env.REACT_APP_RUTA_API}/Usuario/recover/${email}`), {
            loading: 'Cargando',
            success: (res) => {
                setLoading(false);
                navigate('/restore');
                return res.data;
            },
            error: (err: AxiosError<any>) => {
                setLoading(false);
                return err.response!.data;
            }
        })
    }

    const recover_password = (data: RestorePassword) => {
        setLoading(true);
        toast.promise(axios.put(`${process.env.REACT_APP_RUTA_API}/Usuario/change-password`, { ...data }), {
            loading: 'Cargando...',
            success: (res) => {
                setLoading(false);
                navigate('/login');
                return res.data;
            },
            error: (err: AxiosError<any>) => {
                setLoading(false);
                return err.response!.data
            }
        })
    }

    const verificarCodigo = (email: string, code: number) => {
        setLoading(true);
        toast.promise(axios.get(`${process.env.REACT_APP_RUTA_API}/Usuario/${email}/${code}`), {
            loading: 'Cargando...',
            success: (res) => {
                setLoading(false);
                return 'Verificacion completada, redireccionando...'
            },
            error: (err: AxiosError<any>) => {
                setLoading(false);
                return err.response!.data
            }
        })
    }

    const updateUser = (body: UsuarioType) => {
        setLoading(true);
        toast.promise(axios.put(`${process.env.REACT_APP_RUTA_API}/Usuario/update`, { ...body }), {
            loading: 'Actualizando datos...',
            success: (res) => {
                setLoading(false);
                return 'Actualizacion completada'
            },
            error: (err: AxiosError<any>) => {
                setLoading(false);
                return err.response!.data
            }
        })
    }

    return { login, register_usuario, verificarCodigo, updateUser, get_recover, recover_password }
}