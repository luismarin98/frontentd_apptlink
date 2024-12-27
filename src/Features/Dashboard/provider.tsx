
import { createContext, ReactNode } from 'react';

export interface IDashboardContext { }

const DashboardContext = createContext({});

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
    const storage: IDashboardContext = {};
    return <DashboardContext.Provider value={storage}>{children}</DashboardContext.Provider>;
};

export default DashboardContext;