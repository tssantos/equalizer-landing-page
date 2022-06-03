import React from 'react';

import styles from './Header.module.css';
import { ReactComponent as Logo } from '../../assets/logo.svg';

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  return (
    <header className={styles.header}>
      <Logo/>
    </header>
  );
}

export default Header;