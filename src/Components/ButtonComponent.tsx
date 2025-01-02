import { ButtonHTMLAttributes, ReactNode } from "react"

interface IPropsButtonComponent extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

export const ButtonComponent = (props: IPropsButtonComponent) => {
    return <button className="w-3/4 h-10 mt-5 py-1 px-6 rounded-lg bg-blue-700 hover:bg-blue-600 text-white flex items-center justify-center gap-1" {...props}>{props.children}</button>
}