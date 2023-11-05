import React, { useState } from 'react'
import CamReact from './Webcam';

const Login = () => {

  const [loginHospitalName, setLoginHospitalName] = useState('');
  const [isHospitalNameActive, setIsHospitalNameActive] = useState(false);

  const [loginEmailId, setLoginEmailId] = useState('');
  const [isEmailActive, setIsEmailActive] = useState(false);

  const [loginPassword, setLoginPassword] = useState('');
  const [isLoginPasswordActive, setIsLoginPasswordActive] = useState(false);

  const [specialAccessCode, setSpecialAccessCode] = useState('');
  const [isSpecialAccessCodeActive, setIsSpecialAccessCodeActive] = useState(false);

  const [isLoginClicked, setIsLoginClicked] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const [loginFormData, setLoginFormData] = useState(
    {
      login_hospital_name: loginHospitalName,
      login_email_ID: loginEmailId,
      login_password: loginPassword,
      special_access_code: specialAccessCode
    }
    );

  const email_regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const phone_regex = /^[0-9\b]+$/;
  const name_regex = /^[a-zA-Z]+$/;

  function validationCheck(){

    if(loginHospitalName.length>2 && name_regex.test(loginHospitalName) && email_regex.test(loginEmailId) && loginPassword.length>=8 && loginPassword.length<=25 && specialAccessCode.length>4){
      return true;
    }else{
      return false;
    }

  }

  const handleLoginSubmit = (event) =>{
    event.preventDefault();
    setIsLoginClicked(true);
    if(validationCheck()){
      console.log('Valid');
      setIsValid(true);
    }else{
      console.log('Invalid');
    }
  } 

  return (
    <div className='login-container'>
      {!isValid ? 
      <form className="login-form-container" onSubmit={handleLoginSubmit}>
        <div className="log-form-div-container">
          <div className="log-head-container">
            <h3 className='login-head'>Welcome to Sicu-aura</h3>
            <small className='small-logo'>Your one stop safety solutions using innovative technology</small>
          </div>
          <div className="login-hospital-name-container">
            <input type="text" className={isHospitalNameActive?'focused':'notFocused'} placeholder='Hospital Name' onFocus={(e)=>setIsHospitalNameActive(true)} onBlur={(e)=>setIsHospitalNameActive(false)} onChange={(e)=>setLoginHospitalName(e.target.value)}/>
            {isLoginClicked && loginHospitalName.length === 0 && <div className="error-message">Hospital name is required</div>}
            {isLoginClicked && loginHospitalName.length>0 && loginHospitalName.length<=2 && <div className="error-message">Hospital name must be greater than 2 characters</div>}
            {isLoginClicked && loginHospitalName.length>0 && loginHospitalName.length>2 && !name_regex.test(loginHospitalName) && <div className="error-message">Hospital name must not container numbers or special characters</div>}
          </div>
          <div className="login-email-container">
            <input type="email" className={isEmailActive?'focused':'notFocused'} placeholder='Email ID' onFocus={(e)=>setIsEmailActive(true)} onBlur={(e)=>setIsEmailActive(false)} onChange={(e)=>setLoginEmailId(e.target.value)}/>
            {isLoginClicked && loginEmailId.length===0 && <div className="error-message">Email ID is required</div>}
            {isLoginClicked && loginEmailId.length>0 && !email_regex.test(loginEmailId) && <div className="error-message">Invalid Email pattern</div>}
          </div>
          <div className="login-password-container">
            <input type="password" className={isLoginPasswordActive?'focused':'notFocused'} placeholder='Password' onFocus={(e)=>setIsLoginPasswordActive(true)} onBlur={(e)=>setIsLoginPasswordActive(false)} onChange={(e)=>setLoginPassword(e.target.value)}/>
            {isLoginClicked && loginPassword.length===0 && <div className="error-message">Password is required</div>}
            {isLoginClicked && loginPassword.length>0 && (loginPassword.length<8 || loginPassword.length>25) && <div className="error-message">Password must be atleast 8 characters long and not greater than 25 characters</div>}
          </div>
          <div className="login-special-access-code-container">
            <input type="text" className={isSpecialAccessCodeActive?'focused':'notFocused'} placeholder='Special Access Code' onFocus={(e)=>setIsSpecialAccessCodeActive(true)} onBlur={(e)=>setIsSpecialAccessCodeActive(false)} onChange={(e)=>setSpecialAccessCode(e.target.value)}/>
            {isLoginClicked && specialAccessCode.length===0 && <div className="error-message">Special Access Code is required</div>}
            {isLoginClicked && specialAccessCode.length>0 && specialAccessCode.length<5 && <div className="error-message">Special Access Code must be atleast 5 characters long</div>}
          </div>
        </div>
        <div className="login-button-container">
          <button className='loginButt'>Login</button>
        </div>
      </form> : <CamReact/>}
    </div>
  )
}

export default Login