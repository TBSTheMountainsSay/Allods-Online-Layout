import React from 'react';
import styles from './MenuItem.module.scss';
import clsx from 'clsx';

const MenuItem = ({ img, title, text1, text2 }) => {
  return (
    <div className={styles.menu_item}>
      <img className={styles.img} src={img} alt={'icon'} />
      <div className={clsx(styles.text, styles.title)}>{title}</div>
      <div className={styles.text}>{text1}</div>
      <div className={styles.text}>{text2}</div>
    </div>
  );
};

export default MenuItem;
