import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
  } from 'react-router-dom';
import { Team } from '../../pages/team/team';
import { Layout } from '../layout/layout';
import { User } from '../../pages/user/user';

  export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
          <Route path='/' element={<Layout />}>
            <Route index element={<Team />} />
            <Route path='/:id' element={<User />}/>
          </Route>
        </>
    )
  )