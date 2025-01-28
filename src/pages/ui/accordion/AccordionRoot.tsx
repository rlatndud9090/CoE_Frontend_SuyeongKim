import { useState } from 'react';
import { AccordionContext, AccordionContextType } from './AccordionContext';

type AccordionRootProps = {
  children: React.ReactNode;
};

const AccordionRoot: React.FC<AccordionRootProps> = ({ children }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index)); // 토글
  };

  const providerValue: AccordionContextType = { openIndex, toggleItem };

  return (
    <AccordionContext.Provider value={providerValue}>
      <div>{children}</div>
    </AccordionContext.Provider>
  );
};

export default AccordionRoot;
