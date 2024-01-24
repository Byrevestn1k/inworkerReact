
import { Route, Routes } from 'react-router';
import './App.css';
import './adaptive.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { CARTEGORIES_LIST_ENDPOINT } from './constants/endpoints';
import { useContext, useEffect, useState, createContext } from 'react';
import { createRequestPath } from './helpers/helpers';
import DataBase from './components/DataBase/DataBase';
import AdminPanel from './components/AdminPanel';
import { ADMIN_PATH } from './constants/pathNames';

export let DataContext = createContext()

function App() {

  const [data, setData] = useState([])
  const [fetching, setFetching] = useState(false)
  const [fetchError, setFetchError] = useState(null);
  let [adminFlag, setAdminflag] = useState(true)
  useEffect(function () {
    setFetching(true)
    fetch(createRequestPath(CARTEGORIES_LIST_ENDPOINT))
      .then(response => response.json())
      .then(resp => {
        setFetching(false)
        setData(resp)
      })
      .catch(err => {
        setFetching(false)
        setFetchError(err)
      });
  }, [])

  return (
    <div className="App">
      {adminFlag ?
        <DataContext.Provider value={{ data, setAdminflag }}>
          <Routes>
            <Route path={ADMIN_PATH} element={<AdminPanel />} />
          </Routes>
        </DataContext.Provider> :
        <DataContext.Provider value={{ data, setAdminflag }}>
          <Header />
          <Main />
          <Footer />
        </DataContext.Provider>}



    </div>
  );
}

export default App;
