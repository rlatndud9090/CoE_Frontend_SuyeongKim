import React from 'react';
import { useAccordionContext } from './AccordionContext';

type AccordionHeaderProp = {
  index: number;
  children: React.ReactNode;
};

const AccordionHeader: React.FC<AccordionHeaderProp> = ({ index, children }) => {
  const { openIndex, toggleItem } = useAccordionContext();
  const isOpen = openIndex === index;
  return <button></button>;
};

export default AccordionHeader;
