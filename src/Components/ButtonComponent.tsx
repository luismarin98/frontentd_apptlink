import { ButtonHTMLAttributes, ReactNode, useEffect, useState } from "react"

interface IPropsButtonComponent extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    type_button?: 'succes' | 'info' | 'warning' | 'disabled';
    align_text?: 'center' | 'start' | 'end' | 'justify' | 'right' | 'left';
}

export const ButtonComponent = (props: IPropsButtonComponent) => {
    const [color, setColor] = useState<string>('');
    const [textalign, setTextAlign] = useState<string>('');

    useEffect(() => {
        switch (props.align_text) {
            case 'center': setTextAlign('text-center');
                break;
            case 'start': setTextAlign('text-start');
                break;
            case 'end': setTextAlign('text-end');
                break;
            case 'justify': setTextAlign('text-justify');
                break;
            case 'right': setTextAlign('text-right');
                break;
            case 'left': setTextAlign('text-left');
                break;
            default: setTextAlign('text-center');
        }
        
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
            className={` py-1 px-2 rounded-lg ${color} ${textalign} text-white flex items-center justify-between gap-1 shadow-md shadow-neutral-700 hover:shadow-neutral-800 transition-all ease-in-out duration-150`}
            {...props}
        >
            {props.children}
        </button>
    );
}