import { createContext, useContext } from 'react';

export type TabsContextType = {
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
};

export const TabsContext = createContext<TabsContextType | undefined>(undefined);

export const useTabsContext = () => {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error('Context is not provided');
  }

  return context;
};
