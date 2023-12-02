import styles from './button.module.css';

interface ButtonProps {
    text: string,
    isLoading: boolean,
    type: 'submit' | 'button',
}

export const Button = ({ isLoading, text, type }:ButtonProps) => {

    return (
        <button className={styles.button} disabled={isLoading ?? false} type={type}>{text}</button>
    )
}