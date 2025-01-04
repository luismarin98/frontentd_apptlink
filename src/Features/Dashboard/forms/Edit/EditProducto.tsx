import { useContext, MouseEvent, useEffect } from "react";
import DashboardContext, { IDashboardContext } from "../../provider";
import { useForm } from "react-hook-form";
import { ProductoType } from "../../../../Interfaces/ProductoRequest";
import toast from "react-hot-toast";
import { ButtonComponent } from "../../../../Components/ButtonComponent";
import { InputComponent } from "../../../../Components/InputComponent";
import { useDispatch, useSelector } from "react-redux";
import { getProducto } from "../../../../Store/Producto/producto.slice";
import { producto_selector } from "../../../../Store/Producto/producto.selector";
import { categoria_list_selector } from "../../../../Store/Categoria/categoria.selector";

export const FORM_EDIT_PRODUCTO = () => {
    const { put_productos, setIsEdit, setIsOpenModal } = useContext(DashboardContext) as IDashboardContext;
    const { handleSubmit, reset, register } = useForm<ProductoType>();
    const dispatch = useDispatch();
    const producto = useSelector(producto_selector);
    const categorias = useSelector(categoria_list_selector);

    useEffect(() => { if (producto != null) reset(producto) }, [producto]);

    const submit = handleSubmit((data) => {
        if (!data.descripcion || !data.nombre || !data.precio) return toast.error('Asegurate de rellenar todos los campos');
        data.fecha_actualizacion = new Date().toISOString();
        data.fecha_creacion = new Date().toISOString();
        data.stock++;
        put_productos(data);
        dispatch(getProducto(null));
        reset();
        setIsEdit(false);
    });

    const handleCancel = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsEdit(false);
        setIsOpenModal(false);
    };

    return (
        <form onSubmit={submit} className="flex flex-col gap-2 justify-center items-center">
            <InputComponent label="Nombre" id="nombre" register={register('nombre')} />
            <InputComponent label="Descripción" id="descripcion" register={register('descripcion')} />
            <InputComponent label="Precio" id="precio" register={register('precio')} />
            <div className="form-group w-full flex gap-2 flex-row">
                <label htmlFor="categoria_id" className="w-full text-center">Categoria</label>
                <select {...register('categoria_id')} className="form-control w-full px-20 rounded-md">
                    <option>Selecciona una categoria</option>
                    {categorias!.map((categoria) => (<option key={categoria.id} value={categoria.id}>{categoria.nombre}</option>))}
                </select>
            </div>
            <div className="flex flex-row gap-1 justify-items-center items-center">
                <ButtonComponent type_button="succes" type="submit">Guardar</ButtonComponent>
                <ButtonComponent onClick={handleCancel} type_button="warning">Cancelar</ButtonComponent>
            </div>
        </form>
    );
};