import { useDispatch, useSelector } from "react-redux"
import { pedido_selector } from "../../../Store/Pedido/pedido.selector"
import { MouseEvent, useContext, useEffect } from "react";
import DashboardContext, { IDashboardContext } from "../provider";
import { useForm } from "react-hook-form";
import { PedidoType } from "../../../Interfaces/PedidoRequest";
import { InputComponent } from "../../../Components/InputComponent";
import { ButtonComponent } from "../../../Components/ButtonComponent";
import toast from "react-hot-toast";
import { getPedido } from "../../../Store/Pedido/pedido.slice";

export const FormPedido = () => {
    const { put_pedido, post_pedido, setIsOpenModal, isEdit, setIsEdit } = useContext(DashboardContext) as IDashboardContext;
    const { handleSubmit, reset, register } = useForm<PedidoType>();
    const pedido = useSelector(pedido_selector);
    const dispatch = useDispatch();

    useEffect(() => { pedido != null && reset(pedido) }, [reset, pedido]);

    const submit = handleSubmit((data) => {
        if (!data) return toast.error('Asegurate de rellenar los campos antes de enviar la informacion');
        isEdit ? put_pedido(data) : post_pedido(data);
        isEdit && setIsEdit(false);
        dispatch(getPedido(null));
        setIsOpenModal(false);
        reset();
    });

    const handle_cancel = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        isEdit && setIsEdit(false);
        isEdit && dispatch(getPedido(null));
        setIsOpenModal(false);
        reset();
    }

    return (
        <form onSubmit={submit} className="flex flex-col gap-2 justify-center items-center w-full">
            <InputComponent label="Usuario" register={register('usuario_id')} />
            <InputComponent label="Fecha" type="date" register={register('fecha_pedido')} />
            <div className="flex flex-row items-center justify-center w-full">
                <ButtonComponent type="submit">Guardar</ButtonComponent>
                <ButtonComponent onClick={handle_cancel}>Cancelar</ButtonComponent>
            </div>
        </form>
    )
}