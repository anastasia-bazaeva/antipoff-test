import { Card } from "../../components/card/card";
import { useGetAllQuery } from "../../services/users-api";
import { arrowIcon } from "../../utils";
import style from './team.module.css';

export const Team = () => {
    const { data, isLoading, error } = useGetAllQuery('');

    return (
        <section className={style.wrapper}>
            {data && <><ul className={style.list}>
            {data.data.map((user) => {
                return (
                    <li className={style.listItem} key={user.id}>
                        <Card 
                        id={user.id}
                        avatar={user.avatar} 
                        first_name={user.first_name} 
                        last_name={user.last_name}/>
                    </li>
                )
            })}
            </ul>
            <button className={style.button}>Показать еще<img className={style.icon} src={arrowIcon} alt='иконка стрелочка вниз'/></button></>}
            {isLoading && <h2>Загрузка...</h2>}
            {error && <h2>Что-то пошло не так, попробуйте позднее</h2>}
        </section>
    )
}