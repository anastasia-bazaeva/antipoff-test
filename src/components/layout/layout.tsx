import { Outlet } from 'react-router-dom';
import { PageLayout } from '../pagelayout/pagelayout';
import { Header } from '../header/header';

export function Layout() {
  return (
    <>
      <Header />
      <main>
        <PageLayout content={<Outlet />} />
      </main>
    </>
  );
}