import { useGetOneByIdQuery } from '../../services/users-api';
import styles from './header.module.css';
import { Navigate, useParams } from 'react-router-dom';
import { skipToken } from '@reduxjs/toolkit/query/react';
import { useAppDispatch } from '../../services/store';
import { removeAuth } from '../../services/auth-store';
import { MainHeader } from '../main-header/main-header';
import { UserHeader } from '../user-header/user-header';

export const Header = () => {
    const params = useParams();
    const { data: user } = useGetOneByIdQuery(params.id ?? skipToken);
    const dispatch = useAppDispatch();

    const exitHandler = () => {
        sessionStorage.removeItem('auth_token');
        dispatch(removeAuth());
        return <Navigate to='/auth' replace/>
    }

    return (
        <header className={styles.wrapper}>
           {params?.id ? <UserHeader user={user} exitHandler={exitHandler}/> : <MainHeader exitHandler={exitHandler}/>}
        </header>
    )
}