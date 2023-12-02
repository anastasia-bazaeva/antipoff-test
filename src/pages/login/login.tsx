import { Navigate } from "react-router-dom";
import { Button } from "../../ui/button/button"
import styles from './login.module.css';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { eyeIcon, formSchema } from "../../utils";
import { FormEvent, useState } from "react";
import { useAppDispatch } from "../../services/store";
import { setAuth } from "../../services/auth-store";
import { useRegisterMutation } from "../../services/users-api";

export interface IFormInput {
        name: string;
        email: string;
        password: string;
        confirm: string;
      }

export const Login = () => {
    const { register, handleSubmit, reset, formState: { errors }} = useForm({ resolver: yupResolver(formSchema) });
    const [passwordShow, setPasswordShow] = useState(false);
    const [confirmShow, setConfirmShow] = useState(false);
    const [auth, { isLoading }] = useRegisterMutation();
    const dispatch = useAppDispatch();

    const redirectLogin = () => {
        return <Navigate to='/' replace/>
    }

    const handleAdminLogin = async (data: IFormInput) => {
        try {
            // const user = await auth(data).unwrap(); Вместо этой строчки ниже моковые 
            //данные юзера для фейкового api
          const user = await auth({
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        }).unwrap();
          sessionStorage.setItem('auth_token', user.access_token);
          dispatch(setAuth());
          redirectLogin();
        } catch (err) {
          console.log({
            status: err,
            title: 'Error',
            description: 'Ошибка при попытке регистрации',
          });
        }
      };

    const togglePasswordHide = () => {
        setPasswordShow(!passwordShow);
      };

    const toggleConfirmHide = () => {
        setConfirmShow(!confirmShow);
      };

    const onSubmit = (data: IFormInput | FormEvent<HTMLButtonElement>) => {
        handleAdminLogin(data);
        reset();
    }

    return (
        <section className={styles.wrapper}>
            {isLoading ? <h1>Загрузка...</h1> 
            :<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <ul className={styles.inputList}>Регистрация
                    <li className={styles.inputElement}>
                        <label className={styles.label}>
                            Имя
                        </label>
                        <input className={!errors.name ? styles.inputField : `${styles.inputField} ${styles.invalidInput}`}
                        {...register('name')} placeholder={'Артур'}/>
                        {errors.name && <span className={styles.errorText}>{errors.name.message}</span>}
                    </li>

                    <li className={styles.inputElement}>
                        <label className={styles.label}>
                            Электронная почта
                        </label>
                        <input className={!errors.email ? styles.inputField : `${styles.inputField} ${styles.invalidInput}`}
                        {...register('email')} placeholder={'example@mail.ru'}/>
                        {errors.email && <span className={styles.errorText}>{errors.email.message}</span>}
                    </li>

                    <li className={styles.inputElement}>
                        <label className={styles.label}>
                            Пароль
                        </label>
                        <input className={!errors.password ? styles.inputField : `${styles.inputField} ${styles.invalidInput}`}
                        {...register('password')} placeholder={'******'} type={passwordShow ? 'text' : 'password'}/>
                        <div onClick={togglePasswordHide}>
                            <img className={styles.icon} src={eyeIcon} alt='Иконка для отображения и скрытия пароля'/>
                        </div>
                        {errors.password && <span className={styles.errorText}>{errors.password.message}</span>}
                    </li>
                    
                    <li className={styles.inputElement}>
                        <label className={styles.label}>
                            Подтвердите пароль
                        </label>
                        <input className={!errors.confirm ? styles.inputField : `${styles.inputField} ${styles.invalidInput}`}
                        {...register('confirm')} placeholder={'******'} type={confirmShow ? 'text' : 'password'}/>
                        <div onClick={toggleConfirmHide}>
                            <img className={styles.icon} src={eyeIcon} alt='Иконка для отображения и скрытия пароля'/>
                        </div>
                        {errors.confirm && <span className={styles.errorText}>{errors.confirm.message}</span>}

                    </li>
                </ul>
                    <Button isLoading={isLoading} text='Зарегистрироваться' onClick={onSubmit}/>
                </form>}
        </section>
    )
}