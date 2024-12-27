import { createContext, ReactNode } from "react";

export interface IStartContext { }

const StartContext = createContext({});

export const StartProvider = ({ children }: { children: ReactNode }) => {
    const storage: IStartContext = {};
    
    return <StartContext.Provider value={storage}>{children}</StartContext.Provider>
};

export default StartContext;