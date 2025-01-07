import { useContext, useEffect, useState } from "react"
import DashboardContext, { IDashboardContext } from "../provider"
import { useSelector } from "react-redux";
import { pedido_list_selector } from "../../../Store/Pedido/pedido.selector";

export const PEDIDOS_VIEW = () => {
    const { getAll_pedidos } = useContext(DashboardContext) as IDashboardContext;
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [productosPerPage, setProductosPerPage] = useState<number>(10);

    useEffect(() => { getAll_pedidos() }, []);

    const pedidos = useSelector(pedido_list_selector);

    return (
        <div className="w-full h-full flex flex-col justify-between items-center">
            <div className="w-full p-2"><p>Pedidos Screen</p></div>
            <div className="w-full h-full flex flex-col gap-2">
                <div className="w-full flex justify-between"></div>
            </div>
        </div>
    )
}