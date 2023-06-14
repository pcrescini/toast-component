import React from 'react';

import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.wrapper}>
      <p>
        This project is from{' '}
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://joyofreact.com'
        >
          The Joy of React
        </a>
        , a comprehensive React.js course by Josuha Comeau.
      </p>
      <p>© 2022-present. All rights reserved.</p>
    </footer>
  );
}

export default Footer;