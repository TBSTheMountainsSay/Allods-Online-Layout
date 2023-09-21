import React from 'react';
import styles from './Main.module.scss';
import vito from '../../img/Vito 1.png';
import Glow from '../../components/Glow/Glow';
import TableSubTitle from '../../components/TableSubTitle/TableSubTitle';
import MenuItem from '../../components/MenuItem/MenuItem';
import watch from '../../img/watch.png';
import toolbox from '../../img/toolbox.png';
import fragile from '../../img/fragile.png';
import bigSymbol from '../../img/bigSymbol.png';
import mana from '../../img/Mana.png';
import module from '../../img/module.png';
import vito_table from '../../img/Vito.png';
import box from '../../img/box.png';
import glow from '../../img/Ellipse 1.png';

const Main = ({}) => {
  return (
    <div className={styles.main_wrapper}>
      <div className={styles.main}>
        <div className={styles.character}>
          <img className={styles.vito} src={vito} alt={'character'} />
          <img className={styles.ellipse} src={glow} alt={'glow'} />
        </div>
        <div className={styles.menu}>
          <div className={styles.title}>НАБОР «ПОСЫЛКА С КОНТРАБАНДОЙ»</div>
          <div className={styles.menu_container}>
            <div className={styles.menu_sub_titles}>
              <TableSubTitle text={'Бесплатные сервера'} />
              <TableSubTitle text={'Подписочный сервер'} />
            </div>
            <div className={styles.menu_items}>
              <MenuItem
                img={watch}
                title={'Игровое время'}
                text1={'-'}
                text2={'30 дней'}
              />
              <MenuItem
                img={toolbox}
                title={'Запечатанный набор инструментов'}
                text1={'1'}
                text2={'1'}
              />
              <MenuItem
                img={fragile}
                title={'Хрупкая чистая руна  10-й ступени'}
                text1={'1'}
                text2={'-'}
              />
              <MenuItem
                img={bigSymbol}
                title={'Большой символ  изобилия творца'}
                text1={'10'}
                text2={'-'}
              />
              <MenuItem
                img={mana}
                title={'Мана-батарея'}
                text1={'-'}
                text2={'20'}
              />
              <MenuItem
                img={module}
                title={'Модуль памяти'}
                text1={'-'}
                text2={'10'}
              />
              <MenuItem
                img={vito_table}
                title={'Помощник Вито '}
                text1={'1'}
                text2={'1'}
              />
            </div>
            <div className={styles.buy}>
              <img className={styles.box} src={box} alt={'glow'} />
              <div className={styles.price_wrapper}>
                <div className={styles.price}>399 ₽</div>
                <button className={styles.buy_button}>ПРИОБРЕСТИ</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Glow />
    </div>
  );
};

export default Main;
