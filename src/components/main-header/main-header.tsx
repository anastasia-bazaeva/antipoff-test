import styles from './main-header.module.css';
import { exitIcon } from '../../utils';

interface mainHeaderProps {
    exitHandler: () => void,
}

export const MainHeader = ({ exitHandler }:mainHeaderProps) => {
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