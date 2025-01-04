import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface IPropsInputComponent extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    register: UseFormRegisterReturn;
}

export const InputComponent = ({ label, register, ...props }: IPropsInputComponent) => {
    return (
        <div className="form-group w-full flex gap-2 flex-row">
            <label htmlFor={props.id} className="w-full text-center">{label}</label>
            <input className="form-control w-full px-20 rounded-md" {...register} {...props} />
        </div>
    );
};
