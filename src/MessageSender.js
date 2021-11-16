import { Avatar } from '@material-ui/core';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import VideocamIcon from '@mui/icons-material/Videocam';
import firebase from 'firebase/compat/app';
import React, { useState } from 'react';
import db from './firebase';
import './MessageSender.css';
import { useStateValue } from './StateProvider';


function MessageSender() {
    const [{user}]=useStateValue();
    const [input, setInput]=useState("");
    const [image, setImage]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        db.collection("posts").add({
            message:input,
            timeStamp:firebase.firestore.FieldValue.serverTimestamp(),
            profilePic:user.photoURL,
            username:user.displayName,
            image:image,
        })
        setInput("");
        setImage("");

    }
    return (
        <div className="messageSender">
            <div className="messageSender__top">
            <Avatar src={user.photoURL}/>
            <form>
            <input value={input} className="messageSender__input" placeholder={`Whats on your mind, ${user.displayName}?`}onChange={e=>setInput(e.target.value)}/>
           <input value={image} className="messageSender__Url" placeholder="image URL (Optional)" onChange={e=>setImage(e.target.value)}/>
            <button onClick={handleSubmit} type="submit">Hidden Button</button>
            </form>
               </div>
               <div className="messageSender__bottom">
                   <div className="messageSender__option">
                       <VideocamIcon style={{color:'red'}}/>
                       <h3>Live Video</h3>
                   </div>
                   <div className="messageSender__option">
                       <PhotoLibraryIcon style={{color:'green'}}/>
                       <h3>Photo/Video</h3>
                   </div>
                   <div className="messageSender__option">
                       <InsertEmoticonIcon style={{color:'orange'}}/>
                       <h3>Feeling/Activity</h3>
                 </div>
               </div>

        </div>
    )
}

export default MessageSender
