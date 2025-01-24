import { FC, useContext, MouseEvent, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import DashboardContext, { IDashboardContext } from './provider';
import { UsuarioType } from '../../Interfaces/UsuarioRequest';
import { ButtonComponent } from '../../Components/ButtonComponent';
import { jwtDecode } from 'jwt-decode';
import { ModalForm } from '../../Components/ModalForm';

interface PropsRoutes {
    name: string;
    clickEvent: (e: MouseEvent<HTMLButtonElement>) => void;
    icon: JSX.Element;
}

export const DASHBOARD_FEATURE: FC = () => {
    const { isOpen, setIsOpen, isOpenModal, setIsOpenModal, titleView, setTitleView } = useContext(DashboardContext) as IDashboardContext;
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState<UsuarioType | null>(null);
    let storedUser: string | null = localStorage.getItem('usuario');

    useEffect(() => {
        if (!storedUser) {
            navigate('/');
        } else {
            try {
                const usuario: UsuarioType | null = JSON.parse(jwtDecode(storedUser!).sub!);
                setUsuario(usuario);
            } catch (error) {
                console.error('Invalid token', error);
                navigate('/');
            }
        }
    }, []);

    const routes: PropsRoutes[] = [
        {
            icon: <span className="material-symbols-outlined">orders</span>,
            name: 'Pedidos',
            clickEvent: (e) => {
                e.preventDefault();
                navigate(`/dashboard/${usuario!.id}/pedido`);
                setTitleView('Catalogo de Pedidos');
            }
        },
        {
            icon: <span className="material-symbols-outlined">format_list_bulleted</span>,
            name: 'Producto',
            clickEvent: (e) => {
                e.preventDefault();
                navigate(`/dashboard/${usuario!.id}/producto`);
                setTitleView('Catalogo de Productos');
            }
        },
    ]

    const handleHideShowSide = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    }

    const handleLogout = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        localStorage.removeItem('usuario');
        navigate('/')
    }

    const handle_OpenModelNav = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsOpenModal(!isOpenModal);
    }

    return (
        <div className='w-full h-full flex items-center justify-center'>
            <div className='flex items-center justify-between flex-row h-full w-full'>
                <div className={`h-full ${isOpen ? 'w-40' : 'w-20'} p-2 md:flex hidden`}>
                    <div className='w-full h-full flex flex-col items-center bg-white rounded-md text-black'>
                        <div className='flex items-center justify-between p-1 flex-col h-full'>
                            <div className='flex items-center justify-between w-full p-2 flex-col'>
                                {
                                    isOpen && <p className='font-bold dancing-script text-2xl'>Facturador</p>
                                }
                                <ButtonComponent onClick={handleHideShowSide}><span className="material-symbols-outlined">menu_open</span></ButtonComponent>
                            </div>
                            <div className='h-full w-full flex flex-col justify-center items-center gap-2'>
                                {
                                    routes.map((data, i) => <ButtonComponent type_button='info' onClick={data.clickEvent} key={i}>{data.icon} <span className='w-full'>{isOpen && data.name}</span></ButtonComponent>)
                                }
                            </div>
                            <ButtonComponent onClick={handleLogout}>{isOpen && 'Logout'}<span className="material-symbols-outlined">logout</span></ButtonComponent>
                        </div>
                    </div>
                </div>
                <div className='h-full w-full flex flex-col gap-1'>
                    <div className='flex items-center justify-between p-2 flex-row-reverse'>
                        <div className='md:hidden flex gap-2 flex-col'>
                            <button onClick={handle_OpenModelNav} className="p-1 flex items-center justify-center bg-neutral-50 text-black rounded-md"><span className="material-symbols-outlined">menu_open</span></button>
                        </div>
                        <p className='font-bold uppercase'>{titleView}</p>
                    </div>
                    <Outlet />
                </div>
            </div>
            <ModalForm isOpen={isOpenModal} dialog_title='Menu' closePromise={() => setIsOpenModal(!isOpenModal)}>
                <div className='w-full h-full flex flex-col items-center justify-center gap-2'>
                    {
                        routes.map((data, i) => <ButtonComponent type_button='info' onClick={data.clickEvent} key={i}>{data.icon} <span className='w-full'>{data.name}</span></ButtonComponent>)
                    }
                    <ButtonComponent onClick={handleLogout}>Logout<span className="material-symbols-outlined">logout</span></ButtonComponent>
                </div>
            </ModalForm>
        </div>
    );
}