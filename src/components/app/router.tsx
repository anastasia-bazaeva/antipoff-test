import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
  } from 'react-router-dom';
import { Team } from '../../pages/team/team';
import { Layout } from '../layout/layout';
import { User } from '../../pages/user/user';
import { Login } from '../../pages/login/login';
import { RoutesGroup } from './routes-group';

  export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
          <Route element={<RoutesGroup onlyUnauthorized />}>
            <Route path="/auth" index element={<Login />} />
          </Route>
        
         <Route element={<RoutesGroup privateRoutes />}>
            <Route path='/' element={<Layout />}>
              <Route index element={<Team />} />
              <Route path='/:id' element={<User />}/>
            </Route>
          </Route>
        </>
    )
  )