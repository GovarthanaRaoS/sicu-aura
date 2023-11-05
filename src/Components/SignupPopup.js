import React from 'react'

const SignupPopup = (props) => {
  return (props.trigger) ? (
    <div className='popup-container'>
        <div className="popup-inner">
            {/* <button className='closeButt' onClick={()=>props.setTrigger(false)}>Close</button> */}
            
            {props.children}
        </div>
    </div>
  ) : ''
}

export default SignupPopup