import { useSelector } from "react-redux"
import { pedido_selector } from "../../../Store/Pedido/pedido.selector"
import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import DashboardContext, { IDashboardContext } from "../provider";
import { DetallePedidoType } from "../../../Interfaces/DetallePedidoRequest";

export const EDIT_PEDIDO = () => {
    const { put_detallePedidos, get_pedido, get_productos } = useContext(DashboardContext) as IDashboardContext;
    const pedido = useSelector(pedido_selector);

    const { reset, handleSubmit, register } = useForm<DetallePedidoType>();

    useEffect(() => { if (pedido !== null) reset(pedido) }, [pedido])

    const submit = handleSubmit((data) => put_detallePedidos(data));

    return (
        <form onSubmit={submit} className="w-full h-full flex flex-col justify-between">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label>pedido_id</label>
                    <input type="number" {...register("pedido_id")} />
                </div>
                <div className="flex flex-col gap-2">
                    <label>producto_id</label>
                    <input type="number" {...register("producto_id")} />
                </div>
                <div className="flex flex-col gap-2">
                    <label>cantidad</label>
                    <input type="number" {...register("cantidad")} />
                </div>
                <div className="flex flex-col gap-2">
                    <label>precio_unitario</label>
                    <input type="number" {...register("precio_unitario")} />
                </div>
                <div className="flex flex-col gap-2">
                    <label>descuento</label>
                    <input type="number" {...register("descuento")} />
                </div>
                <div className="flex flex-col gap-2">
                    <label>impuesto</label>
                    <input type="number" {...register("impuesto")} />
                </div>
            </div>
        </form >
    )
}