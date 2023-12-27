
import "./main.css";
import PageWrapper from "../PageWrapper/PageWrapper";
import { Route, Routes } from "react-router";
import {
    BLOG_PATH, HOME_PATH, CATEGIRIES_PATH, PRODUCTS_PATH, MINI_GAMES_PATH, CONTACT_PATH, SITEMAP_PATH
   
  } from "../../constants/pathNames";
import MenuPanel from "../MenuPanel/MenuPanel";

const Main = () => {

    return (
    <div className="main">
        <PageWrapper>
           <MenuPanel/>
            <div className="main-information">
            <Routes>
                <Route path={HOME_PATH} element={`HOME_PATH`} />
                <Route path={CATEGIRIES_PATH} element={`CATEGIRIES_PATH`} />
                <Route path={BLOG_PATH} element={`BLOG_PATH`} />
                <Route path={PRODUCTS_PATH} element={`PRODUCTS_PATH`} />
                <Route path={MINI_GAMES_PATH} element={`MINI_GAMES_PATH`} />
                <Route path={CONTACT_PATH} element={`CONTACT_PATH`} />
                <Route path={SITEMAP_PATH} element={`SITEMAP_PATH`} />
            </Routes>
            </div>
        </PageWrapper>
    </div>
    
    )
};

export default Main;