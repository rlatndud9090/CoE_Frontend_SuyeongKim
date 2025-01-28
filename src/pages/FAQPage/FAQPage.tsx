import { Tabs } from '../ui/tabs/Tabs';
import styles from './FAQPage.module.scss';
import { useState } from 'react';
import useFetchCategory from '../../hooks/useFetchCategory';
import useFetchFAQItems from '../../hooks/useFetchFAQItems';
import { FAQContext, FAQContextType } from './FAQContext';
import FAQContainer from './components/FAQContainer';
import SearchContainer from './components/SearchContainer';
import { MENU_ID_LIST, MENU_NAME_LIST } from '../../constants/constants';

const FAQPage = () => {
  const [selectedMenuIndex, setSelectedMenuIndex] = useState<number>(0);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);

  const { categoryData, isCategoryLoading, isCategoryError } = useFetchCategory(selectedMenuIndex);

  const categoryList = categoryData?.categoryList;
  const categoryID = categoryList?.[selectedCategoryIndex - 1]?.categoryID;

  const { faqItemsData, isFAQItemsLoading, isFAQItemsError, fetchNextPage, hasNextPage } =
    useFetchFAQItems(selectedMenuIndex, categoryID);

  const faqItemList = faqItemsData?.pages.flatMap((page) => page.items);

  const handleMenuTabClick = (index: number) => {
    setSelectedMenuIndex(index);
    setSelectedCategoryIndex(0);
  };

  const handleCategoryTabClick = (index: number) => {
    setSelectedCategoryIndex(index);
  };

  const handleMoreButtonClick = () => {
    fetchNextPage();
  };

  if (isCategoryError || isFAQItemsError) return <div>Error!</div>;

  const providerValue: FAQContextType = {
    selectedCategoryIndex,
    isFAQItemsLoading,
    hasNextPage,
    categoryList,
    faqItemList,
    setSelectedCategoryIndex,
    handleCategoryTabClick,
    handleMoreButtonClick,
  };

  return (
    <FAQContext.Provider value={providerValue}>
      <div className={styles.container}>
        <h1 className={styles.header}>자주 묻는 질문</h1>
        <p className={styles.description}>궁금하신 내용을 빠르게 찾아보세요.</p>
        <Tabs.Root
          selectedIndex={selectedMenuIndex}
          setSelectedIndex={setSelectedMenuIndex}
          onTabClick={handleMenuTabClick}
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
            {!isCategoryLoading && <FAQContainer />}
          </Tabs.Content>
        </Tabs.Root>
        <div>잡다한 것들</div>
      </div>
    </FAQContext.Provider>
  );
};

export default FAQPage;
