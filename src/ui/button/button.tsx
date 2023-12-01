import { FormEvent } from "react"

interface ButtonProps {
    onClick: (event: FormEvent<HTMLButtonElement>) => void
}

export const Button = ({onClick}:ButtonProps) => {
    return (
        <button onSubmit={onClick}>Сохранить</button>
    )
}