import { useGetOneByIdQuery } from '../../services/users-api';
import styles from './header.module.css';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { skipToken } from '@reduxjs/toolkit/query/react';
import { useAppDispatch } from '../../services/store';
import { removeAuth } from '../../services/auth-store';
import { backIcon, exitIcon } from '../../utils';

export const Header = () => {
    const navigate = useNavigate();
    const params = useParams();
    const { data: user } = useGetOneByIdQuery(params.id ?? skipToken);
    const dispatch = useAppDispatch();

    const exitHandler = () => {
        sessionStorage.removeItem('auth_token');
        dispatch(removeAuth());
        return <Navigate to='/auth' replace/>

    }

    const main = () => {
        return (
            <>
                <div className={styles.linkWrapper}>
                    <button className={styles.link} onClick={exitHandler}>Выход</button>
                    <div className={styles.mobLink} onClick={exitHandler}><img src={exitIcon} alt='Иконка выхода'/></div>
                </div>
                <h1 className={styles.title}>Наша команда</h1>
                <h2 className={styles.text}>Это опытные специалисты, хорошо разбирающиеся во всех задачах, 
                    которые ложатся на их плечи, и умеющие находить выход из любых, 
                    даже самых сложных ситуаций. </h2>
            </>
        )
    }
    const userPage = () => {
        return (
            user && <>
                <div className={styles.linkWrapper}>
                    <button className={styles.link} onClick={exitHandler}>Выход</button>
                    <button onClick={() => navigate(-1)} className={styles.link}>Назад</button>
                    <div className={styles.mobLink} onClick={exitHandler}><img src={exitIcon} alt='Иконка выхода'/></div>
                    <div className={`${styles.mobLink} ${styles.backLink}`} onClick={() => navigate(-1)}><img src={backIcon} alt='Иконка стрелки назад'/></div>
                </div>
                <div className={styles.userBar}>
                    <img className={styles.avatar} src={user.data.avatar} alt="Фотография сотрудника"/>
                    <div className={styles.descriptionPanel}>
                        <h1 className={styles.title}>{`${user.data.first_name} ${user.data.last_name}`}</h1>
                        <p className={styles.role}>Партнер</p>
                    </div>
                </div>
            </>
        )
    }

    return (
        <header className={styles.wrapper}>
            {params?.id ? userPage() : main()}
        </header>
    )
}