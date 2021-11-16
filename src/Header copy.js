import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FlagIcon from '@material-ui/icons/Flag';
import ForumIcon from '@material-ui/icons/Forum';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import SearchIcon from '@material-ui/icons/Search';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import React from 'react';
import "./Header.css";



function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKy65_guETHEdfHLqIqsMHDlT2ixzXp8Pr1EpQupiL9T4zYBDE0AflN9a8ZqA85NC1d8A&usqp=CAU"
                 alt="facebook image"/>
                 <div className="header_input">
                     <SearchIcon/>
                     <input type="text" placeholder="Search Facebook"/>
                 </div>
            </div>
            <div className="header__center">
                <div className="header__option header__option--active"><HomeIcon/></div>
                <div className="header__option"><FlagIcon/></div>
                <div className="header__option"><SubscriptionsOutlinedIcon/></div>
                <div className="header__option"><StorefrontOutlinedIcon/></div>
                <div className="header__option"><SupervisedUserCircleIcon/></div>
            </div>

            <div className="header__right">
            <div className="header__info">
                <Avatar/>
                <h4>Saksham</h4>
            </div>
            <IconButton>
                <AddIcon/>
            </IconButton>
            <IconButton>
                <ForumIcon/>
            </IconButton>
            <IconButton>
                <NotificationsActiveIcon/>
            </IconButton>
            <IconButton>
                <ExpandMoreIcon/>
            </IconButton>
            <IconButton>
                <AddIcon/>
            </IconButton>
            </div>
        </div>
    )
}

export default Header
