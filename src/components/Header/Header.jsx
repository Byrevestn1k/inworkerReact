import Navigation from "../Navigation";
import { useState } from 'react';
import inworker_shapka from '../../images/header/inworker_shapka.jpg';
import "./header.css";
import Logotype from '../Logotype/Logotype';

const Header = () => {

    
    
    return (	
                <header>
                    <div className="container">
                        <div className="button-menu hidden">
                            <div className="stroke"></div>
                            <div className="stroke"></div>
                            <div className="stroke"></div>
                        </div>
                        <Logotype/>
                        <div className="header">
                            <Navigation/>

                            {/* <div className="main"><a href="">Главная</a></div>
                            <div className="blog"><a href="">блог</a></div>
                            <div className="map"><a href="">Mini games</a></div>
                            <div className="services"><a href="">Мои услуги</a></div> */}
                        </div>
                    </div>
                    
                </header>
             
        
		
	)
};

export default Header;