import { useGetOneByIdQuery } from '../../services/users-api';
import styles from './header.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { skipToken } from '@reduxjs/toolkit/query/react';

export const Header = () => {
    const navigate = useNavigate();
    const params = useParams();
    const { data: user } = useGetOneByIdQuery(params.id ?? skipToken);

    const main = () => {
        return (
            <>
                <div className={styles.linkWrapper}><button className={styles.link}>Выход</button></div>
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
                    <button className={styles.link}>Выход</button>
                    <button onClick={() => navigate(-1)} className={styles.link}>Назад</button>
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