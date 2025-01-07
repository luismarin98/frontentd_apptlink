import { MouseEvent, useContext } from "react";
import { PedidoType } from "../Interfaces/PedidoRequest";
import DashboardContext, { IDashboardContext } from "../Features/Dashboard/provider";
import { ButtonComponent } from "./ButtonComponent";
import moment from "moment";

export const CardPedido = (props: PedidoType) => {
    const { get_usuario_info, isEdit, setIsEdit, delete_pedido } = useContext(DashboardContext) as IDashboardContext;

    const handle_userInfo = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        get_usuario_info(props.usuario_id);
    }

    const handleEdit = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsEdit(!isEdit);
    }

    const handleCancel = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        delete_pedido(props.id)
    }

    return (
        <div className="flex flex-col bg-blue-500 p-4 rounded-md gap-1">
            <p><span className="font-semibold">Estado del pedido:</span>{props.estado}</p>
            <p><span className="font-semibold">Fecha del pedido:</span> {moment(props.fecha_pedido).format('DD/MM/YYYY')}</p>
            <p><span className="font-semibold">Total a cobrar:</span> {props.total}</p>
            <ButtonComponent onClick={handle_userInfo}>Informacion de usuario</ButtonComponent>
            <div className="flex flex-row gap-2">
                <ButtonComponent onClick={handleEdit}>Editar</ButtonComponent>
                <ButtonComponent onClick={handleCancel}>Eliminar</ButtonComponent>
            </div>
        </div>
    )
}