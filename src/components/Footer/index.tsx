import React from 'react';

import styles from './Footer.module.css';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as IconFacebook } from '../..//assets/icon-facebook.svg';
import { ReactComponent as IconInstagram } from '../..//assets/icon-instagram.svg';
import { ReactComponent as IconTwitter } from '../..//assets/icon-twitter.svg';

interface FooterProps { }

const Footer = (props: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.info}>
        <p>All rights reserved © Equalizer 2021</p>
        <p>Have any problems? Contact us via social media or email us at <strong>equalizer@example.com</strong></p>
      </div>
      <div className={styles.social}>
        <div className={styles.icon}><IconFacebook /></div>
        <div className={styles.icon}><IconInstagram /></div>
        <div className={styles.icon}><IconTwitter /></div>
      </div>
    </footer>
  );
};

export default Footer;