import { ButtonHTMLAttributes, ReactNode, useEffect, useState } from "react"

interface IPropsButtonComponent extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    type_button?: 'succes' | 'info' | 'warning' | 'disabled';
}

export const ButtonComponent = (props: IPropsButtonComponent) => {
    const [color, setColor] = useState<string>();

    useEffect(() => {
        switch (props.type_button) {
            case 'succes': setColor('bg-green-700 hover:bg-green-600');
                break;
            case 'info': setColor('bg-blue-700 hover:bg-blue-600');
                break;
            case 'warning': setColor('bg-red-700 hover:bg-red-600');
                break;
            case 'disabled': setColor('');
                break;
            default: setColor('bg-blue-700 hover:bg-blue-600');
        }
    }, [props.type_button]);

    return (
        <button
            className={` py-1 px-2 rounded-lg ${color} text-white flex items-center justify-between gap-1 shadow-md shadow-neutral-700 hover:shadow-neutral-800 transition-all ease-in-out duration-150`}
            {...props}
        >
            {props.children}
        </button>
    );
}