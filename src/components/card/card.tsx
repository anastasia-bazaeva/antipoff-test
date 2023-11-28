import { Link } from 'react-router-dom';
import styles from './card.module.css';
import { useState, useEffect } from 'react';

interface CardProps {
    avatar: string,
    id: number,
    first_name: string,
    last_name: string,
}

export const Card = ({ avatar, first_name, last_name, id }:CardProps) => {
    const [isLiked, setIsLiked] = useState(false);
    const toggleLike = () => {
        setIsLiked(!isLiked);
        if(!isLiked){
            localStorage.setItem(`${id}`, 'liked');
        } else {
            localStorage.removeItem(`${id}`);
        }
    }

    useEffect(() => {
       if(localStorage.getItem(`${id}`)) setIsLiked(true);
    },[])

    return (
        <div className={styles.wrapper}>
            <Link to={`/${id}`}>
                <img className={styles.avatar} src={avatar} alt='Фотография сотрудника' />
                <h2 className={styles.title}>{`${first_name} ${last_name}`}</h2>
            </Link>
            <div className={styles.btnPanel}><button onClick={toggleLike} className={isLiked ? `${styles.button} ${styles.button_active}` : styles.button}></button></div>
        </div>
    )
}