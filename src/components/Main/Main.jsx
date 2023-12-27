import Navigation from "../Navigation";
import { useState } from 'react';
import inworker_shapka from '../../images/header/inworker_shapka.jpg';
import "./main.css";
import Logotype from '../Logotype/Logotype';
import PageWrapper from "../PageWrapper/PageWrapper";
import { Route, Routes } from "react-router";
import {
    BLOG_PATH, HOME_PATH, CATEGIRIES_PATH, PRODUCTS_PATH, MINI_GAMES_PATH, CONTACT_PATH, SITEMAP_PATH
   
  } from "../../constants/pathNames";

const Main = () => {

    return (
    <div className="main">
        <PageWrapper>
            <div>MAIN</div>
            <Routes>
                <Route path={HOME_PATH} element={`HOME_PATH`} />
                <Route path={CATEGIRIES_PATH} element={`CATEGIRIES_PATH`} />
                <Route path={BLOG_PATH} element={`BLOG_PATH`} />
                <Route path={PRODUCTS_PATH} element={`PRODUCTS_PATH`} />
                <Route path={MINI_GAMES_PATH} element={`MINI_GAMES_PATH`} />
                <Route path={CONTACT_PATH} element={`CONTACT_PATH`} />
                <Route path={SITEMAP_PATH} element={`SITEMAP_PATH`} />
            </Routes>
        </PageWrapper>
        </div>
    )
};

export default Main;