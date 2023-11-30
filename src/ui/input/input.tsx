import { ChangeEvent } from "react"

export enum InputType {
    name = 'name',
    email = 'email',
    password = 'password',
}

interface InputProps {
    name: string,
    value: string,
    label: string,
    type: InputType,
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
}

export const Input = ({ name, value, label, type, placeholder, onChange }: InputProps) => {
    
    return (
        <li>
            <label htmlFor={name}>
                {label}
            </label>
            <input 
            name={name}
            id={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}></input>
        </li>
    )
}