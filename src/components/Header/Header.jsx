import Navigation from "../Navigation";
import "./header.css";
import Logotype from '../Logotype/Logotype';
import PageWrapper from "../PageWrapper/PageWrapper";
import { createPortal } from "react-dom";
import AdaptiveNavButton from "../AdaptiveNavButton/AdaptiveNavButton"
import { useEffect, useState } from "react";

const Header = () => {
    let [buttonNavigation, setButtonNavigation] = useState(false);
    let [onClickNavButFlag, setOnClickNavButFlaf] = useState(false);
     //адаптивний хеадер при загрузці
       useEffect(()=>{
        if (document.documentElement.clientWidth < 535) {
            setButtonNavigation(true);
            }
        else {
            setButtonNavigation(false);
        }

       }, [])
   

    //адаптивний хеадер при загрузці

    //адаптивний хеадер при зміні розміру вікна
        window.addEventListener("resize", (e) => {
        if (document.documentElement.clientWidth < 535) {
            setButtonNavigation(true);
            }
        else {
            setButtonNavigation(false);

        }
        })
    return (
        
            <header onChange={
                (e)=>{
                    console.log(e.target);

                }
            }>
                <PageWrapper>
                <div className="container">
                    <Logotype />
                    {buttonNavigation?<AdaptiveNavButton onClick={setButtonNavigation} onClickNavButFlaf={onClickNavButFlag}/>:<Navigation  isFooter={false} />}
                </div>
                </PageWrapper>
            </header>
        


    )
};

export default Header;