import React from 'react';
import styles from './SearchContainer.module.scss';

const SearchContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <input className={styles.input} type="text" placeholder="찾으시는 내용을 입력해 주세요" />
        <button className={styles.clearButton}>X</button>
        <button className={styles.searchButton}>검색</button>
      </div>
    </div>
  );
};

export default SearchContainer;
