import { createContext, useContext } from 'react';
import { Category, FAQItem, FAQPageInfo } from '../../types/type';

export type FAQContextType = {
  selectedMenuIndex: number;
  selectedCategoryIndex: number;
  searchText: string;
  hasNextPage: boolean;
  categoryList?: Category[];
  faqItemList?: FAQItem[];
  faqPageInfo?: FAQPageInfo;
  setSelectedCategoryIndex: (index: number) => void;
  fetchNextPage: () => void;
  setSearchText: (text: string) => void;
};

export const FAQContext = createContext<FAQContextType | undefined>(undefined);

export const useFAQContext = () => {
  const context = useContext(FAQContext);
  if (!context) {
    throw new Error('context is not provided');
  }
  return context;
};
