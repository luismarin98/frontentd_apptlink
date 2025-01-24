import { useSelector } from "react-redux"
import { useForm } from "react-hook-form";
import { MouseEvent, useContext, useEffect } from "react";
import DashboardContext, { IDashboardContext } from "../provider";
import { DetallePedidoType } from "../../../Interfaces/DetallePedidoRequest";
import { InputComponent } from "../../../Components/InputComponent";
import { ButtonComponent } from "../../../Components/ButtonComponent";
import { producto_selector, productos_selector } from "../../../Store/Producto/producto.selector";
import { detalle_pedido_selector } from "../../../Store/DetallePedido/detalle_pedido.selector";
import { FORM_AGREGAR_DETALLE } from "./AgregarDetalle";

export const FORM_DETALLE_PEDIDO = ({ pedido_id }: { pedido_id: number }) => {
    const { put_detallePedidos, post_detallePedidos, isEdit, setIsEdit, showAddDetalle, lista_detalle, setLista_Detalles, post_some_detallePedidos } = useContext(DashboardContext) as IDashboardContext;
    const detalle_pedido = useSelector(detalle_pedido_selector);
    const lista_productos = useSelector(productos_selector);
    const producto = useSelector(producto_selector);

    const { reset, handleSubmit, setValue } = useForm<DetallePedidoType>();

    useEffect(() => { setValue('pedido_id', pedido_id) }, [pedido_id])

    useEffect(() => { if (detalle_pedido !== null) reset(detalle_pedido) }, [detalle_pedido])

    const submit = handleSubmit((data) => {
        isEdit && setIsEdit(false);
        isEdit ? put_detallePedidos(data) : post_detallePedidos(data);
    });

    const handle_select_producto = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setValue('producto_id', producto ? producto.id : 0);
    }

    const handle_del_detalle = (e: MouseEvent<HTMLButtonElement>, index: number) => {
        e.preventDefault();
        const updateArray = [...lista_detalle];
        updateArray.splice(index, 1);
        setLista_Detalles(updateArray);
    }

    const handle_save_detalles = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        post_some_detallePedidos(lista_detalle);
    }

    return (
        <form onSubmit={submit} className="w-full h-full flex flex-col gap-1 items-center justify-between p-1">
            <div className="flex items-center justify-center gap-1 w-full h-auto">
                {
                    showAddDetalle !== true && <FormSearchProducto />
                }
                {
                    showAddDetalle && <FORM_AGREGAR_DETALLE pedido_id={pedido_id} />
                }
            </div>
            <div className="flex flex-col gap-1 p-1 overflow-y-scroll overflow-hidden h-1/2 w-full">
                {
                    lista_detalle && lista_detalle.map((data, i) => (
                        <div key={i} className="flex items-center justify-between flex-row gap-1 w-full p-1 bg-neutral-600 rounded-md shadow-md shadow-neutral-800">
                            <div className="flex flex-row flex-wrap gap-1">
                                <p><span className="font-semibold">Codigo producto:</span> {data.producto_id}</p>
                                <p><span className="font-semibold">Descuento:</span> {data.descuento}</p>
                                <p><span className="font-semibold">Impuesto:</span> {data.impuesto}</p>
                                <p><span className="font-semibold">Precio:</span> {data.precio_unitario}</p>
                                <p><span className="font-semibold">Cantidad:</span> {data.cantidad}</p>
                            </div>
                            <ButtonComponent align_text="center" onClick={(e) => handle_del_detalle(e, i)}>Eliminar</ButtonComponent>
                        </div>
                    ))
                }
                {
                    lista_detalle && lista_detalle.length > 0 && <ButtonComponent onClick={handle_save_detalles}>Guardar Detalles</ButtonComponent>
                }
            </div>
            <div className="flex flex-col gap-1 p-1 overflow-y-scroll h-1/2 w-full overflow-hidden">
                {lista_productos && lista_productos.map((obj, i) => (<div key={i} className="flex flex-row gap-2 p-2 w-full">
                    <div className="flex flex-col gap-1 w-full">
                        <p className="uppercase text-lg">{obj.nombre}</p>
                        <p className="text-sm">{obj.descripcion}</p>
                        <p className="text-sm">Precio: {obj.precio}</p>
                        <p className="text-sm">Stock: {obj.stock}</p>
                    </div>
                    <ButtonComponent onClick={handle_select_producto}>Seleccionar</ButtonComponent>
                </div>))}
            </div>
        </form >
    )
}

interface PropsFormSearch {
    nombre: string;
}

const FormSearchProducto = () => {
    const lista_productos = useSelector(productos_selector);
    const { register, getValues } = useForm<PropsFormSearch>();
    const { setShowAddDetalle, showAddDetalle } = useContext(DashboardContext) as IDashboardContext;

    const handle_search = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const data = getValues();
        lista_productos?.find(obj => obj.nombre === data.nombre || obj.id.toString() === data.nombre);
    }

    const handle_add_detalle = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setShowAddDetalle(!showAddDetalle);
    }

    return (
        <div className="w-full h-full flex flex-col gap-1 p-1 items-center">
            <InputComponent label="Nombre del producto" register={register('nombre')} />
            <div className="flex flex-row gap-2 w-full items-center justify-center">
                <ButtonComponent onClick={handle_search} type="submit">Buscar</ButtonComponent>
                {!showAddDetalle && <ButtonComponent onClick={handle_add_detalle} type="submit">Agregar Detalle</ButtonComponent>}
            </div>
        </div>
    )
}