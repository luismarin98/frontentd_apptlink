export interface DetallePedidoType {
    id: number;
    pedido_id: number;
    producto_id: number;
    cantidad: number;
    precio_unitario: number;
    descuento: number;
    impuesto: number;
}