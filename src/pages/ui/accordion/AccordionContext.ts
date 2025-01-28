import { createContext, useContext } from 'react';

export type AccordionContextType = {
  openIndex: number | null;
  toggleItem: (index: number) => void;
};

export const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('Accordion components must be used within <Accordion.Root>');
  }
  return context;
};
