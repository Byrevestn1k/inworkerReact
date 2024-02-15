
import { Route, Routes } from 'react-router';
import './App.css';
import './adaptive.css';
import {  useState, createContext } from 'react';
import AdminPanel from './components/AdminPanel';
import { ADMIN_PATH } from './constants/pathNames';
import MainPage from './components/MainPage';
import AuthPage from './components/AdminPanel/Components/AuthPage';

export let DataContext = createContext()

function App() {

  return (
    <div className="App">
          <Routes>
            <Route path={ADMIN_PATH} element={<AdminPanel />}/>
            <Route path={`/auth`} element={<AuthPage />}/>
            <Route path={`*`} element={<MainPage/>}/>
          </Routes>
    </div>
  );
}

export default App;
