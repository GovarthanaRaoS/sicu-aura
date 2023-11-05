import React, { useCallback, useEffect, useRef, useState } from 'react';
import Webcam from "react-webcam";
import html2canvas from 'html2canvas';

const CamReact = () => {

    const webCamRef = useRef(null);
    const [hasWebCam, setHasWebCam] = useState(null);

    useEffect(()=>{

        async function checkWebCam(){

            try{

                const stream = await navigator.mediaDevices.getUserMedia({video: true});
                if(stream){
                    setHasWebCam(true);
                    stream.getTracks().forEach((track)=>track.stop());
                }

            }catch(error){
                setHasWebCam(false);
            }

        }

        checkWebCam();

    },[])

  return (
    <div className='webcam-container'>
        <h2>Turn on your webcam to take your photo</h2>
        {hasWebCam === null ? <span>Has Webcam</span> : <span>Does not have webcam</span>}
        <div className="button-container">
            <button>Re-take</button><button>Continue</button>
        </div>
    </div>
  )
}

export default CamReact