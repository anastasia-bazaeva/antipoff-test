import { FormEvent } from "react";
import styles from './button.module.css';

interface ButtonProps {
    text: string,
    isLoading: boolean,
    onClick: (event: FormEvent<HTMLButtonElement>) => void
}

export const Button = ({ isLoading, text, onClick }:ButtonProps) => {

    return (
        <button className={styles.button} disabled={isLoading ?? false} onSubmit={onClick}>{text}</button>
    )
}