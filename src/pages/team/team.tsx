import { useState } from "react";
import { Card } from "../../components/card/card";
import { useGetAllQuery } from "../../services/users-api";
import { arrowIcon } from "../../utils";
import style from './team.module.css';
import { UserType } from "./types";

export const Team = () => {
    const { data, isLoading, error } = useGetAllQuery('');
    const [startIndex ] = useState<number>(0);
    const [perPage] = useState<number>(4); //на фейковом сервере маловато записей, поэтому
    //делаю значение меньше, чем в макете чтобы показать пагинацию.
    const [lastIndex, setLast] = useState<number>(perPage);

    const paginateCards = (start: number, end: number) => {
        return data.data.slice(start, end).map((user: UserType) => {
            return (
                <li className={style.listItem} key={user.id}>
                    <Card 
                    id={user.id}
                    avatar={user.avatar} 
                    first_name={user.first_name} 
                    last_name={user.last_name}/>
                </li>
            )}
        );
    };

    const handleClick = () => {
        setLast(lastIndex + perPage);
    }

    return (
        <section className={style.wrapper}>
            {data && <>
                <ul className={style.list}>
                {paginateCards(startIndex, lastIndex)}
                </ul>
                {data.data.length - lastIndex > 0 && <button onClick={handleClick} className={style.button}>Показать еще
                    <img className={style.icon} src={arrowIcon} alt='иконка стрелочка вниз'/>
                </button>}
            </>}
            {isLoading && <h2>Загрузка...</h2>}
            {error && <h2>Что-то пошло не так, попробуйте позднее</h2>}
        </section>
    )
}