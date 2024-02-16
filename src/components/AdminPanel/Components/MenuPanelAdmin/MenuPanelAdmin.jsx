

import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { uuidv4 } from '@firebase/util';
import MenuIcon from '@mui/icons-material/Menu';
import NearMeIcon from '@mui/icons-material/NearMe';
import ImageSearchOutlinedIcon from '@mui/icons-material/ImageSearchOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';

export default function MenuPanelAdmin() {
    const [state, setState] = React.useState({
        left: false,
    });
    let dataBD = [
        {
            text: `Навігація`,
            url: 'navigation',
            img: <NearMeIcon />
        },
        {
            text: `Картинки`,
            url: 'images',
            img: <ImageSearchOutlinedIcon />
        },
        {
            text: `Сторінки`,
            url: 'pages',
            img: <AutoStoriesOutlinedIcon />
        },
        {
            text: `Категорії`,
            url: 'categories',
            img: <ClassOutlinedIcon />
        },
        {
            text: `Пости`,
            url: 'posts',
            img: <ArticleOutlinedIcon />
        }
    ]

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {dataBD.map((el, index) => (
                    <ListItem key={uuidv4()} disablePadding>
                        <ListItemButton href={el.url} key={el.text}>
                            <ListItemIcon>
                                {el.img}
                            </ListItemIcon>

                            <ListItemText fontSize="large" primary={el.text} />

                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Box>
    );

    return (
        <div>

            <React.Fragment key={`left`}>
                <Button onClick={toggleDrawer(`left`, true)}>{ }<MenuIcon fontSize="large" sx={{ color: `black` }} /></Button>
                <SwipeableDrawer
                    anchor={`left`}
                    open={state[`left`]}
                    onClose={toggleDrawer(`left`, false)}
                    onOpen={toggleDrawer(`left`, true)}
                >
                    {list(`left`)}
                </SwipeableDrawer>
            </React.Fragment>

        </div>
    );
}
// import "./menuPanel.css";
// import MenuPanelItem from "../MenuPanelItemAdmin/MenuPanelItemAdmin";
// import { useEffect, useState } from "react";
// import { WIDTH_MONITOR } from "../../../../constants/constants";
// import { Link } from "react-router-dom";
// import { v4 as uuidv4 } from 'uuid';
// const MenuPanelAdmin = ({ dataBD, key}) =>{

//     let [isShowPAnel, setIisShowPAnel] = useState(false)
//     //адаптивна панель меню при загрузці
//     useEffect(() => {
//         if (document.documentElement.clientWidth < WIDTH_MONITOR) {
//             setIisShowPAnel(false)
//         }
//         else {
//             setIisShowPAnel(true)
//         }
//     }, [])
//     //адаптивна панель меню при загрузці+

//     //адаптивна панель меню при зміні розміру вікна
//     window.addEventListener("resize", () => {
//         if (document.documentElement.clientWidth < WIDTH_MONITOR) {
//             setIisShowPAnel(false)
//         }
//         else {
//             setIisShowPAnel(true)
//         }
//     })

//     return (
//         <div key = {key} className="menu-panel">
//             {isShowPAnel ?
//                 dataBD.map((el) => {
//                     return (
//                         <MenuPanelItem keys={uuidv4()} title={el.title} url={el.urlSlug} />
//                     )
//                 }
//                 ) :
//                 null
//             }
//         </div>
//     )
// };

// export default MenuPanelAdmin;