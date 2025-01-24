import { useContext, useEffect, useState, MouseEvent } from "react"
import DashboardContext, { IDashboardContext } from "../provider"
import { useSelector } from "react-redux";
import { pedido_list_selector } from "../../../Store/Pedido/pedido.selector";
import { PedidoType } from "../../../Interfaces/PedidoRequest";
import { ButtonComponent } from "../../../Components/ButtonComponent";
import { CardPedido } from "../../../Components/Cards/CardPedido";
import { PAGINACION_COMPONENT } from "../../../Components/Paginacion";
import { ModalForm } from "../../../Components/ModalForm";
import { FormPedido } from "../forms/Pedido";

export const PEDIDOS_VIEW = () => {
    const { getAll_pedidos, setIsOpenModal, isOpenModal } = useContext(DashboardContext) as IDashboardContext;
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pedidoPerPage, setPedidoPerPage] = useState<number>(10);

    useEffect(() => { 
        getAll_pedidos()

     }, []);

    const pedidos = useSelector(pedido_list_selector);

    const indexOfLastProduct = currentPage * pedidoPerPage;
    const indexOfFirstProduct = indexOfLastProduct - pedidoPerPage;

    const currentPedidos: PedidoType[] = pedidos ? pedidos.slice(indexOfFirstProduct, indexOfLastProduct) : [];
    const total_Pages: number = pedidos ? Math.ceil(pedidos.length / pedidoPerPage) : 1;

    const handle_create_pedido = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsOpenModal(!isOpenModal);
    }

    const handle_close_modal = () => setIsOpenModal(!isOpenModal)

    return (
        <div className="w-full h-full flex flex-col justify-between items-center">
            <div className="w-full h-full flex flex-col justify-between gap-2">
                <div className="w-full flex justify-between p-2">
                    <ButtonComponent onClick={handle_create_pedido}>Crear Pedido</ButtonComponent>
                    <div className="flex flex-row gap-2">
                        <p className="text-lg">Items por pagina</p>
                        <select
                            value={pedidoPerPage}
                            onChange={(e) => setPedidoPerPage(Number(e.target.value))}
                            className="py-1 px-4 rounded-lg text-black"
                        >
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={15}>15</option>
                            <option value={20}>20</option>
                        </select>
                    </div>
                </div>
                <div className="w-full h-full flex items-center flex-col justify-center gap-5">
                    {
                        currentPedidos ? (
                            <>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                                    {currentPedidos.map((data, i) => (<CardPedido key={i} {...data} />))}
                                </div>
                                <PAGINACION_COMPONENT currentPage={currentPage} totalPages={total_Pages} onPageChange={setCurrentPage} />
                            </>
                        ) : (<p>Sin productos registrados</p>)
                    }
                </div>
                <ModalForm isOpen={isOpenModal} closePromise={handle_close_modal} dialog_title='Pedido'><FormPedido /></ModalForm>
            </div>
        </div>
    )
}