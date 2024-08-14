import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardLayout from './components/dashboard/DashboardLayout';

function App() {

  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  // };
  
  return (
    <div className="App">
      <DashboardLayout></DashboardLayout>
    </div>
  );
}

export default App;
