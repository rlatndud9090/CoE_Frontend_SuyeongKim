import { useAccordionContext } from './AccordionContext';
import styles from './Accordion.module.scss';
import { FaChevronDown } from 'react-icons/fa';

type AccordionHeaderProp = {
  index: number;
  children: React.ReactNode;
};

const AccordionHeader: React.FC<AccordionHeaderProp> = ({ index, children }) => {
  const { openIndex, toggleItem } = useAccordionContext();
  const isOpen = openIndex === index;

  return (
    <button className={styles.header} onClick={() => toggleItem(index)}>
      {children}
      <FaChevronDown className={`${styles.headerIcon} ${isOpen ? styles.headerIconOpen : ''}`} />
    </button>
  );
};

export default AccordionHeader;
