import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthUsuarioType } from "../../../Interfaces/AuthRequest";
import { useContext } from "react";
import StartContext, { IStartContext } from "../provider";

export const LOGIN_VIEW = () => {

    const { register, handleSubmit } = useForm<AuthUsuarioType>();
    const { login, loading } = useContext(StartContext) as IStartContext;

    const submitAuth = handleSubmit(data => login(data));

    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="rounded-lg w-5/6 md:w-1/4 h-1/2 md:h-1/2 bg-blue-500">
                <div className="w-full h-full flex items-center justify-between flex-col bebas-neue-regular">
                    <div className="w-full h-full flex items-center justify-center flex-col">
                        <p className="text-2xl uppercase ">Acceder</p>
                        <form className="w-full flex flex-col items-center justify-center" onSubmit={submitAuth}>
                            <input type="text" placeholder="Usuario" className="w-3/4 h-10 mt-5 p-2 rounded-lg text-black" {...register("email")} />
                            <input type="password" placeholder="Contraseña" className="w-3/4 h-10 mt-5 p-2 rounded-lg text-black" {...register("password")} />
                            <button type="submit" disabled={loading} className="w-3/4 h-10 mt-5 p-2 rounded-lg bg-blue-700 hover:bg-blue-600 text-white">Ingresar</button>
                        </form>
                    </div>
                    <div className="p-1">
                        <p className="text-white">¿No tienes cuenta? - <Link to='/registro' className="text-gray-300">Registrate</Link></p>
                        <p className="text-white">¿Te has olvidado la contraseña? - <Link to='/restore' className="text-gray-300">Restaurala</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}