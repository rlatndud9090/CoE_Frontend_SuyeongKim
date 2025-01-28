import styles from './App.module.scss';
import FAQPage from './pages/FAQPage/FAQPage';

const App = () => {
  return (
    <div className={styles.container}>
      <header>wible BIZ</header>
      <FAQPage />
      <footer>KIA</footer>
    </div>
  );
};

export default App;
