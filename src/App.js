
import { Route, Routes } from 'react-router';
import './App.css';
import './adaptive.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import {
  BLOG_PATH, HOME_PATH, CATEGIRIES_PATH, PRODUCTS_PATH, MINI_GAMES_PATH, CONTACT_PATH, SITEMAP_PATH
 
} from "./constants/pathNames";

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path={HOME_PATH} element={`HOME_PATH`} />
          <Route path={CATEGIRIES_PATH} element={`CATEGIRIES_PATH`} />
          <Route path={BLOG_PATH} element={`BLOG_PATH`} />
          <Route path={PRODUCTS_PATH} element={`PRODUCTS_PATH`} />
          <Route path={MINI_GAMES_PATH} element={`MINI_GAMES_PATH`} />
          <Route path={CONTACT_PATH} element={`CONTACT_PATH`} />
          <Route path={SITEMAP_PATH} element={`SITEMAP_PATH`} />
        </Routes>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
