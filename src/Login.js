import Button from '@mui/material/Button';
import React from 'react';
import { auth, provider } from './firebase';
import './Login.css';
import { actionTypes } from './reducer';
import image from './saksham.jpg';
import { useStateValue } from './StateProvider';




function Login() {
   
    const [state,dispatch]=useStateValue();
    console.log('v3 transfer data');
    const signIn=()=>{
        console.log('Login state is ', state);
     // console.log(auth,provider)
      auth.signInWithPopup(provider).then((result)=>{
            console.log('coming from login dispatch 1' );
          //console.log('result in login is',result );
          dispatch({   //dispatch pushes the data back to data layer i.e context parent
              type:actionTypes.SET_USER,
              user:result.user
          })
      }).catch((err)=>alert(err.message))

    };
    return (
        <div className="login">
            <div className="login__logo">
              
                {/* <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt="facebook_logo"/> */}
                <h3>Patent from @Saksham</h3>
                  <img className="saksham" src={image}/>
                <img  src="https://www.freeiconspng.com/thumbs/facebook-logo-png/facebook-text-logo-transparent-10.png" alt="facebook_text"/>
            </div>
            <Button variant="contained" type="submit" onClick={signIn}>Sign In</Button>
    
        </div>
    )
}

export default Login
