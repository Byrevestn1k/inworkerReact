
import { Route, Routes} from 'react-router';
import './App.css';
import './adaptive.css';
import AdminPanel from './components/AdminPanel';
import { ADMIN_PATH } from './constants/pathNames';
import Authentication from './components/AuthentificationUser/Authentication';
import MainPage from "./components/MainPage.jsx"

function App() {

  return (
    <div className="App">
          <Routes>
            <Route path={ADMIN_PATH} element={<AdminPanel />}/>
            <Route path={`/auth`} element={<Authentication />}/>
            <Route path={`/`} element={<MainPage/>}/>
          </Routes>
    </div>
  );
}

export default App;
