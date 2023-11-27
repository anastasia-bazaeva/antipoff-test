import styles from './header.module.css'

export const Header = () => {
    return (
        <header className={styles.wrapper}>
            <button />
            <h1 className={styles.title}>Наша команда</h1>
            <h2 className={styles.text}>Это опытные специалисты, хорошо разбирающиеся во всех задачах, 
                которые ложатся на их плечи, и умеющие находить выход из любых, 
                даже самых сложных ситуаций. </h2>
        </header>
    )
}