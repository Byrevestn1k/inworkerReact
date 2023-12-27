
import { Route, Routes } from 'react-router';
import './App.css';
import './adaptive.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { CARTEGORIES_LIST_ENDPOINT } from './constants/endpoints';
import { useContext, useEffect, useState, createContext } from 'react';
import { createRequestPath } from './helpers/helpers';

export let DataContext = createContext()

function App() {
  
  const [data, setData] = useState([])
  const [fetching, setFetching] = useState(false)
  const [fetchError, setFetchError] = useState(null);
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
      <DataContext.Provider value={{data}}>
        <Header />
          <Main/>
        <Footer />
      </DataContext.Provider>
    </div>
  );
}

export default App;
