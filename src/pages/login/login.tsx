import { Navigate } from "react-router-dom";
import { useForm } from "../../hooks/use-form";
import { Button } from "../../ui/button/button"
import { Input, InputType } from "../../ui/input/input"
import { FormEvent } from "react";
import styles from './login.module.css';

export const Login = () => {
    const {values, handleChange} = useForm({name: '', email: '', password: '', confirm: ''});
    const redirectLogin = () => {
        return <Navigate to='/' replace/>
    }

    const onRegister = (e: SubmitEvent | FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //поставить фейковые данные в сессию и сделать авторизацию
        redirectLogin();
    }

    return (
        <section className={styles.wrapper}>
            <form className={styles.form} onSubmit={onRegister}>
                <ul className={styles.inputList}>Регистрация
                    <Input 
                    type={InputType.name}
                    onChange={handleChange}
                    name={'name'}
                    value={values.name || ''}
                    label={'Имя'}
                    placeholder={'Артур'}/>
                    <Input 
                    type={InputType.email}
                    name={'email'}
                    onChange={handleChange}
                    value={values.email || ''}
                    label={'Электронная почта'}
                    placeholder={'example@mail.ru'}/>
                    <Input 
                    type={InputType.password}
                    name={'password'}
                    onChange={handleChange}
                    value={values.password || ''}
                    label={'Пароль'}
                    placeholder={''}/>
                    <Input 
                    type={InputType.password}
                    name={'confirm'}
                    onChange={handleChange}
                    value={values.confirm || ''}
                    label={'Подтвердите пароль'}
                    placeholder={''}/>
                </ul>
                <Button />
            </form>
        </section>
    )
}