
import "./popoveMenu.css";
import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';


function PopoverMenu(anchorEl, handlePopoverClose, open) {


  return (
    <Popover
      id="mouse-over-popover"
      sx={{
        pointerEvents: 'none',
      }}
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
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
  );
}
export default PopoverMenu;