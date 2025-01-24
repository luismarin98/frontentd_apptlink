import { useContext, MouseEvent } from "react";
import { CategoriaType } from "../../Interfaces/CategoriaRequest";
import DashboardContext, { IDashboardContext } from "../../Features/Dashboard/provider";
import { useDispatch } from "react-redux";
import { getCategoria } from "../../Store/Categoria/categoria.slice";
import { ButtonComponent } from "../ButtonComponent";

export const CardCategoria = (props: CategoriaType) => {
    const { isEdit, setIsEdit, delete_categoria, setCreateCategoria, createCategoria, get_filter_productos } = useContext(DashboardContext) as IDashboardContext
    const dispatch = useDispatch();

    const handle_setDataEdit = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(getCategoria(props));
        setCreateCategoria(!createCategoria)
        setIsEdit(!isEdit);
    }

    const handle_Delete = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        delete_categoria(props.id);
    }

    const handle_filter_productos = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        get_filter_productos(props.id);
    }

    return (
        <div className="w-full flex flex-row gap-2 bg-blue-400 rounded-md p-3">
            <div className="flex flex-col gap-1 w-full">
                <p className="font-bold text-xl">{props.nombre}</p>
                <p className="text-sm">{props.descripcion}</p>
            </div>
            <div className="flex flex-col gap-2">
                <div className="px-1 flex flex-row gap-2 items-center justify-center">
                    <ButtonComponent onClick={handle_setDataEdit} type_button="succes">Editar</ButtonComponent>
                    <ButtonComponent onClick={handle_Delete} type_button="warning">Eliminar</ButtonComponent>
                </div>
                <ButtonComponent onClick={handle_filter_productos}><span className="text-center w-full">Filtrar</span></ButtonComponent>
            </div>
        </div>
    )
}