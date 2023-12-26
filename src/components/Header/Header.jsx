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
                        <Navigation isFooter={false}/>

                    </div>
                    
                </header>
             
        
		
	)
};

export default Header;