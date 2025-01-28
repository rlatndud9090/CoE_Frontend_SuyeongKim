import React from 'react';
import Tabs from '../../ui/tabs/Tabs';

type FAQSearchContainerProp = {
  categoryList: string[];
  onCategoryTabClick: (index: number) => void;
};

const FAQSearchContainer: React.FC<FAQSearchContainerProp> = ({
  categoryList,
  onCategoryTabClick,
}) => {
  return (
    <>
      <input />
      <Tabs onTabClick={onCategoryTabClick}>
        <Tabs.List>
          <Tabs.Trigger index={0} text={'전체'} />
          {categoryList.map((categoryText, index) => (
            <Tabs.Trigger key={categoryText} index={index + 1} text={categoryText} />
          ))}
        </Tabs.List>
        <Tabs.Content>
          <div>FAQ 내용 샬라샬라</div>
        </Tabs.Content>
      </Tabs>
    </>
  );
};

export default FAQSearchContainer;
