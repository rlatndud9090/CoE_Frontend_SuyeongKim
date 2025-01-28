import React, { useState } from 'react';
import { TabsContext, TabsContextType } from './TabsContext';
import TabList from './TabList';
import TabTrigger from './TabTrigger';
import TabContent from './TabContent';

type TabsProp = {
  children: React.ReactElement<typeof TabList | typeof TabTrigger | typeof TabContent>[];
  onTabClick?: (tabIndex: number) => void;
};

type TabsType = React.FC<TabsProp> & {
  List: typeof TabList;
  Trigger: typeof TabTrigger;
  Content: typeof TabContent;
};

const Tabs: TabsType = ({ children, onTabClick = () => {} }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const providerValue: TabsContextType = { selectedIndex, setSelectedIndex, onTabClick };

  return (
    <TabsContext.Provider value={providerValue}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
};

Tabs.List = TabList;
Tabs.Trigger = TabTrigger;
Tabs.Content = TabContent;

export default Tabs;
