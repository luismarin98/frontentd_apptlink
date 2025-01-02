import { createContext, ReactNode, useState, Dispatch, SetStateAction } from "react";
import { AuthUsuarioType } from "../../Interfaces/AuthRequest";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { RegisterUserType, UsuarioType } from "../../Interfaces/UsuarioRequest";
import { useUsuario } from "./hooks/useUsuario";

export interface IStartContext {
    isOpen: boolean;
    codeInput: boolean;
    loading: boolean;
    navigate: NavigateFunction;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    setLoading: Dispatch<SetStateAction<boolean>>;
    verificarCodigo: (email: string, code: string) => void;
    login: (data: AuthUsuarioType) => void;
    register_usuario: (usuario: RegisterUserType) => string | undefined;
    updateUser: (body: UsuarioType) => void;
}

const StartContext = createContext({});

export const StartProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const { login, codeInput, register_usuario, verificarCodigo, updateUser } = useUsuario();

    const storage: IStartContext = {
        isOpen,
        setIsOpen,
        codeInput,
        loading,
        setLoading,
        verificarCodigo,
        login,
        navigate,
        register_usuario,
        updateUser
    };

    return <StartContext.Provider value={storage}>{children}</StartContext.Provider>
};

export default StartContext;