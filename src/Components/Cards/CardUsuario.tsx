import { MouseEvent, useContext } from "react";
import { UsuarioType } from "../../Interfaces/UsuarioRequest";
import DashboardContext, { IDashboardContext } from "../../Features/Dashboard/provider";
import { ButtonComponent } from "../ButtonComponent";

export const CardUsuario = (props: UsuarioType) => {
    const { setUserInfoModal, userInfoModal } = useContext(DashboardContext) as IDashboardContext;

    const handle_close_modal = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setUserInfoModal(!userInfoModal);
    }

    return (
        <div className="w-full h-full flex flex-col gap-2 p-2 items-center justify-center">
            <div className="flex flex-col gap-2 w-full">
                <h2 className="text-xl font-bold mb-2">{props.nombre} {props.apellido}</h2>
                <p className="mb-2"><strong>Email:</strong> {props.email}</p>
                <p className="mb-2"><strong>Admin:</strong> {props.admin ? "Sí" : "No"}</p>
                <p className="mb-2"><strong>Estado:</strong> {props.estado ? "Activo" : "Inactivo"}</p>
            </div>
            <ButtonComponent align_text="center" onClick={handle_close_modal}>Cerrar</ButtonComponent>
        </div>
    );
};