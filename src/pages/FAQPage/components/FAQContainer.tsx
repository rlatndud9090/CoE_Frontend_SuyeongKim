import React from 'react';
import { useFAQContext } from '../FAQContext';
import { Tabs } from '../../ui/tabs/Tabs';
import styles from './FAQContainer.module.scss';

const FAQContainer: React.FC = () => {
  const {
    selectedCategoryIndex,
    hasNextPage,
    isEmptySearchResult,
    categoryList,
    faqItemList,
    setSelectedCategoryIndex,
    handleMoreButtonClick,
  } = useFAQContext();

  return (
    <Tabs.Root selectedIndex={selectedCategoryIndex} setSelectedIndex={setSelectedCategoryIndex}>
      <Tabs.List className={styles.categoryTabList}>
        <Tabs.Trigger
          className={styles.categoryTab}
          activeClassName={styles.categoryTabActive}
          key="ALL"
          index={0}
          text="전체"
        />
        {categoryList?.map((category, index) => (
          <Tabs.Trigger
            className={styles.categoryTab}
            activeClassName={styles.categoryTabActive}
            key={category.categoryID}
            index={index + 1}
            text={category.name}
          />
        ))}
      </Tabs.List>
      <Tabs.Content>
        {isEmptySearchResult ? (
          <div>검색 결과가 없습니다.</div>
        ) : (
          <>
            <div className="accordionContainer">
              {faqItemList?.map((faqItem) => (
                <div>
                  <span>{faqItem.categoryName}</span>
                  <span>{faqItem.subCategoryName}</span>
                  <span>{faqItem.question}</span>
                </div>
              ))}
            </div>
            {hasNextPage && <button onClick={handleMoreButtonClick}>더보기</button>}
          </>
        )}
      </Tabs.Content>
    </Tabs.Root>
  );
};

export default FAQContainer;
