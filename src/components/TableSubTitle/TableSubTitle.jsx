import React from 'react';
import styles from './TableSubTitle.module.scss';

const TableSubTitle = ({ text }) => {
  return <div className={styles.table_sub_title}>{text}</div>;
};

export default TableSubTitle;
