import React from 'react';
import styles from './Header.module.scss';
import clsx from 'clsx';
import char1 from '../../img/MafiaCostume_2022 2.png';
import char2 from '../../img/MafiaCostume_2022 3.png';
import logo from '../../img/logo.png';
import boxes from '../../img/boxes.png';
import boxes_glow from '../../img/glow 1.png';
import Glow from '../../components/Glow/Glow';

const Header = ({}) => {
  return (
    <div className={styles.header}>
      <div className={styles.blended} />
      <div className={clsx(styles.blended, styles.blended_right)} />
      <div className={styles.blended_bottom} />
      <div className={styles.logo_wrapper}>
        <img className={styles.logo} src={logo} alt={'logo'} />
      </div>
      <div className={styles.boxes_wrapper}>
        <img className={styles.boxes} src={boxes} alt={'boxes'} />
        <img className={styles.boxes_glow} src={boxes_glow} alt={'glow'} />
      </div>
      <img
        className={clsx(styles.char, styles.char1)}
        src={char1}
        alt={'character1'}
      />
      <img
        className={clsx(styles.char, styles.char2)}
        src={char2}
        alt={'character2'}
      />
      <div className={clsx(styles.text, styles.title)}>
        КОЛЛЕКЦИОННЫЕ ИЗДАНИЯ
      </div>
      <div className={clsx(styles.text, styles.subtitle)}>
        Побеждайте легко, побеждайте стильно с новыми коллекционными изданиями
        «Аллодов Онлайн»!
      </div>
      <Glow />
    </div>
  );
};

export default Header;
