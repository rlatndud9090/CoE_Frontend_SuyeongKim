import { useRef, useState } from 'react';
import styles from './SearchContainer.module.scss';
import { useFAQContext } from '../FAQContext';

const SearchContainer = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const { isSearched, faqItemList, handleSearchButtonClick } = useFAQContext();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClearButtonClick = () => {
    setInputValue('');
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const handleClearSearchResultButtonClick = () => {
    setInputValue('');
    if (inputRef.current) {
      inputRef.current.value = '';
    }
    handleSearchButtonClick('');
  };

  const resultCount = faqItemList?.length || 0;

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <input
          ref={inputRef}
          className={styles.input}
          type="text"
          placeholder="찾으시는 내용을 입력해 주세요"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className={styles.clearButton} onClick={handleClearButtonClick}>
          X
        </button>
        <button className={styles.searchButton} onClick={() => handleSearchButtonClick(inputValue)}>
          검색
        </button>
      </div>
      {isSearched && (
        <div className={styles.searchResultInfo}>
          <h2 className={styles.searchResultHeader}>
            검색결과 총 <span className={styles.searchResultCount}>{resultCount}</span> 건
          </h2>
          <button
            className={styles.clearSearchResultButton}
            onClick={handleClearSearchResultButtonClick}
          >
            검색 초기화
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchContainer;
