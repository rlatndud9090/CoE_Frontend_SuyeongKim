import React from 'react';
import { useFAQContext } from '../FAQContext';
import { Tabs } from '../../ui/tabs/Tabs';
import styles from './FAQContainer.module.scss';
import { Accordion } from '../../ui/accordion/Accordion';
import parse from 'html-react-parser';

const FAQContainer: React.FC = () => {
  const {
    selectedMenuIndex,
    selectedCategoryIndex,
    hasNextPage,
    isEmptySearchResult,
    categoryList,
    faqItemList,
    setSelectedCategoryIndex,
    handleMoreButtonClick,
  } = useFAQContext();

  const showCategoryName = selectedMenuIndex !== 0;
  const accordionKey = `${selectedMenuIndex}-${selectedCategoryIndex}`;

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
            <Accordion.Root key={accordionKey}>
              {faqItemList?.map((faqItem, index) => {
                const { id, categoryName, subCategoryName, question, answer } = faqItem;
                return (
                  <Accordion.Item key={id}>
                    <Accordion.Header index={index}>
                      {showCategoryName && (
                        <span className={styles.categoryName}>{categoryName}</span>
                      )}
                      <span className={styles.categoryName}>{subCategoryName}</span>
                      <span className={styles.question}>{question}</span>
                    </Accordion.Header>
                    <Accordion.Content index={index}>{parse(answer)}</Accordion.Content>
                  </Accordion.Item>
                );
              })}
            </Accordion.Root>
            {hasNextPage && (
              <button className={styles.moreButton} onClick={handleMoreButtonClick}>
                + 더보기
              </button>
            )}
          </>
        )}
      </Tabs.Content>
    </Tabs.Root>
  );
};

export default FAQContainer;
