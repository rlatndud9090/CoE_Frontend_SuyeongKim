type TabListProps = {
  children: React.ReactNode;
  className?: string;
};

const TabList: React.FC<TabListProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default TabList;
