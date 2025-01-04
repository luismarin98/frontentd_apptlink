import { useContext, MouseEvent, useEffect } from "react";
import DashboardContext, { IDashboardContext } from "../../provider";
import { ProductoType } from "../../../../Interfaces/ProductoRequest";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { getProducto } from "../../../../Store/Producto/producto.slice";
import { ButtonComponent } from "../../../../Components/ButtonComponent";
import { categoria_list_selector } from "../../../../Store/Categoria/categoria.selector";

export const CREATE_PRODUCTO = () => {
    const { post_productos, setIsOpenModal } = useContext(DashboardContext) as IDashboardContext;
    const { handleSubmit, reset, register } = useForm<ProductoType>();
    const dispatch = useDispatch();
    const categorias = useSelector(categoria_list_selector);

    const submit = handleSubmit((data) => {
        if (!data.descripcion || !data.nombre || !data.precio) return toast.error('Asegurate de rellenar todos los campos');
        data.fecha_actualizacion = new Date().toISOString();
        data.fecha_creacion = new Date().toISOString();
        if (data.categoria_id = null) return toast.error('Asegurate de seleccionar antes una categoria');
        data.stock++;
        post_productos(data);
        dispatch(getProducto(null));
        reset();
        setIsOpenModal(false);
    });

    const handleCancel = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsOpenModal(false);
    }

    return <form onSubmit={submit} className="flex flex-col gap-2 justify-center items-center">
        <div className="form-group w-full flex gap-2 flex-row">
            <label htmlFor="nombre" className="w-full text-center">Nombre</label>
            <input type="text" id="nombre" name="nombre" className="form-control w-full px-20 rounded-md" />
        </div>
        <div className="form-group w-full flex gap-2 flex-row">
            <label htmlFor="descripcion" className="w-full text-center">Descripción</label>
            <input type="text" id="descripcion" name="descripcion" className="form-control w-full px-20 rounded-md" />
        </div>
        <div className="form-group w-full flex gap-2 flex-row">
            <label htmlFor="precio" className="w-full text-center">Precio</label>
            <input type="text" id="precio" name="precio" className="form-control w-full px-20 rounded-md" />
        </div>
        <div className="form-group w-full flex gap-2 flex-row">
            <label htmlFor="categoria_id" className="w-full text-center">Categoria</label>
            <select {...register('categoria_id')} className="form-control w-full px-20 rounded-md">
                <option>Selecciona una categoria</option>
                {categorias!.map((categoria) => (
                    <option key={categoria.id} value={categoria.id}>
                        {categoria.nombre}
                    </option>
                ))}
            </select>
        </div>
        <div className="flex flex-row gap-1 justify-items-center items-center">
            <ButtonComponent type_button="succes" type="submit">Agregar</ButtonComponent>
            <ButtonComponent onClick={handleCancel} type_button="warning">Cancelar</ButtonComponent>
        </div>
    </form>
}