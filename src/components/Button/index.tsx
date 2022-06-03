import React from 'react';

import styles from './Button.module.css';
import { ReactComponent as IconAndroid } from '../../assets/icon-android.svg';
import { ReactComponent as IconIOS } from '../../assets/icon-apple.svg';


type ButtonVariant = 'ios' | 'android';

interface ButtonProps {
  variant: ButtonVariant;
}

const Button = (props: ButtonProps) => {
  return (
    <div className={`${styles.button} ${styles[props.variant]}`}>
      {props.variant === 'ios' && <><IconIOS/><p>iOS Download</p></>}
      {props.variant === 'android' && <><IconAndroid/><p>Android Download</p></>}
    </div>
  );
}

export default Button;