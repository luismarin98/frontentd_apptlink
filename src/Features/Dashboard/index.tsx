import { FC, useContext, MouseEvent } from 'react';
import { Outlet } from 'react-router-dom';
import DashboardContext, { IDashboardContext } from './provider';

export const DASHBOARD_FEATURE: FC = () => {
    const { isOpen, setIsOpen } = useContext(DashboardContext) as IDashboardContext;

    const handleHideShowSide = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    }

    const handleLogout = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        localStorage.removeItem('usuario')
    }

    return (
        <div className='w-full h-full flex items-center justify-center'>
            <div className='flex items-center justify-between flex-row h-full w-full'>
                <div className={`h-full ${isOpen ? 'w-40' : 'w-20'} p-2`}>
                    <div className='w-full h-full flex flex-col items-center bg-white rounded-md text-black'>
                        <div className='flex items-center justify-between p-1 flex-col h-full'>
                            <button onClick={handleHideShowSide} className='p-1 flex items-center justify-center flex-row text-white bg-neutral-800 rounded-md'>
                                <span className="material-symbols-outlined">menu_open</span>
                            </button>
                            <div className='h-full'>

                            </div>
                            <button onClick={handleLogout} className='p-1 flex items-center justify-center text-white bg-neutral-800 rounded-md'>
                                <span className="material-symbols-outlined">logout</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='h-full w-full'><Outlet /></div>
            </div>
        </div>
    );
}