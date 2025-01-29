import React from 'react';
import { TabsContext, TabsContextType } from './TabsContext';
import TabList from './TabList';
import TabTrigger from './TabTrigger';
import TabContent from './TabContent';

type TabRootProps = {
  children: React.ReactElement<typeof TabList | typeof TabTrigger | typeof TabContent>[];
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
};

const TabRoot: React.FC<TabRootProps> = ({ children, selectedIndex, setSelectedIndex }) => {
  const contextValue: TabsContextType = { selectedIndex, setSelectedIndex };

  return (
    <TabsContext.Provider value={contextValue}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
};

export default TabRoot;
