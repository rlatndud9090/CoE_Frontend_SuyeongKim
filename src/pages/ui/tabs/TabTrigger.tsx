import React from 'react';
import { useTabsContext } from './TabsContext';
import styles from './TabTrigger.module.scss';

type TabTriggerProp = {
  index: number;
  text: string;
};

const TabTrigger: React.FC<TabTriggerProp> = ({ index, text }) => {
  const { selectedIndex, setSelectedIndex, onTabClick } = useTabsContext();
  const isActive = selectedIndex === index;

  const handleClick = () => {
    setSelectedIndex(index);
    onTabClick(index);
  };

  return (
    <button className={isActive ? styles.active : styles.unActive} onClick={handleClick}>
      {text && <span>{text}</span>}
    </button>
  );
};

export default TabTrigger;
