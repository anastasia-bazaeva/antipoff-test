import { useParams, Link } from 'react-router-dom';
import styles from './user.module.css';
import { useGetOneByIdQuery } from '../../services/users-api';
import { mailIcon, phoneIcon } from '../../utils';

export const User = () => {
    const params = useParams();
    const { data: user } = useGetOneByIdQuery(params.id);

    return (
        <section className={styles.wrapper}>
            {user && <>
            <article>
                <p className={styles.paragrath}>Клиенты видят в нем эксперта по вопросам разработки комплексных решений 
                    финансовых продуктов, включая такие аспекты, как организационная структура, 
                    процессы, аналитика и ИТ-компоненты. Он помогает клиентам лучше понимать структуру 
                    рисков их бизнеса, улучшать процессы за счет применения новейших технологий и 
                    увеличивать продажи, используя самые современные аналитические инструменты.</p>
                <p className={styles.paragrath}>В работе с клиентами недостаточно просто решить конкретную проблему или помочь справиться 
                    с трудностями. Не менее важно уделять внимание обмену знаниями: "Один из самых позитивных 
                    моментов — это осознание того, что ты помог клиенту перейти на совершенно новый уровень 
                    компетентности, уверенность в том, что после окончания проекта у клиента есть все 
                    необходимое, чтобы дальше развиваться самостоятельно"</p>
                <p className={styles.paragrath}>Помимо разнообразных проектов для клиентов финансового сектора, Сорин ведет активную 
                    предпринимательскую деятельность. Он является совладельцем сети клиник эстетической 
                    медицины в Швейцарии, предлагающей инновационный подход к красоте, а также 
                    инвестором других бизнес-проектов.</p>
            </article>
            <div className={styles.contactsBar}>
                <Link className={styles.contact} to='tel:+71234567890'>
                    <img className={styles.icon} src={phoneIcon} alt='иконка телефона'/>+7 (123) 456-78-90
                </Link>
                <Link className={styles.contact} to={`mailto:${user.data.email}`}>
                    <img className={styles.icon} src={mailIcon} alt='иконка почтового конверта'/>{user.data.email}
                </Link>
            </div></>} 
        </section>
    )
}