import { useState } from 'react';
import styles from './SearchContainer.module.scss';
import { useFAQContext } from '../FAQContext';
import { AiOutlineClose } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';

const SearchContainer = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const { searchText, faqPageInfo, setSearchText } = useFAQContext();

  const isSearchDone = searchText.length > 0;
  const totalCount = faqPageInfo?.totalRecord ?? 0;

  const handleInputValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const trimmedText = event.target.value.trimStart();

    setInputValue(trimmedText);
  };

  const handleClearButtonClick = () => {
    setInputValue('');
  };

  const handleSearchButtonClick = (text: string) => {
    const trimmedText = text.trim();

    if (trimmedText.length < 2) {
      alert('검색어를 2자 이상 입력해주세요.');
      return;
    }

    setInputValue(trimmedText);
    setSearchText(trimmedText);
  };

  const handleClearSearchResultButtonClick = () => {
    setInputValue('');
    setSearchText('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          type="text"
          value={inputValue}
          placeholder="찾으시는 내용을 입력해 주세요"
          onChange={handleInputValueChange}
        />
        <button className={styles.clearButton} onClick={handleClearButtonClick}>
          <AiOutlineClose className={styles.clearButtonIcon} />
        </button>
        <button className={styles.searchButton} onClick={() => handleSearchButtonClick(inputValue)}>
          <BiSearch className={styles.searchButtonIcon} />
        </button>
      </div>
      {isSearchDone && (
        <div className={styles.searchResultInfo}>
          <h2 className={styles.searchResultHeader}>
            검색결과 총 <span className={styles.searchResultCount}>{totalCount}</span> 건
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
