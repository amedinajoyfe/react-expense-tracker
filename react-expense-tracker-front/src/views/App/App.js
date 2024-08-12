import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  // };
  
  return (
    <div className="App">
      <h1>{t('welcome')} Alejandro</h1>
      <h2>{t('balanceinfo')} 1320€</h2>
    </div>
  );
}

export default App;
