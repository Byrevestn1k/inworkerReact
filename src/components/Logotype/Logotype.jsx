// import Navigation from "../Navigation";
import { useState } from 'react';
import inworker_shapka from '../../images/header/inworker_shapka.jpg';
import inworker_shapka_mini from '../../images/header/inworker_shapka_mini.png';
import "./logotype.css";

const Logotype = () => {
    let  [width, setWidth]= useState()
    let  [logotype, setLogotype]= useState(inworker_shapka);
//адаптивний хеадер при загрузці
    window.addEventListener("DOMContentLoaded", (e) => {
        setWidth(document.documentElement.clientWidth )
        if (width < 535) {
            setLogotype(inworker_shapka_mini);
            }
        else {
            setLogotype(inworker_shapka);
        }
    })
    //адаптивний хеадер при загрузці

    //адаптивний хеадер при зміні розміру вікна
    window.addEventListener("resize", (e) => {
    setWidth(document.documentElement.clientWidth )
        if (width < 535) {
            setLogotype(inworker_shapka_mini);
        }
        else {
            setLogotype(inworker_shapka);
        }
    })
     //адаптивний хеадер при зміні розміру вікна
    return (	
            <div className="logotype">
                <img src={logotype} alt="" />
            </div>
	)
};

export default Logotype;