import { useState } from 'react';
import { AccordionContext, AccordionContextType } from './AccordionContext';

type AccordionRootProps = {
  children: React.ReactNode;
};

const AccordionRoot: React.FC<AccordionRootProps> = ({ children }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const contextValue: AccordionContextType = { openIndex, toggleItem };

  return (
    <AccordionContext.Provider value={contextValue}>
      <div>{children}</div>
    </AccordionContext.Provider>
  );
};

export default AccordionRoot;
