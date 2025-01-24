import { DetallePedidoType } from "../../Interfaces/DetallePedidoRequest";
import { ButtonComponent } from "../ButtonComponent";

export const CardDetallePedido = (data: DetallePedidoType) => {
    return (
        <div className="flex items-center justify-between flex-col gap-1 w-full">
            <p><span className="font-semibold">Codigo producto:</span> {data.producto_id}</p>
            <p><span className="font-semibold">Descuento:</span> {data.descuento}</p>
            <p><span className="font-semibold">Impuesto:</span> {data.impuesto}</p>
            <p><span className="font-semibold">Precio:</span> {data.precio_unitario}</p>
            <p><span className="font-semibold">Cantidad:</span> {data.cantidad}</p>
            <ButtonComponent align_text="center">Eliminar</ButtonComponent>
        </div>
    )
}