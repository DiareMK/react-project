import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './MainLayout.module.css';

const MainLayout = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <NavLink 
          to="/" 
          end 
          className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
        >
          Головна
        </NavLink>
        <NavLink 
          to="/feed" 
          className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
        >
          Стрічка
        </NavLink>
        <NavLink 
          to="/profile" 
          className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
        >
          Профіль
        </NavLink>
      </nav>
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
