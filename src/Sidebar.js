import ChatIcon from '@mui/icons-material/Chat';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PeopleIcon from '@mui/icons-material/People';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import React from 'react';
import './Sidebar.css';
import SideBarRow from './SideBarRow';
import { useStateValue } from './StateProvider';
//  import {ExpandMoreOutlined} from "@material-ui/icons"

function Sidebar() {
    const [{user}]=useStateValue();
    return (
        <div className="sidebar">
            <SideBarRow  src={user.photoURL} title={user.displayName }/>
            <SideBarRow Icon={LocalHospitalIcon} title="Covid Information Center"/>
            <SideBarRow Icon={EmojiFlagsIcon} title= "Pages"/>
            <SideBarRow Icon={PeopleIcon} title="Friends"/>
            <SideBarRow Icon={ChatIcon} title="Messenger"/>
            <SideBarRow Icon={StorefrontIcon} title="MarketPlace"/>
            <SideBarRow Icon={VideoLibraryIcon} title="Videos"/>
            <SideBarRow Icon={ExpandMoreIcon} title="MarketPlace"/>
        </div>
    )
}

export default Sidebar
