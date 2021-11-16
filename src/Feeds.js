import React, { useEffect, useState } from 'react';
import './Feeds.css';
import db from './firebase';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';

function Feeds() {
    const [posts,setPosts]=useState([]);
    useEffect(() => {
        db.collection("posts").orderBy("timeStamp","desc").onSnapshot((snapshot)=>setPosts(snapshot.docs.map((doc)=>({id:doc.id,data:doc.data()}))))
       //onSnapshot listens for any changes and once it gets any change it re-renders
    }, [])
    return (
        <div className="feeds">
            <StoryReel/>
            <MessageSender/>
            {posts.map((post)=>(
                //console.log('post is',post)
                <Post key={post.id} profilePic={post.data.profilePic} message={post.data.message} timestamp={post.data.timeStamp} username={post.data.username} image={post.data.image}/>
            ))}
            {/* <Post profilePic="https://pbs.twimg.com/profile_images/1248487282090201089/7hNnkVaT.jpg" message="Looks great DB!!!" image="https://tesla-cdn.thron.com/delivery/public/image/tesla/acf2a27a-c360-4e77-9e81-f91ec4dd5eb1/bvlatuR/std/2452x1336/lhd-interior-carousel-2-slide-4-desktop-1" username="Sakshampandey" timestamp="Few seconds ago"/>
            <Post profilePic="https://i.ytimg.com/vi/M11SvDtPBhA/maxresdefault.jpg" message="Awesome" image="https://images.pexels.com/photos/414102/pexels-photo-414102.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 " username="jordan@hotmail.com" timestamp="an hour back"/>
            <Post profilePic="https://hips.hearstapps.com/vidthumb/images/selenagomez-career-1593029053.jpg?crop=1.00xw%3A1.00xh%3B0%2C0&resize=480%3A270   " message="Brilliant" image="https://assets.teenvogue.com/photos/617036fbe0c70f3c7f748c05/4:3/w_2514,h_1886,c_limit/1338942022" username="Micheal@hotmail.com" timestamp="an hour back"/> */}
        </div>
    )
}

export default Feeds
