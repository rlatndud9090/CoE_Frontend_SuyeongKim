import { useAccordionContext } from './AccordionContext';
import styles from './Accordion.module.scss';

type AccordionContentProp = {
  index: number;
  children: React.ReactNode;
};

const AccordionContent: React.FC<AccordionContentProp> = ({ index, children }) => {
  const { openIndex } = useAccordionContext();
  const isOpen = openIndex === index;

  return <div className={`${styles.content} ${isOpen ? styles.contentShow : ''}`}>{children}</div>;
};

export default AccordionContent;
