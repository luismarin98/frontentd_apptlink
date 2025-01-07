import { MouseEvent, useContext, useEffect } from "react";
import DashboardContext, { IDashboardContext } from "../provider";
import { useForm } from "react-hook-form";
import { CategoriaType } from "../../../Interfaces/CategoriaRequest";
import { useSelector } from "react-redux";
import { categoria_selector } from "../../../Store/Categoria/categoria.selector";
import { InputComponent } from "../../../Components/InputComponent";
import { ButtonComponent } from "../../../Components/ButtonComponent";

export const CATEGORIA_FORM = () => {
    const { post_categoria, put_categoria, isEdit, setIsEdit, setOpenDraw, setCreateCategoria, get_all_categorias, loading } = useContext(DashboardContext) as IDashboardContext;
    const { handleSubmit, reset, register } = useForm<CategoriaType>();
    const categoria = useSelector(categoria_selector);

    useEffect(() => { if (categoria !== null) reset(categoria) }, [categoria, reset]);

    const handle_closeDraw = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        isEdit && setIsEdit(false);
        setCreateCategoria(false);
    };

    const handle_submit = handleSubmit((data) => {
        setOpenDraw(false);
        data.fecha_creacion = new Date().toISOString();
        isEdit && setIsEdit(false);
        isEdit ? put_categoria(data) : post_categoria(data);
        setCreateCategoria(false);
        get_all_categorias();
        reset();
    });

    return (
        <form onSubmit={handle_submit} className="flex flex-col gap-2">
            <InputComponent label="Nombre" id="nombre" register={register('nombre')} />
            <InputComponent label="Descripcion" id="descripcion" register={register('descripcion')} />
            <div className="flex flex-row gap-1 items-center justify-center">
                <ButtonComponent type="submit" type_button="succes" disabled={loading}>Guardar</ButtonComponent>
                <ButtonComponent onClick={handle_closeDraw} type_button="warning" disabled={loading}>Cancelar</ButtonComponent>
            </div>
        </form>
    );
};