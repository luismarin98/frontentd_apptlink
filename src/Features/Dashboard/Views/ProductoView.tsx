import { useDispatch, useSelector } from "react-redux";
import { productos_selector } from "../../../Store/Producto/producto.selector";
import { ProductoType } from "../../../Interfaces/ProductoRequest";
import { ButtonComponent } from "../../../Components/ButtonComponent";
import { useContext, useState, MouseEvent, useEffect } from "react";
import { PAGINACION_COMPONENT } from "../../../Components/Paginacion";
import { ModalForm } from "../../../Components/ModalForm";
import DashboardContext, { IDashboardContext } from "../provider";
import moment from "moment";
import { getProducto } from "../../../Store/Producto/producto.slice";
import { FORM_EDIT_PRODUCTO } from "../forms/Edit/EditProducto";
import { CREATE_PRODUCTO } from "../forms/Create/ProductoForm";
import { PRODUCTO_CARD } from "../../../Components/ProductoCard";

export const PRODUCTOS_VIEW = () => {
    const { isOpenModal, setIsOpenModal, isEdit, setIsEdit, delete_productos, get_all_categorias } = useContext(DashboardContext) as IDashboardContext;
    const dispatch = useDispatch();

    useEffect(() => { get_all_categorias() }, []);

    const productos: ProductoType[] | null = [
        {
            id: 1,
            categoria_id: 1,
            descripcion: 'producto para la higiene',
            fecha_actualizacion: new Date().toISOString(),
            fecha_creacion: new Date().toISOString(),
            nombre: 'shampoo',
            precio: 15.30,
            stock: 2,
        },
        {
            id: 2,
            categoria_id: 1,
            descripcion: 'producto para la higiene',
            fecha_actualizacion: new Date().toISOString(),
            fecha_creacion: new Date().toISOString(),
            nombre: 'shampoo',
            precio: 15.30,
            stock: 2,
        },
        {
            id: 3,
            categoria_id: 1,
            descripcion: 'producto para la higiene',
            fecha_actualizacion: new Date().toISOString(),
            fecha_creacion: new Date().toISOString(),
            nombre: 'shampoo',
            precio: 15.30,
            stock: 2,
        },
        {
            id: 4,
            categoria_id: 1,
            descripcion: 'producto para la higiene',
            fecha_actualizacion: new Date().toISOString(),
            fecha_creacion: new Date().toISOString(),
            nombre: 'shampoo',
            precio: 15.30,
            stock: 2,
        },
        {
            id: 5,
            categoria_id: 1,
            descripcion: 'producto para la higiene',
            fecha_actualizacion: new Date().toISOString(),
            fecha_creacion: new Date().toISOString(),
            nombre: 'shampoo',
            precio: 15.30,
            stock: 2,
        },
        {
            id: 6,
            categoria_id: 1,
            descripcion: 'producto para la higiene',
            fecha_actualizacion: new Date().toISOString(),
            fecha_creacion: new Date().toISOString(),
            nombre: 'shampoo',
            precio: 15.30,
            stock: 2,
        },
        {
            id: 7,
            categoria_id: 1,
            descripcion: 'producto para la higiene',
            fecha_actualizacion: new Date().toISOString(),
            fecha_creacion: new Date().toISOString(),
            nombre: 'shampoo',
            precio: 15.30,
            stock: 2,
        },
        {
            id: 8,
            categoria_id: 1,
            descripcion: 'producto para la higiene',
            fecha_actualizacion: new Date().toISOString(),
            fecha_creacion: new Date().toISOString(),
            nombre: 'shampoo',
            precio: 15.30,
            stock: 2,
        },
        {
            id: 9,
            categoria_id: 1,
            descripcion: 'producto para la higiene',
            fecha_actualizacion: new Date().toISOString(),
            fecha_creacion: new Date().toISOString(),
            nombre: 'shampoo',
            precio: 15.30,
            stock: 2,
        }
    ]//useSelector(productos_selector);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [productosPerPage, setProductosPerPage] = useState<number>(10);

    const handle_OpenModelNav = () => setIsOpenModal(!isOpenModal);

    const handleOpeEditModal = (e: MouseEvent<HTMLButtonElement>, data: ProductoType) => {
        e.preventDefault();
        setIsOpenModal(!isOpenModal);
        setIsEdit(true);
        dispatch(getProducto(data));
    }

    const handleDeleteProducto = (e: MouseEvent<HTMLButtonElement>, id_producto: number) => {
        e.preventDefault();
        delete_productos(id_producto);
    }

    const handleAddProducto = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsOpenModal(!isOpenModal);
    }

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
                productos ? (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
            {
                isEdit ? <FORM_EDIT_PRODUCTO /> : <CREATE_PRODUCTO />
            }
        </ModalForm>
    </div>;
}