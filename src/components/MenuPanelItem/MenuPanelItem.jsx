import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import "./menuPanelItem.css";
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';

const MenuPanelItem = ({ navItemData}) =>  {
  const categoriesList = useSelector(state => state.uploadCategories.uploadCategories)
	let arrTitleCategories=[];
	let childCategories=navItemData.childCategories;	
  childCategories.map((el) => {
			for (let index = 0; index < categoriesList.length; index++) {				 
        if (categoriesList[index].id == el) {
				arrTitleCategories.push({title:categoriesList[index].title, path:categoriesList[index].path})	  
      }
			}
		 })

  
 
  // console.log(`arrTitleCategories => `, arrTitleCategories);
  return (
    <div>
      {arrTitleCategories.length>0?
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{background: '#3594b3', background: 'linear-gradient(310deg, rgba(53, 148, 179, 1) 0%, rgba(0, 212, 255, 1) 100%)', color: '#fff', fontWeight:'bold'}}
        >
         {navItemData.title}
        </AccordionSummary>
        <AccordionDetails>
        <Link to={navItemData.path} key={uuidv4()}>
       <h5 >
           {navItemData.title}
         </h5>
       </Link>
        {arrTitleCategories.map((el)=>{
 
            return <Link to={el.path} key={uuidv4()}>
            <h5 >{el.title }</h5>
            </Link>
   
        })
        }
        </AccordionDetails>
      </Accordion>:
      <Link to={navItemData.path} key={uuidv4()}>
       <h5 className="menu-panel_item">
           {navItemData.title}
         </h5>
       </Link>
    }
    </div>
  );
}
export default MenuPanelItem;
// import "./menuPanelItem.css";
// import { Link } from "react-router-dom";
// import { v4 as uuidv4 } from 'uuid';

// const MenuPanelItem = ({title, url, navItemData}) => {

//     return (
//     <Link to={url || `null`} key={uuidv4()}>
//     <h5 className="menu-panel_item">
//         {title}
//       </h5>
//     </Link>
    
//     )
// };

// export default MenuPanelItem;