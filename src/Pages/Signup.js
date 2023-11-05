import React, { useState } from 'react'
import SignupPopup from '../Components/SignupPopup';

const Signup = (props) => {

    const [hospitalName, setHospitalName] = useState('');
    const [hNameIsActive,setHNameIsActive] = useState(false);

    const [emailID, setEmailID] = useState('');
    const [isEmailActive,setIsEmailActive] = useState(false);

    const [address, setAddress] = useState('');
    const [isAddressActive, setIsAddressActive] = useState(false);

    const [phoneno, setPhoneno] = useState('');
    const [isPhoneNoActive, setIsPhoneNoActive] = useState(false);

    const [city, setCity] = useState('');
    const [isCityActive, setIsCityActive] = useState('');

    const [hospitalRegistrationNo, setHospitalRegistrationNo] = useState('');
    const [isHospitalRegNoActive, setIsHospitalRegNoActive] = useState(false);

    const [state, setState] = useState('');
    const [isStateActive, setIsStateActive] = useState(false);

    const [emergencyWardNumber, setEmergencyWardNumber] = useState('');
    const [isEmergencyWardNumActive, setIsEmergencyWardNumActive] = useState(false);

    const [pincode, setPincode] = useState('');
    const [isPincodeActive, setisPincodeActive] = useState(false);

    const [registrationCertificate, setRegistrationCertificate] = useState(null);
    const [isFileChosen,setIsFileChosen] = useState(false);

    const [registrationDate, setRegistrationDate] = useState('');

    const [password, setPassword] = useState('');
    const [isPasswordActive, setIsPasswordActive] = useState(false);

    const [confirmPassword, setConfirmPassword] = useState('');
    const [isConfirmPasswordActive, setIsConfirmPasswordActive] = useState(false);

    const [noOfAmbulance, setNoOfAmbulance] = useState('');
    const [isAmbActive, setIsAmbActive] = useState(false);

    const [isSignUpClicked, setIsSignUpClicked] = useState(false);

    const [signUpSuccessPopup, setSignUpSuccessPopup] = useState(false);

    const [formData, setFormData] = useState({
        hospital_name: '',
        email_ID: '',
        hospitalAddress: '',
        phone_number: '',
        city_name: '',
        hospital_registration_number: '',
        state_name: '',
        emergency_ward_number: '',
        pincode: '',
        registration_certificate: '',
        hospital_registration_date: '',
        password: '',
        confirm_password: '',
        number_of_ambulance_available: 0
    });

    const email_regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const phone_regex = /^[0-9\b]+$/;
    const name_regex = /^[a-zA-Z]+$/;

    // const today = new Date();
    // const currentMonth = today.getMonth()+1;
    // const currentDay = today.getDate().toString();
    // const currentYear = today.getFullYear().toString();

    // const max_date = `${currentYear}-${currentMonth}-${currentDay}`;

    function validationCheck(){
        if(hospitalName.length>=3 && name_regex.test(hospitalName) && emailID.length !==0 && email_regex.test(emailID) && address.length>0 && phoneno.length === 10 && phone_regex.test(phoneno) && city.length>1 && name_regex.test(city) && state.length>2 && name_regex.test(state) && emergencyWardNumber.length>4 && pincode.length === 6 && phone_regex.test(pincode) && registrationCertificate !== null && registrationDate.length>0 && password.length>=8 && password.length<=25 && noOfAmbulance>=0 && noOfAmbulance<=1000 && confirmPassword === password){
            return true;
        }else{
            return false;
        }
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        setIsSignUpClicked(true);

        // setFormData(prev=>{
        //     return{
        //         ...prev,
        //         hospital_name: hospitalName,
        //         email_ID: emailID,
        //         hospitalAddress: address,
        //         phone_number: phoneno,
        //         city_name: city,
        //         hospital_registration_number: hospitalRegistrationNo,
        //         state_name: state,
        //         emergency_ward_number: emergencyWardNumber,
        //         pincode: pincode,
        //         registration_certificate: registrationCertificate,
        //         hospital_registration_date: registrationDate,
        //         password: password,
        //         confirm_password: confirmPassword,
        //         number_of_ambulance_available: noOfAmbulance
        //     }
        // })
        // console.log(formData);

        console.log('Isvalid: ',validationCheck());
        if(validationCheck()){
            console.log(formData);
            setSignUpSuccessPopup(true);
            setTimeout(()=>{
                setSignUpSuccessPopup(false);
                props.onFormSwitch('login');
            },3000)
        }else{
            console.log('Invalid')
        }
    }

    const handleUploadFile = (event) =>{
        setRegistrationCertificate(event.target.files[0]);
        setIsFileChosen(true);
        console.log(registrationCertificate)
    }

  return (
      <div className='signup-container'>
        <form className='signup-form-container' onSubmit={handleSubmit}>
            <div className="hospital-name-container">
                <input type="text" className={hNameIsActive?'focused':'notFocused'} placeholder='Hospital Name' onFocus={(e)=>setHNameIsActive(true)} onBlur={(e)=>setHNameIsActive(false)} onChange={(e)=>setHospitalName(e.target.value)}/>
                {isSignUpClicked && hospitalName.length===0 && <div className="error-message">Hospital name is required</div>}
                {isSignUpClicked && hospitalName.length>0 && hospitalName.length<=2 && <div className="error-message">Hospital name must be greater than 2 characters</div>}
                {isSignUpClicked && hospitalName.length>0 && hospitalName.length>2 && !name_regex.test(hospitalName) && <div className="error-message">Hospital name must not container numbers or special characters</div>}
            </div>

            <div className="email-container">
                <input type="email" placeholder='Email ID' className={isEmailActive?'focused':'notFocused'} onFocus={(e)=>setIsEmailActive(true)} onBlur={(e)=>setIsEmailActive(false)} onChange={(e)=>setEmailID(e.target.value)} />
                {isSignUpClicked && emailID.length===0 && <div className="error-message">Email ID is required</div>}
                {isSignUpClicked && emailID.length>0 && !email_regex.test(emailID) && <div className="error-message">Invalid Email pattern</div>}
            </div>

            <div className="address-container">
                <input type="text" placeholder='Address' className={isAddressActive?'focused':'notFocused'} onFocus={(e)=>setIsAddressActive(true)} onBlur={(e)=>setIsAddressActive(false)} onChange={(e)=>setAddress(e.target.value)} />
                {isSignUpClicked && address.length===0 && <div className="error-message">Address is required</div>}
            </div>

            <div className="phoneno-container">
                <input type="text" placeholder='Phone Number' className={isPhoneNoActive?'focused':'notFocused'} onFocus={(e)=>setIsPhoneNoActive(true)} onBlur={(e)=>setIsPhoneNoActive(false)} onChange={(e)=>setPhoneno(e.target.value)} />
                {isSignUpClicked && phoneno.length===0 && <div className="error-message">Phone number is required</div>}
                {isSignUpClicked && phoneno.length>0 && (phoneno.length<10 || phoneno.length>10) && <div className="error-message">Invalid Phone number</div>}
                {isSignUpClicked && phoneno.length>0 && !phone_regex.test(phoneno) && <div className="error-message">Phone Number must not contain characters</div>}
            </div>

            <div className="city-container">
                <input type="text" placeholder='City' className={isCityActive?'focused':'notFocused'} onFocus={(e)=>setIsCityActive(true)} onBlur={(e)=>setIsCityActive(false)} onChange={(e)=>setCity(e.target.value)} />
                {isSignUpClicked && city.length===0 && <div className="error-message">City is required</div>}
                {isSignUpClicked && city.length>0 && city.length<2 && <div className="error-message">City must be atleast 2 characters long</div>}
                {isSignUpClicked && city.length>0 && city.length>=2 && !name_regex.test(city) && <div className="error-message">City must not container numbers or special characters</div>}
            </div>

            <div className="registration-number-container">
                <input type="text" placeholder='Hospital Registration Number' className={isHospitalRegNoActive?'focused':'notFocused'} onFocus={(e)=>setIsHospitalRegNoActive(true)} onBlur={(e)=>setIsHospitalRegNoActive(false)} onChange={(e)=>setHospitalRegistrationNo(e.target.value)} />
                {isSignUpClicked && hospitalRegistrationNo.length===0 && <div className="error-message">Hospital Registration Number is required</div>}
                {isSignUpClicked && hospitalRegistrationNo.length>0 && hospitalRegistrationNo.length<5 && <div className="error-message">Registration number must be atleast 5 characters long</div>}
            </div>

            <div className="state-container">
                <input type="text" placeholder='State' className={isStateActive?'focused':'notFocused'} onFocus={(e)=>setIsStateActive(true)} onBlur={(e)=>setIsStateActive(false)} onChange={(e)=>setState(e.target.value)} />
                {isSignUpClicked && state.length===0 && <div className="error-message">State is required</div>}
                {isSignUpClicked && state.length>0 && state.length<3 && <div className="error-message">State must be atleast 3 characters long</div>}
                {isSignUpClicked && state.length>0 && state.length>=3 && !name_regex.test(state) && <div className="error-message">State must not container numbers or special characters</div>}
            </div>

            <div className="emergency-ward-number-container">
                <input type="text" placeholder='Emergency Ward Number' className={isEmergencyWardNumActive?'focused':'notFocused'} onFocus={(e)=>setIsEmergencyWardNumActive(true)} onBlur={(e)=>setIsEmergencyWardNumActive(false)} onChange={(e)=>setEmergencyWardNumber(e.target.value)} />
                {isSignUpClicked && emergencyWardNumber.length===0 && <div className="error-message">Emergency ward number is required</div>}
                {isSignUpClicked && emergencyWardNumber.length>0 && emergencyWardNumber.length<5 && <div className="error-message">Emergency ward number must be atleast 5 characters long</div>}
            </div>

            <div className="pincode-container">
                <input type="text" placeholder='Pincode' className={isPincodeActive?'focused':'notFocused'} onFocus={(e)=>setisPincodeActive(true)} onBlur={(e)=>setisPincodeActive(false)} onChange={(e)=>setPincode(e.target.value)} />
                {isSignUpClicked && pincode.length===0 && <div className="error-message">Pincode is required</div>}
                {isSignUpClicked && pincode.length>0 && (pincode.length<6 || pincode.length>6) && <div className="error-message">Invalid Pincode</div>}
                {isSignUpClicked && pincode.length>0 && !phone_regex.test(pincode) && <div className="error-message">Pincode must not contain characters</div>}
            </div>

            <div className="reg-certificate-container">
                <label htmlFor="file-upload" className="custom-file-upload">
                    Upload Registration Certificate
                </label>
                <input id="file-upload" type="file" onChange={handleUploadFile}/>
                {isSignUpClicked && registrationCertificate===null && <div className="error-message-reg">Registration certificate is required</div>}
            </div>
            <div className="reg-date-container">

                <span className="reg-date">Hospital Registration Date - </span>
                <br />
                <input type="date" placeholder='Hospital Registration Date' onChange={(e)=>setRegistrationDate(e.target.value)} />
                {isSignUpClicked && registrationDate.length===0 && <div className="error-message-reg">Registration date is required</div>}
            </div>

            <div className="password-container">
                <input type="password" placeholder='Create Password' className={isPasswordActive?'focused':'notFocused'} onFocus={(e)=>setIsPasswordActive(true)} onBlur={(e)=>setIsPasswordActive(false)} onChange={(e)=>setPassword(e.target.value)} />
                {isSignUpClicked && password.length===0 && <div className="error-message">Password is required</div>}
                {isSignUpClicked && password.length>0 && (password.length<8 || password.length>25) && <div className="error-message">Password must be atleast 8 characters long and not greater than 25 characters</div>}
            </div>

            <div className="noOfAmb-container">
            <input type="number" placeholder='Number of Ambulance available' min={0} max={1000} className={isAmbActive?'focused':'notFocused'} onFocus={(e)=>setIsAmbActive(true)} onBlur={(e)=>setIsAmbActive(false)} onChange={(e)=>setNoOfAmbulance(e.target.value)} />
            {isSignUpClicked && noOfAmbulance.length===0 && <div className="error-message">Enter number of available ambulances</div>}
            {isSignUpClicked && noOfAmbulance<0 && <div className="error-message">Available ambulance cannot be less than 0</div>}
            {isSignUpClicked && noOfAmbulance>1000 && <div className="error-message">Available ambulance cannot be greater than 1000</div>}
            </div>

            <div className="confirm-password-container">
                <input type="password" placeholder='Confirm Password' className={isConfirmPasswordActive?'focused':'notFocused'} onFocus={(e)=>setIsConfirmPasswordActive(true)} onBlur={(e)=>setIsConfirmPasswordActive(false)} onChange={(e)=>setConfirmPassword(e.target.value)} />
                {isSignUpClicked && confirmPassword.length===0 && <div className="error-message">Confirm your password</div>}
                {isSignUpClicked && confirmPassword.length>0 && confirmPassword !== password && <div className="error-message">Password does not match</div>}
            </div>

            <div className="submit-container">
                <button className='signupButt' type='submit'>Signup</button>
            </div>
        </form>
        <SignupPopup trigger={signUpSuccessPopup} setTrigger={setSignUpSuccessPopup}>
            <div className="checkmark"></div>
            <h3 className='registration-success'>Your registration has been successfull</h3>
        </SignupPopup>
    </div>
  )
}

export default Signup