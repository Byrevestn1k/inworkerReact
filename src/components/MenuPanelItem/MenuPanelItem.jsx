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

const MenuPanelItem = ({title, url, childCategories}) =>  {
  return (
    <div>
      {childCategories.length>0?
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{background: '#3594b3', background: 'linear-gradient(310deg, rgba(53, 148, 179, 1) 0%, rgba(0, 212, 255, 1) 100%)', color: '#fff', fontWeight:'bold'}}
        >
         {title}
        </AccordionSummary>
        <AccordionDetails>
        {childCategories.map((el)=>{
            return <Link to={url || `null`} key={uuidv4()}>
            <h5 >{el}</h5>
            </Link>
        })
      }
        </AccordionDetails>
      </Accordion>:
      <Link to={url || `null`} key={uuidv4()}>
       <h5 className="menu-panel_item">
           {title}
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

// const MenuPanelItem = ({title, url, childCategories}) => {

//     return (
//     <Link to={url || `null`} key={uuidv4()}>
//     <h5 className="menu-panel_item">
//         {title}
//       </h5>
//     </Link>
    
//     )
// };

// export default MenuPanelItem;