
import "./main.css";
import PageWrapper from "../PageWrapper/PageWrapper";
import { Route, Routes } from "react-router";
import {
    BLOG_PATH, HOME_PATH, CATEGIRIES_PATH, PRODUCTS_PATH, MINI_GAMES_PATH, CONTACT_PATH, SITEMAP_PATH, ADMIN_PATH

} from "../../constants/pathNames";
import MenuPanel from "../MenuPanel//MenuPanel";
import Comments from "../Comments/Comments";
import { useEffect, useState } from "react";
import { getAllDocuments_Firebase } from "../AdminPanel/helpers";
import Page from "../Page/Page";

const Main = () => {
let [categoriesList, setCategriesList] = useState([]);
let [navigationsList, setNavigationsList] = useState([]);

let collectionCategories = `categories`;
let collectionNavigations = `navigation`;
useEffect(()=>{
    // getAllDocuments_Firebase(collectionCategories).then((resp=>{
    //     setCategriesList(resp)
    // }))
    getAllDocuments_Firebase(collectionNavigations).then((resp=>{
        setNavigationsList(resp)
    }))

},[])

    return (
        <div className="main">
            <PageWrapper>
                <MenuPanel dataBD={categoriesList}/>
                <div className="main-information">
                    <div>
                        <Routes>
                        {
                            navigationsList.map((el)=>{

                                 return <Route path={el.path} element={<Page data={el}/>} />
                            })
                        }


                            {/* <Route path={HOME_PATH} element={`HOME_PATH`} /> */}
                            {/* <Route path={CATEGIRIES_PATH} element={`CATEGIRIES_PATH`} />
                            <Route path={BLOG_PATH} element={`BLOG_PATH`} />
                            <Route path={PRODUCTS_PATH} element={`PRODUCTS_PATH`} />
                            <Route path={MINI_GAMES_PATH} element={`MINI_GAMES_PATH`} />
                            <Route path={CONTACT_PATH} element={`CONTACT_PATH`} />
                            <Route path={SITEMAP_PATH} element={`SITEMAP_PATH`} />
                            <Route path={SITEMAP_PATH} element={`SITEMAP_PATH`} /> */}
                        </Routes>
                    </div>
                    <div>
                        <Comments />
                    </div>
                    
                </div>
            </PageWrapper>
        </div>

    )
};

export default Main;