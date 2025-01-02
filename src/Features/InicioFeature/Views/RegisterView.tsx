import { ChangeEvent, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { RegisterUserType } from "../../../Interfaces/UsuarioRequest";
import StartContext, { IStartContext } from "../provider";

export const REGISTER_VIEW = () => {
    const { register_usuario } = useContext(StartContext) as IStartContext;
    const [coincidence, setCoincidence] = useState<boolean>(false);
    const [check, setCheck] = useState<boolean>(false);

    const { register, getValues, handleSubmit } = useForm<RegisterUserType>();

    const handleCoincidence = (e: ChangeEvent<HTMLInputElement>) => e.target.value === getValues('password') && setCoincidence(!coincidence);
    const handleCheck = (e: ChangeEvent<HTMLInputElement>) => e.target.checked && setCheck(!check);

    const submitForm = handleSubmit(data => register_usuario(data));

    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="rounded-lg w-5/6 md:w-1/4 h-5/6 md:h-4/6 bg-blue-500">
                <div className="w-full h-full flex items-center justify-between flex-col bebas-neue-regular">
                    <div className="w-full h-full flex items-center justify-around flex-col">
                        <p className="text-2xl uppercase ">Registrate</p>
                        <form onSubmit={submitForm} className="w-full flex flex-col items-center justify-center gap-2">
                            <input type="text" placeholder="Nombre" {...register('nombre')} className="p-2 w-5/6 rounded-lg text-black" />
                            <input type="text" placeholder="Apellido" {...register('apellido')} className="p-2 w-5/6 rounded-lg text-black" />
                            <input type="email" placeholder="Email" {...register('email')} className="p-2 w-5/6 rounded-lg text-black" />
                            <input type="password" {...register('password')} placeholder="Contraseña" className="p-2 w-5/6 rounded-lg text-black" />
                            <input type="password" onChange={handleCoincidence} placeholder="Confirmar Contraseña" className="p-2 w-5/6 rounded-lg text-black" />
                            <div className="flex items-center gap-1 justify-center p-2">
                                <input onChange={handleCheck} type="checkbox" className="w-5 h-5" />
                                <p className="text-white">Acepto los términos y condiciones</p>
                            </div>
                            <button type="submit" className="w-3/4 h-10 mt-5 p-2 rounded-lg bg-blue-700 hover:bg-blue-600 text-white">Registrarse</button>
                        </form>
                        <div className="flex flex-col items-center justify-center gap-1 p-2">
                            <p className={`flex items-center gap-1 justify-center ${coincidence && 'text-green-500'}`}><span className="material-symbols-outlined">verified</span> Contraseñas coinciden</p>
                            <p className="flex items-center gap-1 justify-center"><span className="material-symbols-outlined">verified</span> Email Correcto</p>
                        </div>
                    </div>
                    <div className="p-1">
                        <p className="text-white">¿Ya tienes cuenta? - <Link to='/login' className="text-gray-300">Ingresar</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
};