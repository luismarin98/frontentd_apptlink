import { useSelector } from "react-redux"
import { useForm } from "react-hook-form";
import { MouseEvent, useContext, useEffect } from "react";
import DashboardContext, { IDashboardContext } from "../provider";
import { DetallePedidoType } from "../../../Interfaces/DetallePedidoRequest";
import { InputComponent } from "../../../Components/InputComponent";
import { ButtonComponent } from "../../../Components/ButtonComponent";
import { DrawerComponent } from "../../../Components/DrawerComponent";
import toast from "react-hot-toast";
import { producto_selector, productos_selector } from "../../../Store/Producto/producto.selector";
import { detalle_pedido_selector } from "../../../Store/DetallePedido/detalle_pedido.selector";

export const FORM_DETALLE_PEDIDO = ({ pedido_id }: { pedido_id: number }) => {
    const { put_detallePedidos, post_detallePedidos, setOpenSearchProducto, isEdit, setIsEdit, setOpenDraw, openDraw } = useContext(DashboardContext) as IDashboardContext;
    const detalle_pedido = useSelector(detalle_pedido_selector);
    const lista_productos = useSelector(productos_selector);
    const producto = useSelector(producto_selector);

    const { reset, handleSubmit, register, setValue } = useForm<DetallePedidoType>();

    useEffect(() => { setValue('pedido_id', pedido_id) }, [pedido_id])

    useEffect(() => { if (detalle_pedido !== null) reset(detalle_pedido) }, [detalle_pedido])

    const submit = handleSubmit((data) => {
        isEdit && setIsEdit(false);
        isEdit ? put_detallePedidos(data) : post_detallePedidos(data);
    });

    const handle_search_product = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setOpenSearchProducto(true);
        setOpenDraw(true);
    }

    const handle_select_producto = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setValue('producto_id', producto ? producto.id : 0);
    }

    return (
        <form onSubmit={submit} className="w-full h-full flex flex-col justify-between">
            <InputComponent label="Cantidad" id="cantidad" register={register('cantidad')} />
            <InputComponent label='Precio unitario' id="precio_unitario" register={register('precio_unitario')} />
            <InputComponent label="Descuento" id="descuento" register={register('descuento')} />
            <InputComponent label="Impuesto" id="impuesto" register={register('impuesto')} />
            <InputComponent label="Codigo producto" id="producto_id" register={register('producto_id')} />

            <ButtonComponent onClick={handle_search_product}>Buscar producto</ButtonComponent>

            <DrawerComponent isOpen={openDraw} onClose={() => setOpenDraw(false)} title="Buscar producto">
                <FormSearchProducto />
                {lista_productos && lista_productos.map((obj, i) => (<div key={i} className="flex flex-row gap-2 p-2">
                    <div className="flex flex-col gap-1">
                        <p className="uppercase text-lg">{obj.nombre}</p>
                        <p className="text-sm">{obj.descripcion}</p>
                        <p className="text-sm">Precio: {obj.precio}</p>
                        <p className="text-sm">Stock: {obj.stock}</p>
                    </div>
                    <ButtonComponent onClick={handle_select_producto}>Seleccionar</ButtonComponent>
                </div>))}
            </DrawerComponent>
        </form >
    )
}

interface PropsFormSearch {
    nombre: string;
}

const FormSearchProducto = () => {
    const lista_productos = useSelector(productos_selector);
    const { register, handleSubmit } = useForm<PropsFormSearch>();

    const submit = handleSubmit((data) => {
        if (!data.nombre) return toast.error('Asegurate de no dejar campos vacios');
        lista_productos?.find(obj => obj.nombre === data.nombre)
    })

    return (
        <form onSubmit={submit} className="w-full h-full flex flex-col gap-1 p-1">
            <p className="font-bold uppercase text-lg">Buscar coincidencias</p>
            <InputComponent label="Nombre del producto" register={register('nombre')} />
            <ButtonComponent type="submit">Buscar</ButtonComponent>
        </form>
    )
}