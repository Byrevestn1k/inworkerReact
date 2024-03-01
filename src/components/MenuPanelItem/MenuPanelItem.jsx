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
import { Popover, Typography } from '@mui/material';
import { useState } from 'react';
import PopoverMenu from '../PopoveMenu/PopoveMenu';

const MenuPanelItem = ({ navItemData}) =>  {
  const categoriesList = useSelector(state => state.uploadCategories.uploadCategories)
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
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
        <>
          
          <Typography
            aria-owns={open ? 'mouse-over-popover' : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <Link to={navItemData.path} key={uuidv4()}>
              <h5 >
                {navItemData.title}
              </h5>
            </Link>
          </Typography>

      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
      <Typography sx={{ p: 1 }}>I use Popover.</Typography>
      </Popover>
        </>
        {arrTitleCategories.map((el)=>{
 
            return <> 
            
              <Typography
                  aria-owns={open ? 'mouse-over-popover' : undefined}
                  aria-haspopup="true"
                  onMouseEnter={handlePopoverOpen}
                  onMouseLeave={handlePopoverClose}
              >
                <Link to={el.path} key={uuidv4()}>
                    <h5 >{el.title }</h5>
                </Link>
              </Typography>
  
              <Popover
                id="mouse-over-popover"
                sx={{
                  pointerEvents: 'none',
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
                <Typography sx={{ p: 1 }}>I use Popover.</Typography>
              </Popover>
            </>
        })
        }
        </AccordionDetails>
        </Accordion>:
      
       <>
       <Typography
                  aria-owns={open ? 'mouse-over-popover' : undefined}
                  aria-haspopup="true"
                  onMouseEnter={handlePopoverOpen}
                  onMouseLeave={handlePopoverClose}
                >
              <Link to={navItemData.path} key={uuidv4()}>
                  <h5 className="menu-panel_item">
                {navItemData.title}
                </h5>
                </Link>
        </Typography>
        <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>I use Popover.</Typography>
      </Popover>  
         
      </>
    }
    </div>
  );
}
export default MenuPanelItem;
