import { Avatar, Button } from '@material-ui/core';
// import firebase from 'firebase/compat/app';
import firebase from 'firebase/compat/app';
// import {database} from 
// 'firebase/database';
// var fbase = require('firebase/database');
// import 'firebase/database';
// import { config, database, auth, itembase, } from 
// 'firebase/database';
import 'firebase/compat/database';
import React, { useEffect, useState } from 'react';
import db from './firebase';
import './LiveVideo.css';
// import IconButton from '@mui/material/IconButton';
import { useStateValue } from './StateProvider';


function LiveVideo() {


     const [{user}]=useStateValue()
    const [data,setdata]=useState("");
     const [show,setshow]=useState(false);
     const [areaDisplay,setareaDisplay]=useState(true);
     const [btn,setbtn]=useState(true);
     const [array,setarray]=useState([]);
    const [comments, setComments]=useState("");
       const [posts,setPosts]=useState([]);

// const deleteMe=useMemo(() => (key,index)=>{
//        console.log('delete me called', key,index);
//         // firebase.database().ref(`comments/${index}/collection/${key}`).childUserRef.remove()
//      const str=   firebase.database().ref('/comments/LhxVElu5nRTNXzJFB3J7jmXizYJ2').remove();
//      console.log('str is',str.then(data=>console.log('data is',data)));

//     }, show)
 
const deleteMe = (user) => {
 var referencePath = `/comments/${user}/`;
 console.log('ref path is',referencePath);
 console.log("saksham_clone inside dev");
 var userReference = firebase.database().ref(referencePath);
  console.log('userReference path is',userReference);

 let str= (new Promise((resolve, reject) => {
  userReference.remove((error) => {
   if (error) {
       console.log('rejected hai');
    reject("Data could not be deleted." + error);
   } else {
              console.log('resolved hai');
    resolve(user);
   }
  }).then(
     res=>console.log('res is',res),rej=>console.log('rej is',rej)
 )
 }))
 
}


    useEffect(() => {
        db.collection("comments").orderBy("timeStamp","desc").onSnapshot((snapshot)=>setComments(snapshot.docs.map((doc)=>({id:doc.id,data:doc.data()}))))
       //onSnapshot listens for any changes and once it gets any change it re-renders
    }, [show])

    const post=()=>{
        setareaDisplay(false);
        setbtn(false)

//  document.getElementById(`flag-${index}`).classList.toggle('on');

    }
  const  imOnChanged=(e)=>{
       //console.log('posts are',posts);
      // console.log('setcomments is', comments[0].data.timeStamp);
    //     console.log('im called',data);
        // setarray(prev=>{console.log('prv value', prev); let temp=prev.push(data) ;return temp})
   // setarray(prev=>prev.concat([data])) // it works fine if you want to push elements inside the compoennet only. belowwe are using firebase
        // array.push(data);
         setshow(true);
         setdata("")
        //  console.log('array is',array);
           db.collection("comments").add({
            comment:data,
            timeStamp:firebase.firestore.FieldValue.serverTimestamp(),
           
        })

    }
 
    return (
        <div>
            {/* {console.log("live video",data)} */}
         
                   {areaDisplay?<input type="submit"  value={data} type="textarea"  onChange={e=>setdata(e.target.value)}   onKeyPress={event => {
                if (event.key === 'Enter') {
                imOnChanged()
                }
              }}/>:""}
           

         {btn==true? <Button className="btn" style={{backgroundColor:"black", color:"white"}} onClick={ post } >
                Press Enter
            </Button>:""}
                <div className="comment">
                      {show?comments.map((item,index)=>(<div className="item">
                           <div className="post__top">
            <Avatar src={user.photoURL} className="post__avatar"/>
            <div className="post__Topinfo">
                {/* {console.log('user is',user)}
                 {console.log('item is',item)} */}
               
                          <p>{new Date(item.data.timeStamp?.toDate()).toUTCString()}</p>
                          {/* {console.log('item is ', item)} */}
                           <h3>{user.displayName}</h3>
                          <h4>{item.data.comment}</h4>
                          <Button onClick={()=>deleteMe(item.id)} style={{color:"white" ,backgroundColor:"black"}}>Delete</Button>
                           </div>  </div> 
                           
                 

                          </div>
                          )):""}
                </div>
         

             {/* <div className="comment">{show?(<div>{array.map(item=>(
                 <div>{item}</div>
             ))}</div>):""}</div> */}
            {/* <div id = {`flag-${index}`}>{show?data:""}</div> */}
        </div>
    )
}

export default LiveVideo;
