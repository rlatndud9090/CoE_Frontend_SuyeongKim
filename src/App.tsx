import styles from './App.module.scss';
import FAQPage from './pages/FAQPage/FAQPage';

const App = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>wible BIZ</header>
      <FAQPage />
    </div>
  );
};

export default App;
