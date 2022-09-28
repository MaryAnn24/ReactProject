import React, { useEffect, useState } from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import jwt_decode from 'jwt-decode';

function HeroSection() {
    const [user, setUser] = useState(false);

    function handleCallbackResponse(response) {
        console.log("Encoded JWT ID Token: " + response.credential);
        var userObject = jwt_decode(response.credential);
        console.log(userObject);
        setUser(userObject);
        document.getElementById("signInDiv").hidden = true;
    }
    function handleSignOut(event) {
        setUser({});
        document.getElementById("signInDiv").hidden = false;
    }
    useEffect(() => {
      /* global google */
      google.accounts.id.initialize({
        client_id: "632569910523-mbe8s4l8ah5paadfaih8dhjf4fg75ng0.apps.googleusercontent.com",
        callback: handleCallbackResponse
      });
  
      google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        {theme: "outline", size: "large"}
      );
      google.accounts.id.prompt();
    }, []);

    

    return (
        <div className='hero-container'>
            
            <video src='/videos/video-2.mp4' autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                GET STARTED
                </Button>
                <Button
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                >
                WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
                <div id="signInDiv"> </div>
                { Object.keys(user).length !== 0 &&
                    <button onClick={ (e) => handleSignOut(e)}>Sign Out</button>
                }
                
                    { user && 
                        <div>
                            <img src={user.picture} alt={user.name} />
                            <h3>{user.name}</h3>
                        </div>
                    }
               
            </div>
        </div>
    );
}

export default HeroSection;