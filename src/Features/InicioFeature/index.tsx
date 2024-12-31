import { Link, Outlet, useNavigate } from "react-router-dom";
import { MouseEvent, useContext } from "react";
import StartContext, { IStartContext } from "./provider";
import { ModalForm } from "../../Components/ModalForm";

interface RoutesModel {
    name: string;
    icon: JSX.Element;
    clickEvent?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const START_FEATURE = () => {

    const navigate = useNavigate();
    const { isOpen, setIsOpen } = useContext(StartContext) as IStartContext;

    const routes: RoutesModel[] = [
        {
            name: 'Inicio',
            icon: <span className="material-symbols-outlined">home</span>,
            clickEvent: (e) => navigate('/')
        },
        {
            name: "Acceder",
            icon: <span className="material-symbols-outlined">login</span>,
            clickEvent: (e) => navigate('/login')
        }
    ]

    const handle_OpenModelNav = () => setIsOpen(!isOpen)

    return (
        <div className="container w-full h-full flex justify-center items-center flex-col">
            <div className="flex w-full justify-between p-2 items-center">
                <Link to='/' className="text-3xl dancing-script">Facturador</Link>
                <div className="hidden md:flex flex-row items-center justify-center gap-2">
                    {
                        routes.map((route, index) => (
                            <button onClick={route.clickEvent} key={index} className="transition duration-100 ease-in-out hover:scale-105 p-2 cursor-pointer hover:bg-neutral-600 rounded-lg flex flex-row justify-center items-center gap-1">{route.icon}<p>{route.name}</p></button>
                        ))
                    }
                </div>
                <div className="md:hidden flex gap-2 flex-col">
                    <button onClick={handle_OpenModelNav} className="p-1 flex items-center justify-center bg-neutral-50 text-black rounded-md"><span className="material-symbols-outlined">menu_open</span></button>
                    <ModalForm isOpen={isOpen} closePromise={handle_OpenModelNav} dialog_title="Navegacion">
                        <div className="w-full h-full flex flex-col gap-1 p-3">
                            {
                                routes.map((data, i) => <button onClick={data.clickEvent} className="bg-neutral-800 text-white dark:bg-white dark:text-black rounded-md px-6 py-1 hover:scale-105 transition ease-in duration-100" key={i}>{data.name}</button>)
                            }
                        </div>
                    </ModalForm>
                </div>
            </div>
            <div className="w-full h-full"><Outlet /></div>
        </div>
    )
}