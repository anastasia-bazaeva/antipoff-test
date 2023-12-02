import styles from './user-header.module.css';
import { backIcon, exitIcon } from '../../utils';
import { useNavigate } from 'react-router-dom';
import { UserType } from '../../pages/team/types';

interface UserHeaderProps {
    user: {
        data: UserType
    },
    exitHandler: () => void,
}

export const UserHeader = ({ user, exitHandler }:UserHeaderProps) => {
    const navigate = useNavigate();
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