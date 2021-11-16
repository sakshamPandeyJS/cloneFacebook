import { Avatar } from '@material-ui/core';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NearMeIcon from '@mui/icons-material/NearMe';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import React, { useState } from 'react';
import LiveVideo from './LiveVideo';
import './Post.css';
function Post({profilePic, image, username,timestamp,message}) {
    const [color,setColor]=useState('');
       const [textarea,settextarea]=useState(false);
    const hitLike=()=>{
        color==""?setColor("blue"):setColor("");
    };
    const comment=()=>{
        settextarea(true)
    }
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic} className="post__avatar"/>
          
            <div className="post__Topinfo">
                <h3>{username}</h3>
                {/* {console.log('date is ', {timestamp})} */}
                <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
            </div>  </div> 
            <div className="post__bottom">
                <p>{message}</p>
            </div>
            <div className="post__image">
                <img src={image}/>
            </div>
            <div className="post__options">
                <div onClick={hitLike} className={`post__option ${color}`}>
                    <ThumbUpIcon/>
                    <p>Like</p>
                </div>
                <div onClick={comment} className="post__option">
                    <ChatBubbleOutlineIcon/>
                    <p>Comment</p>
                   
                </div> 
                <div className="post__option">
                    <NearMeIcon/>
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircleIcon/>
                    <ExpandMoreIcon/>
                </div>
            </div>
            {textarea?<LiveVideo/>:""}
        </div>
    )
}

export default Post
