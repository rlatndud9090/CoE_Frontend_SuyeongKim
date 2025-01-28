import { Children, cloneElement, isValidElement, ReactElement } from 'react';
import { useAccordionContext } from './AccordionContext';

type AccordionItemProps = {
  index: number;
  children: React.ReactNode;
};

const AccordionItem = ({ index, children }: AccordionItemProps) => {
  const childrenArray = Children.toArray(children);

  const AccordionHeaderComponents = childrenArray.find(
    (child) => isValidElement(child) && child.type === AccordionHeader
  );
  const AccordionContentComponents = childrenArray.find(
    (child) => isValidElement(child) && child.type === AccordionContent
  );

  return (
    <div>
      {cloneElement(AccordionHeaderComponents as ReactElement, { index })}
      {cloneElement(AccordionContentComponents as ReactElement, { index })}
    </div>
  );
};

export default AccordionItem;
