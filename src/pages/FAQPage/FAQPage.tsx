import { Tabs } from '../ui/tabs/Tabs';
import styles from './FAQPage.module.scss';
import { useState } from 'react';
import useFetchCategory from '../../hooks/useFetchCategory';
import useFetchFAQItems from '../../hooks/useFetchFAQItems';
import { FAQContext, FAQContextType } from './FAQContext';
import FAQContainer from './components/FAQContainer';
import SearchContainer from './components/SearchContainer';
import { MENU_ID_LIST, MENU_NAME_LIST } from '../../constants/constants';
import FAQFooter from './components/FAQFooter';

const FAQPage = () => {
  const [selectedMenuIndex, setSelectedMenuIndex] = useState<number>(0);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);
  const [searchText, setSearchText] = useState<string>('');

  const { categoryData, isCategoryError } = useFetchCategory(selectedMenuIndex);

  const categoryList = categoryData?.categoryList;
  const categoryID = categoryList?.[selectedCategoryIndex - 1]?.categoryID;

  const { faqItemsData, isFAQItemsError, fetchNextPage, hasNextPage } = useFetchFAQItems(
    selectedMenuIndex,
    categoryID,
    searchText
  );

  const faqItemList = faqItemsData?.pages.flatMap((page) => page.items);
  const isSearched = searchText.length > 0;
  const isEmptySearchResult = isSearched && faqItemsData?.pages[0].pageInfo.totalRecord === 0;

  const handleChangeSelectedMenuIndex = (index: number) => {
    setSelectedMenuIndex(index);
    setSelectedCategoryIndex(0);
  };

  const handleMoreButtonClick = () => {
    fetchNextPage();
  };

  const handleSearchButtonClick = (text: string) => {
    setSearchText(text);
  };

  const providerValue: FAQContextType = {
    selectedMenuIndex,
    selectedCategoryIndex,
    hasNextPage,
    isSearched,
    isEmptySearchResult,
    categoryList,
    faqItemList,
    setSelectedCategoryIndex,
    handleMoreButtonClick,
    handleSearchButtonClick,
  };

  if (isCategoryError || isFAQItemsError) return <div>Error!</div>;

  return (
    <FAQContext.Provider value={providerValue}>
      <div className={styles.container}>
        <h1 className={styles.header}>자주 묻는 질문</h1>
        <p className={styles.description}>궁금하신 내용을 빠르게 찾아보세요.</p>
        <Tabs.Root
          selectedIndex={selectedMenuIndex}
          setSelectedIndex={handleChangeSelectedMenuIndex}
        >
          <Tabs.List className={styles.menuTabList}>
            {MENU_ID_LIST.map((menuID, index) => (
              <Tabs.Trigger
                className={styles.menuTab}
                activeClassName={styles.menuTabActive}
                key={menuID}
                index={index}
                text={MENU_NAME_LIST[index]}
              />
            ))}
          </Tabs.List>
          <Tabs.Content>
            <SearchContainer />
            <FAQContainer />
          </Tabs.Content>
        </Tabs.Root>
        <FAQFooter />
      </div>
    </FAQContext.Provider>
  );
};

export default FAQPage;
