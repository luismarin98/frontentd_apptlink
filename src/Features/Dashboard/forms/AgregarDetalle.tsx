import { useForm } from "react-hook-form";
import { DetallePedidoType } from "../../../Interfaces/DetallePedidoRequest";
import { InputComponent } from "../../../Components/InputComponent";
import { MouseEvent, useContext, useEffect } from "react";
import DashboardContext, { IDashboardContext } from "../provider";
import { ButtonComponent } from "../../../Components/ButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import { detalle_pedido_selector } from "../../../Store/DetallePedido/detalle_pedido.selector";
import { getDetallePedido } from "../../../Store/DetallePedido/detalle_pedido.slice";

export const FORM_AGREGAR_DETALLE = ({ pedido_id }: { pedido_id: number }) => {
    const { setLista_Detalles, setShowAddDetalle, showAddDetalle, isEdit, setIsEdit } = useContext(DashboardContext) as IDashboardContext;
    const { reset, register, setValue, getValues } = useForm<DetallePedidoType>();
    const detalle_pedido = useSelector(detalle_pedido_selector);
    const dispatch = useDispatch();

    useEffect(() => { if (pedido_id > 0) setValue('pedido_id', pedido_id) }, [pedido_id])
    useEffect(() => { if (isEdit && detalle_pedido) reset(detalle_pedido) }, [detalle_pedido])

    const handle_add_detalle = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const data = getValues();
        setLista_Detalles((prev) => [...prev, data]);
        setShowAddDetalle(!showAddDetalle);
        reset()
    }

    const handle_cancel_add_detalle = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setShowAddDetalle(!showAddDetalle);
        isEdit && setIsEdit(!isEdit);
        dispatch(getDetallePedido(null));
    }

    return (
        <div className="w-full h-full flex flex-col gap-1 items-center p-1">
            <InputComponent label="Cantidad" id="cantidad" register={register('cantidad')} />
            <InputComponent label='Precio unitario' id="precio_unitario" register={register('precio_unitario')} />
            <InputComponent label="Descuento" id="descuento" register={register('descuento')} />
            <InputComponent label="Impuesto" id="impuesto" register={register('impuesto')} />
            <InputComponent label="Codigo producto" id="producto_id" register={register('producto_id')} />
            <div className="w-full flex gap-1 items-center justify-center">
                <ButtonComponent align_text="center" onClick={handle_add_detalle} type="submit" type_button="succes">Agregar</ButtonComponent>
                <ButtonComponent align_text="center" onClick={handle_cancel_add_detalle} type_button="warning">Cancelar</ButtonComponent>
            </div>
        </div >
    )
}