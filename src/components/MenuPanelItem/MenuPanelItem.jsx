import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from "react-router-dom";
import "./menuPanelItem.css";
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import {  Typography } from '@mui/material';
import { useState } from 'react';

const MenuPanelItem = ({ navItemData}) =>  {
  const categoriesList = useSelector(state => state.uploadCategories.uploadCategories); //список усых категорый

	let arrTitleCategories=[];// масив зы списком заголовкыв категшорый
	let childCategories=navItemData?.childCategories;	//масив зы списком дочырных категорый
  // console.log(`childCategories => `, childCategories);
  // console.log(`categoriesList => `, categoriesList);
  childCategories?.map((el) => {
			for (let index = 0; index < categoriesList.length; index++) {				 
        if (categoriesList[index].id == el) {

				arrTitleCategories.push({title:categoriesList[index].title, path:categoriesList[index].path})	  
      }
			}
	});
    
// console.log(`navItemData => `, navItemData);
//  console.log(`arrTitleCategories => `, arrTitleCategories);
  return (
    <>
      {arrTitleCategories.length>0?
      <Accordion key={uuidv4()}>
        <AccordionSummary
          key={uuidv4()}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{background: '#3594b3', background: 'linear-gradient(310deg, rgba(53, 148, 179, 1) 0%, rgba(0, 212, 255, 1) 100%)', color: '#fff', fontWeight:'bold'}}
        >
         {navItemData.title}
        </AccordionSummary>
        <AccordionDetails key={uuidv4()}>

            <div key={uuidv4()} className="dropdown-menu">
                <h5 >
                  {navItemData.title}
                </h5>
            </div>
        {    
            navItemData.pages?.map((el)=>{
              return  <div key={uuidv4()} className="dropdown-menu">
                          <h5 >
                            {el}
                          </h5>
                      </div>
            }

          )}
        </AccordionDetails>
        </Accordion>
       :
      null
    } 
    </>
  );
}
export default MenuPanelItem;
