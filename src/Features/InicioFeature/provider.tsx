import { createContext, ReactNode, useState, Dispatch, SetStateAction } from "react";
import { AuthUsuarioType } from "../../Interfaces/AuthRequest";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { RegisterUserType, RestorePassword, UsuarioType } from "../../Interfaces/UsuarioRequest";
import { useUsuario } from "./hooks/useUsuario";

export interface IStartContext {
    isOpen: boolean;
    loading: boolean;

    navigate: NavigateFunction;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    setLoading: Dispatch<SetStateAction<boolean>>;

    verificarCodigo: (email: string, code: number) => void;
    login: (data: AuthUsuarioType) => void;
    register_usuario: (usuario: RegisterUserType) => string | undefined;
    updateUser: (body: UsuarioType) => void;
    get_recover: (email: string) => string | undefined;
    recover_password: (data: RestorePassword) => void
}

const StartContext = createContext({});

export const StartProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const { login, register_usuario, verificarCodigo, updateUser, get_recover, recover_password } = useUsuario();

    const storage: IStartContext = {
        isOpen,
        setIsOpen,
        loading,
        setLoading,
        verificarCodigo,
        login,
        navigate,
        register_usuario,
        updateUser,
        get_recover,
        recover_password
    };

    return <StartContext.Provider value={storage}>{children}</StartContext.Provider>
};

export default StartContext;