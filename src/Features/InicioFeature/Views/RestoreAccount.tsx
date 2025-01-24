import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import StartContext, { IStartContext } from "../provider";
import { set, useForm } from "react-hook-form";
import { NewPasswordType } from "../../../Interfaces/UsuarioRequest";
import { InputComponent } from "../../../Components/InputComponent";
import { ButtonComponent } from "../../../Components/ButtonComponent";

export const RESTORE_ACCOUNT_VIEW = () => {
    const { email } = useContext(StartContext) as IStartContext;
    const { handleSubmit, register, setValue } = useForm<NewPasswordType>();

    useEffect(() => { if (email) setValue('email', email) }, [email]);

    const submit = handleSubmit((data) => {
        if (data.new_password === data.repeat_password) {
            console.log('Restableciendo contraseña');
        } else {
            console.error('Las contraseñas no coinciden');
        }
    });

    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="rounded-lg w-5/6 md:w-1/4 h-1/2 bg-blue-500">
                <div className="w-full h-full flex items-center justify-between flex-col bebas-neue-regular">
                    <div className="w-full h-full flex items-center justify-center flex-col">
                        <p className="text-2xl uppercase">Recuperar Contraseña</p>
                        <form onSubmit={submit} className="w-full flex flex-col items-center justify-center gap-2">
                            <InputComponent label="Nueva contraseña" type="password" register={register('new_password')} />
                            <InputComponent label="Repetir contraseña" type="password" register={register('repeat_password')} />
                            <ButtonComponent type="submit">Restablecer</ButtonComponent>
                        </form>
                    </div>
                    <div className="p-1">
                        <p className="text-white">¿Ya tienes las credenciales? - <Link to='/login' className="text-gray-300">Ingresa</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}