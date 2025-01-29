import { MouseEvent, useContext } from "react";
import { PedidoType } from "../../Interfaces/PedidoRequest";
import DashboardContext, { IDashboardContext } from "../../Features/Dashboard/provider";
import { ButtonComponent } from "../ButtonComponent";
import moment from "moment";
import { ModalForm } from "../ModalForm";
import { useSelector } from "react-redux";
import { usuario_selector } from "../../Store/Usuario/usuario.selector";
import { CardUsuario } from "./CardUsuario";
import { DrawerComponent } from "../DrawerComponent";
import { FORM_DETALLE_PEDIDO } from "../../Features/Dashboard/forms/DetallePedido";

export const CardPedido = (props: PedidoType) => {
    const { get_usuario_info, isEdit, setIsEdit, delete_pedido, userInfoModal, setUserInfoModal, openDraw, setOpenDraw, get_factura } = useContext(DashboardContext) as IDashboardContext;
    const usuario = useSelector(usuario_selector);

    const handle_userInfo = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        get_usuario_info(props.usuario_id);
        setUserInfoModal(!userInfoModal);
    }

    const handleEdit = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsEdit(!isEdit);
    }

    const handle_factura = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        get_factura(props.id);
    }

    const handleCancel = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        delete_pedido(props.id);
    }

    const handle_open_drawer = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setOpenDraw(!openDraw);
    }

    return (
        <div className="flex flex-col bg-neutral-600 p-4 rounded-md gap-1">
            <p><span className="font-semibold">Estado del pedido:</span>{props.estado}</p>
            <p><span className="font-semibold">Fecha del pedido:</span> {moment(props.fecha_pedido).format('DD/MM/YYYY')}</p>
            <p><span className="font-semibold">Total a cobrar:</span> {props.total}</p>
            <div className="flex flex-col gap-2">
                <ButtonComponent align_text="center" onClick={handle_userInfo}>Informacion del cliente</ButtonComponent>
                <ButtonComponent align_text="center" onClick={handleEdit}>Editar</ButtonComponent>
                <ButtonComponent align_text="center" onClick={handleCancel}>Eliminar</ButtonComponent>
                <ButtonComponent align_text="center" onClick={handle_open_drawer}>Agregar Productos</ButtonComponent>
                <ButtonComponent align_text="center" onClick={handle_factura}>Generar Factura</ButtonComponent>
            </div>
            <ModalForm isOpen={userInfoModal} closePromise={() => setUserInfoModal(!userInfoModal)} dialog_title="Informacion del usuario" >
                {usuario && <CardUsuario {...usuario} />}
            </ModalForm>
            <DrawerComponent isOpen={openDraw} onClose={() => setOpenDraw(!openDraw)} title="Productos del pedido">
                <FORM_DETALLE_PEDIDO pedido_id={props.id} />
            </DrawerComponent>
        </div>
    )
}