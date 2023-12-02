import { RouterProvider } from 'react-router-dom';

import { router } from './router';
import { useAppDispatch } from '../../services/store';
import { removeAuth, setAuth } from '../../services/auth-store';
import { useEffect } from 'react';

export const AppRoutes = () => {
  const dispatch = useAppDispatch();
  const token = sessionStorage.getItem('auth_token');
  const checkAuth = () => {
    return token ? dispatch(setAuth()) : dispatch(removeAuth());
  }

  useEffect(() => {
    checkAuth();
  }, [token])

  return <RouterProvider router={router} />;
};