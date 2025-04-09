import React from 'react';
import styles from '../styles/Header.module.css';
import HeaderImg from '../assets/HeaderCristalBlue.png';
import { Home, Map, Ticket, Phone, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img src={HeaderImg} alt="Cristal Blue" className={styles.logo} />
        </div>
        <nav className={styles.nav}>
        <Link to="#" className={styles.link}>
         <Home size={18} style={{ marginRight: '8px' }} /> Home
        </Link>

        <Link to="#" className={styles.link}>
          <Map size={18} style={{ marginRight: '8px' }} /> Rotas
        </Link>

        <Link to="#" className={styles.link}>
          <Ticket size={18} style={{ marginRight: '8px' }} /> Comprar
        </Link>

        <Link to="/contato" className={styles.link}>
          <Phone size={18} style={{ marginRight: '8px' }} /> Contato
        </Link>

        <Link to="/login" className={styles.button}>
          <LogIn size={18} style={{ marginRight: '8px' }} /> Entrar
        </Link>

        </nav>
      </div>
    </header>
  );
};

export default Header;
