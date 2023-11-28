import { Outlet } from 'react-router-dom';
import { PageLayout } from '../pagelayout/pagelayout';
import { Header } from '../header/header';
import styles from './layout.module.css';

export function Layout() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <PageLayout content={<Outlet />} />
      </main>
    </>
  );
}