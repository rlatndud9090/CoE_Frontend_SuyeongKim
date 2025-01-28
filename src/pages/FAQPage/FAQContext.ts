import { createContext, useContext } from 'react';
import { Category, FAQItem } from '../../types/type';

export type FAQContextType = {
  selectedCategoryIndex: number;
  hasNextPage: boolean;
  isSearched: boolean;
  isEmptySearchResult: boolean;
  categoryList?: Category[];
  faqItemList?: FAQItem[];
  setSelectedCategoryIndex: (index: number) => void;
  handleMoreButtonClick: () => void;
  handleSearchButtonClick: (text: string) => void;
};

export const FAQContext = createContext<FAQContextType | undefined>(undefined);

export const useFAQContext = () => {
  const context = useContext(FAQContext);
  if (!context) {
    throw new Error('context is not provided');
  }
  return context;
};
