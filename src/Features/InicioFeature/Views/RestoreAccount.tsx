import { Link } from "react-router-dom";

export const RESTORE_ACCOUNT_VIEW = () => {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="rounded-lg w-5/6 md:w-1/4 h-1/2 bg-blue-500">
                <div className="w-full h-full flex items-center justify-between flex-col bebas-neue-regular">
                    <div className="w-full h-full flex items-center justify-center flex-col">
                        <p className="text-2xl uppercase">recuperar cuenta</p>
                        <form className="w-full flex flex-col items-center justify-center gap-2">
                            <p className="w-5/6 p-2 text-justify">Por favor, introduce el codigo de verificacion que se envio previamente al correo electronico.</p>
                            <input type="email" placeholder="Email" className="w-3/4 h-10 mt-5 p-2 rounded-lg text-black" />
                            <button type="submit" className="w-3/4 h-10 mt-5 p-2 rounded-lg bg-blue-700 hover:bg-blue-600 text-white">Enviar</button>
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