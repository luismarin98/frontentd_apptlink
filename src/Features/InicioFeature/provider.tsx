import { createContext, ReactNode, useState, Dispatch, SetStateAction } from "react";
import { useRestore } from "./hooks/useRestore";
import { useAuth } from "./hooks/useAuth";
import { AuthUsuarioType } from "../../Interfaces/AuthRequest";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useRegister } from "./hooks/useRegister";
import { RegisterUserType } from "../../Interfaces/UsuarioRequest";

export interface IStartContext {
    isOpen: boolean;
    codeInput: boolean;
    loading: boolean;
    navigate: NavigateFunction;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    setLoading: Dispatch<SetStateAction<boolean>>;
    verificarCodigo: (email: string, code: string) => void;
    login: (data: AuthUsuarioType) => void;
    executeAsync: (usuario: RegisterUserType) => void;
}

const StartContext = createContext({});

export const StartProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const { codeInput, verificarCodigo } = useRestore();
    const { executeAsync } = useRegister();
    const { login } = useAuth();

    const storage: IStartContext = {
        isOpen,
        setIsOpen,
        codeInput,
        loading,
        setLoading,
        verificarCodigo,
        login,
        navigate,
        executeAsync
    };

    return <StartContext.Provider value={storage}>{children}</StartContext.Provider>
};

export default StartContext;