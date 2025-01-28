import React from 'react';
import { useTabsContext } from './TabsContext';

type TabTriggerProps = {
  index: number;
  text: string;
  className?: string;
  activeClassName?: string;
};

const TabTrigger: React.FC<TabTriggerProps> = ({ index, text, className, activeClassName }) => {
  const { selectedIndex, setSelectedIndex, onTabClick } = useTabsContext();
  const isActive = selectedIndex === index;

  const handleClick = () => {
    if (!isActive) {
      setSelectedIndex(index);
      onTabClick(index);
    }
  };

  return (
    <button className={`${className} ${isActive ? activeClassName : ''}`} onClick={handleClick}>
      {text && <span>{text}</span>}
    </button>
  );
};

export default TabTrigger;
