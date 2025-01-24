import { useContext, MouseEvent } from "react";
import { ProductoType } from "../../Interfaces/ProductoRequest";
import DashboardContext, { IDashboardContext } from "../../Features/Dashboard/provider";
import { useDispatch } from "react-redux";
import { getProducto } from "../../Store/Producto/producto.slice";
import { ButtonComponent } from "../ButtonComponent";
import moment from "moment";

export const PRODUCTO_CARD = (props: ProductoType) => {
    const { setIsEdit, setIsOpenModal, delete_pedido } = useContext(DashboardContext) as IDashboardContext;
    const dispatch = useDispatch();

    const handleOpenEdit = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsEdit(true);
        dispatch(getProducto(props));
        setIsOpenModal(true);
    }

    const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        delete_pedido(props.id);
    }

    return (
        <div className="flex flex-col bg-blue-500 p-4 rounded-md shadow-md">
            <p className="uppercase font-bold text-lg">{props.nombre}</p>
            <div className="p-2 flex flex-col gap-1">
                <p className="text-sm">{props.descripcion}</p>
                <p className="text-sm">Registrado: <span className="font-semibold">{moment(props.fecha_creacion).format('DD/MM/YYYY')}</span></p>
                <p className="text-sm">Codigo: {props.id}</p>
                <p className="text-sm">Precio: {props.precio}$</p>
            </div>
            <div className="w-full flex flex-row gap-1 justify-center">
                <ButtonComponent onClick={handleOpenEdit} type_button="succes"><span className="material-symbols-outlined">edit</span> Editar</ButtonComponent>
                <ButtonComponent onClick={handleDelete} type_button="warning"><span className="material-symbols-outlined">delete</span> Eliminar</ButtonComponent>
            </div>
        </div>
    )
}