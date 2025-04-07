import React from 'react';
import styles from '../styles/Header.module.css';
import HeaderImg from '../assets/HeaderCristalBlue.png';
import { Home, Map, Ticket, Phone, LogIn } from 'lucide-react';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img src={HeaderImg} alt="Cristal Blue" className={styles.logo} />
        </div>
        <nav className={styles.nav}>
          <a href="#" className={styles.link}>
            <Home size={18} style={{ marginRight: '8px' }} /> Home
          </a>
          <a href="#" className={styles.link}>
            <Map size={18} style={{ marginRight: '8px' }} /> Rotas
          </a>
          <a href="#" className={styles.link}>
            <Ticket size={18} style={{ marginRight: '8px' }} /> Comprar
          </a>
          <a href="#" className={styles.link}>
            <Phone size={18} style={{ marginRight: '8px' }} /> Contato
          </a>
          <button className={styles.button}>
            <LogIn size={18} style={{ marginRight: '8px' }} /> Entrar
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
