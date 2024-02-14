
import { Route, Routes } from 'react-router';
import './App.css';
import './adaptive.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { CARTEGORIES_LIST_ENDPOINT } from './constants/endpoints';
import { useContext, useEffect, useState, createContext } from 'react';
import { createRequestPath } from './helpers/helpers';
import AdminPanel from './components/AdminPanel';
import { ADMIN_PATH } from './constants/pathNames';
import Authentication from './components/AuthentificationUser/Authentication';

export let DataContext = createContext()

function App() {

  let [adminFlag, setAdminflag] = useState(false)

  return (
    <div className="App">
      {adminFlag ?
        <DataContext.Provider value={{ setAdminflag }}>
          <Routes>
            <Route path={ADMIN_PATH} element={<AdminPanel />} />
            <Route path={`auth`} element={<Authentication />} />
          </Routes>
        </DataContext.Provider> :
        <DataContext.Provider value={{ setAdminflag }}>
          <Header />
          <Main />
          <Footer />
        </DataContext.Provider>}



    </div>
  );
}

export default App;
