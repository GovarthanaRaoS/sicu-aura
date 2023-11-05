import React, { useState } from 'react'
import Signup from '../Pages/Signup';
import Login from '../Pages/Login';
import { NavLink, useNavigate } from 'react-router-dom';

const HomeLayout = () => {

    const [currentForm, setCurrentForm] = useState('signup');
    const [isSignUpActive, setIsSignUpActive] = useState(true);
    const [isLoginUpActive, setIsLoginUpActive] = useState(false);
    const navigate = useNavigate();

    const toggleForm = (formName) =>{
        setCurrentForm(formName);
        if(formName==='signup'){
            setIsSignUpActive(true);
            setIsLoginUpActive(false);
        }else{
            setIsSignUpActive(false);
            setIsLoginUpActive(true);
        }

    }

    const handleLoginFormClick = () =>{
        toggleForm('login');
    }

    const handleSignupFormClick = () =>{
        toggleForm('signup');

    }

  return (
    <div className='homelayout-container'>
        <div className="left-container">
            <div className="sicu-logo"></div>
            <div className="text">Feel <span className='green'>Safe</span> Everywhere</div>
            <div className="text-small">#Safe-<span className='green'>T</span>-Fast</div>
        </div>
        <div className="right-container">
            <div className="header-container">
                <div className="sicu-hospital-logo"></div>
                <div className="sign-log-text-container">
                <span className={isSignUpActive?'isActive':'notActive'} onClick={handleSignupFormClick}>Sign-up </span>/ <span className={isLoginUpActive?'isActive':'notActive'} onClick={handleLoginFormClick}>Login</span>
                </div>
            </div>
            <div className="sign-login-container">
                {currentForm === 'signup' ? <Signup onFormSwitch={toggleForm} setSignupActiveOrInactive={setIsSignUpActive}/> : <Login onFormSwitch={toggleForm} setLoginActiveOrInactive={setIsLoginUpActive}/>}
            </div>
            <footer><p>* Terms & Conditions | Privacy policy</p></footer>
        </div>
    </div>
  )
}

export default HomeLayout