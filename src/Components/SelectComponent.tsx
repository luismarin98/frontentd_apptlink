import { SelectHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface IPropsSelectComponent extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    register: UseFormRegisterReturn;
}

interface IPropsOptionComponent extends SelectHTMLAttributes<HTMLOptionElement> {
    label: string;
}

export const SELECT_COMPONENT = ({ label, register, children, ...props }: IPropsSelectComponent) => {
    return (
        <div className="form-group w-full flex gap-2 flex-row">
            <label htmlFor={props.id} className="w-1/2 text-center">{label}</label>
            <select className="form-control w-full rounded-md text-black" {...register} {...props}>
                {children}
            </select>
        </div>
    );
};

export const OPTION_COMPONENT = ({ label, ...props }: IPropsOptionComponent) => {
    return (
        <option {...props}>{label}</option>
    );
};