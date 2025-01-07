import { ProductoType } from "../../../Interfaces/ProductoRequest";
import { ButtonComponent } from "../../../Components/ButtonComponent";
import { useContext, useState, MouseEvent, useEffect } from "react";
import { PAGINACION_COMPONENT } from "../../../Components/Paginacion";
import { ModalForm } from "../../../Components/ModalForm";
import DashboardContext, { IDashboardContext } from "../provider";
import { FORM_PRODUCTO } from "../forms/Producto";
import { PRODUCTO_CARD } from "../../../Components/ProductoCard";
import { CATEGORIA_FORM } from "../forms/Categoria";
import { DrawerComponent } from "../../../Components/DrawerComponent";
import { useSelector } from "react-redux";
import { categoria_list_selector } from "../../../Store/Categoria/categoria.selector";
import { CardCategoria } from "../../../Components/CardCategoria";
import { productos_selector } from "../../../Store/Producto/producto.selector";

export const PRODUCTOS_VIEW = () => {
    const { isOpenModal, setIsOpenModal, isEdit, get_all_categorias, getAll_productos, setOpenDraw, openDraw, setCreateCategoria, createCategoria, setIsEdit } = useContext(DashboardContext) as IDashboardContext;

    useEffect(() => { get_all_categorias(); getAll_productos() }, []);

    const categorias = useSelector(categoria_list_selector);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [productosPerPage, setProductosPerPage] = useState<number>(10);

    const handle_OpenModelNav = () => setIsOpenModal(!isOpenModal);
    const handle_open_drawe = () => setOpenDraw(!openDraw)

    const handleAddProducto = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsOpenModal(!isOpenModal);
    }

    const handle_create_categoria = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setCreateCategoria(!createCategoria);
        isEdit && setIsEdit(false);
    }

    const productos = useSelector(productos_selector);

    const indexOfLastProduct = currentPage * productosPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productosPerPage;

    const currentProducts: ProductoType[] = productos ? productos.slice(indexOfFirstProduct, indexOfLastProduct) : [];
    const total_Pages: number = productos ? Math.ceil(productos.length / productosPerPage) : 1;

    return <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-full p-2">
            <p className="font-semibold text-xl uppercase">Catalogo de productos</p>
        </div>
        <div className="w-full flex flex-row items-center justify-between p-1 gap-2">
            <ButtonComponent onClick={handleAddProducto}>Agregar Producto</ButtonComponent>
            <div className="flex gap-2">
                <ButtonComponent onClick={(e) => {
                    e.preventDefault();
                    handle_open_drawe();
                }}>Categoria</ButtonComponent>
            </div>
            <div className="flex flex-row gap-2">
                <p className="text-lg">Items por pagina</p>
                <select
                    value={productosPerPage}
                    onChange={(e) => setProductosPerPage(Number(e.target.value))}
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
                currentProducts ? (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                            {currentProducts.map((data, i) => (<PRODUCTO_CARD key={i} {...data} />))}
                        </div>
                        <PAGINACION_COMPONENT currentPage={currentPage} totalPages={total_Pages} onPageChange={setCurrentPage} />
                    </>
                ) : (
                    <p>Sin productos registrados</p>
                )
            }
        </div>
        <ModalForm isOpen={isOpenModal} closePromise={handle_OpenModelNav} dialog_title={isEdit ? 'Editar Producto' : 'Agregar Producto'}>
            <FORM_PRODUCTO />
        </ModalForm>
        <DrawerComponent isOpen={openDraw} onClose={handle_open_drawe} title='Categoria'>
            <div className="flex w-full h-full justify-between flex-col gap-2">
                <div className="flex flex-col gap-2 items-center justify-center">
                    <div className="flex flex-row gap-2 items-center justify-center">
                        <ButtonComponent onClick={handle_create_categoria} >{createCategoria ? 'Cancelar' : 'Agregar'}</ButtonComponent>
                        <ButtonComponent onClick={() => getAll_productos()}>Reset Filter</ButtonComponent>
                    </div>
                    {createCategoria && <CATEGORIA_FORM />}
                </div>
                <div className="flex flex-col items-center gap-2 justify-center p-2 h-full overflow-scroll overflow-y-hidden overflow-x-hidden max-h-full">{categorias && categorias.map((data) => <CardCategoria key={data.id} {...data} />)}</div>
            </div>
        </DrawerComponent>
    </div>;
}