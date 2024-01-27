
import "./main.css";
import PageWrapper from "../PageWrapper/PageWrapper";
import { Route, Routes } from "react-router";
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
    useEffect(() => {
        getAllDocuments_Firebase(collectionCategories).then((resp => {
            setCategriesList(resp)
        }))
        getAllDocuments_Firebase(collectionNavigations).then((resp => {
            setNavigationsList(resp)
        }))
    }, [])

    return (
        <div className="main">
            <PageWrapper>
                <MenuPanel dataBD={categoriesList} />
                <div className="main-information">
                    <div className="content">
                        <Routes>
                            {
                                navigationsList.map((el) => {
                                    return <Route path={el.path} element={<Page data={el} />} />
                                })
                            }
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