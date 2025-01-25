import { useForm } from "react-hook-form"
import { InputComponent } from "../../../Components/InputComponent";
import { ButtonComponent } from "../../../Components/ButtonComponent";
import { Link } from "react-router-dom";
import { useContext } from "react";
import StartContext, { IStartContext } from "../provider";

export const SEN_EMAIL_RECOVER_VIEW = () => {
    const { get_recover } = useContext(StartContext) as IStartContext;
    const { handleSubmit, register } = useForm<{ email: string }>();

    const submit = handleSubmit((data) => {
        get_recover(data.email);
    });

    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="rounded-lg w-5/6 md:w-1/4 h-1/2 bg-blue-500 flex items-center justify-between flex-col bebas-neue-regular">
                <div className="w-full h-full flex items-center justify-center flex-col gap-2">
                    <p className="text-2xl uppercase">Correo de recuperacion</p>
                    <form onSubmit={submit} className="w-full flex flex-col items-center justify-center gap-2 p-2">
                        <InputComponent label="Email" type="email" register={register('email')} />
                        <ButtonComponent type="submit">Restablecer</ButtonComponent>
                    </form>
                </div>
                <div className="p-1">
                    <p className="text-white">¿Ya tienes las credenciales? - <Link to='/login' className="text-gray-300">Ingresa</Link></p>
                </div>
            </div>
        </div>
    )
}