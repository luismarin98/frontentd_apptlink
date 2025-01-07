import { useContext, MouseEvent, useEffect } from "react";
import DashboardContext, { IDashboardContext } from "../provider";
import { useForm } from "react-hook-form";
import { ProductoType } from "../../../Interfaces/ProductoRequest";
import toast from "react-hot-toast";
import { ButtonComponent } from "../../../Components/ButtonComponent";
import { InputComponent } from "../../../Components/InputComponent";
import { useDispatch, useSelector } from "react-redux";
import { getProducto } from "../../../Store/Producto/producto.slice";
import { producto_selector } from "../../../Store/Producto/producto.selector";
import { categoria_list_selector } from "../../../Store/Categoria/categoria.selector";
import { OPTION_COMPONENT, SELECT_COMPONENT } from "../../../Components/SelectComponent";

export const FORM_PRODUCTO = () => {
    const { put_productos, post_productos, isEdit, setIsEdit, setIsOpenModal, loading } = useContext(DashboardContext) as IDashboardContext;
    const { handleSubmit, reset, register } = useForm<ProductoType>();
    const dispatch = useDispatch();
    const producto = useSelector(producto_selector);
    const categorias = useSelector(categoria_list_selector);

    useEffect(() => { if (producto != null) reset(producto) }, []);

    const submit = handleSubmit((data) => {
        if (!data.descripcion || !data.nombre || !data.precio) return toast.error('Asegurate de rellenar todos los campos');
        data.fecha_creacion = new Date().toISOString();
        isEdit ? put_productos(data) : post_productos(data);
        dispatch(getProducto(null));
        reset();
        isEdit && setIsEdit(false);
        setIsOpenModal(false);
    });

    const handleCancel = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        isEdit && setIsEdit(false);
        setIsOpenModal(false);
        dispatch(getProducto(null))
    };

    return (
        <form onSubmit={submit} className="flex flex-col gap-2 justify-center items-center w-full">
            <InputComponent label="Nombre" id="nombre" register={register('nombre')} />
            <InputComponent label="Descripción" id="descripcion" register={register('descripcion')} />
            <InputComponent 
                label="Precio" 
                id="precio" 
                register={register('precio', {
                    pattern: {
                        value: /^[0-9]*\.?[0-9]+$/,
                        message: "El precio debe ser un número válido sin comas y con un punto decimal."
                    }
                })} 
            />
            <InputComponent label="Stock" id='stock' register={register('stock')} />
            <SELECT_COMPONENT label="Categoria" register={register('categoria_id')}>
                <OPTION_COMPONENT label="Seleccionar una categoria" />
                {categorias && categorias.map((data) => (
                    <OPTION_COMPONENT key={data.id} value={data.id} label={data.nombre!} />
                ))}
            </SELECT_COMPONENT>
            <div className="flex flex-row gap-1 justify-center items-center">
                <ButtonComponent type_button="succes" type="submit" disabled={loading}>Guardar</ButtonComponent>
                <ButtonComponent onClick={handleCancel} type_button="warning" disabled={loading}>Cancelar</ButtonComponent>
            </div>
        </form>
    );
};