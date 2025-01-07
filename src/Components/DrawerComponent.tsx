import { ReactNode } from "react";

interface DrawerComponentProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
}

export const DrawerComponent = ({ isOpen, onClose, title, children }: DrawerComponentProps) => {
    return (
        <div className={`fixed inset-0 z-50 overflow-hidden ${isOpen ? 'block' : 'hidden'}`}>
            <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-50' : 'opacity-0'}`} onClick={onClose}></div>
            <div className={`absolute inset-y-0 right-0 p-2 max-w-full flex transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="w-screen max-w-md ">
                    <div className="h-full flex flex-col gap-1 rounded-md bg-neutral-800 shadow-xl overflow-scroll overflow-y-hidden overflow-x-hidden">
                        <div className="px-4 py-6 text-white flex justify-between items-center">
                            <h2 className="text-lg font-medium">{title}</h2>
                            <button onClick={onClose} className="text-white">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-5 w-full h-full">{children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};