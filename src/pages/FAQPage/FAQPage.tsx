import Tabs from '../ui/tabs/Tabs';
import FAQSearchContainer from './components/FAQSearchContainer';
import styles from './FAQPage.module.scss';

const FAQPage = () => {
  const menuList: string[] = ['서비스 도입', '서비스 이용'];
  const categoryList: string[] = ['서비스 상품', '도입 상담', '계약'];

  const handleMenuTabClick = (index: number) => {
    console.log(index);
  };

  const handleCategoryTabClick = (index: number) => {
    console.log(index);
  };

  return (
    <div className={styles.container}>
      <h1>자주 묻는 질문</h1>
      <p>궁금하신 내용을 빠르게 찾아보세요.</p>
      <Tabs onTabClick={handleMenuTabClick}>
        <Tabs.List>
          {menuList.map((menuText, index) => (
            <Tabs.Trigger key={menuText} index={index} text={menuText} />
          ))}
        </Tabs.List>
        <Tabs.Content>
          <FAQSearchContainer
            categoryList={categoryList}
            onCategoryTabClick={handleCategoryTabClick}
          />
        </Tabs.Content>
      </Tabs>
      <div>잡다한 것들</div>
    </div>
  );
};

export default FAQPage;
