import { Navigate } from "react-router-dom";
import { Button } from "../../ui/button/button"
import styles from './login.module.css';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { eyeIcon, formSchema } from "../../utils";
import { useState } from "react";

    interface IFormInput {
        name: string;
        email: string;
        password: string;
        confirm: string;
      }

export const Login = () => {
    const { register, handleSubmit, reset, formState: { errors }} = useForm({ resolver: yupResolver(formSchema) });
    const [passwordShow, setPasswordShow] = useState(false);
    const [confirmShow, setConfirmShow] = useState(false);

    const togglePasswordHide = () => {
        setPasswordShow(!passwordShow);
      };

    const toggleConfirmHide = () => {
        setConfirmShow(!confirmShow);
      };
    const redirectLogin = () => {
        return <Navigate to='/' replace/>
    }

    const onSubmit = (data: IFormInput) => {
        console.log(data);
        reset();
        //поставить фейковые данные в сессию и сделать авторизацию
        redirectLogin();
    }

    return (
        <section className={styles.wrapper}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <ul className={styles.inputList}>Регистрация
                    <label>Имя</label>
                    <input {...register('name')} placeholder={'Артур'}/>
                    {errors.name && <span>{errors.name.message}</span>}

                    <label>Электронная почта</label>
                    <input {...register('email')} placeholder={'example@mail.ru'}/>
                    {errors.email && <span>{errors.email.message}</span>}

                    <label>Пароль</label>
                    <input {...register('password')} type={passwordShow ? "text" : "password"}/>
                    <div onClick={togglePasswordHide}>
                        <img src={eyeIcon} alt='Иконка для отображения и скрытия пароля'/>
                    </div>
                    {errors.password && <span>{errors.password.message}</span>}

                    <label>Подтвердите пароль</label>
                    <input {...register('confirm')} type={confirmShow ? "text" : "password"}/>
                    <div onClick={toggleConfirmHide}>
                        <img src={eyeIcon} alt='Иконка для отображения и скрытия пароля'/>
                    </div>
                    {errors.confirm && <span>{errors.confirm.message}</span>}
                </ul>
                    <Button onClick={onSubmit}/>
                </form>
        </section>
    )
}