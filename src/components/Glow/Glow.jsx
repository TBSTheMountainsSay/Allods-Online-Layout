import React from 'react';
import styles from './Glow.module.scss';
import glow from '../../img/BLUE GLOW 3.png';

const Glow = ({}) => {
  return (
    <div className={styles.glow}>
      <img className={styles.glow_text} src={glow} alt={'glow'} />
    </div>
  );
};

export default Glow;
