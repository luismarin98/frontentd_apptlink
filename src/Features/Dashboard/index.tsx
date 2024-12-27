
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const DASHBOARD_FEATURE: FC = () => {
    return (
        <div className='w-full h-full flex items-center justify-center'>
            <div className='flex items-center justify-between flex-col h-full w-full'>
                <h1>Dashboard</h1>
                <div className='h-full w-full'><Outlet /></div>
            </div>
        </div>
    );
}