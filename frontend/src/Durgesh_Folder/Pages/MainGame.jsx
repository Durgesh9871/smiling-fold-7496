import { Box, Button, Img } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import "./mainGame.css"
import sky from "./Sky_cloud.png"
import croco from "./Croco.png"
import myAudioFile from './audio.mp3';
import beach from "./beach.mp3"
import {RxSpeakerQuiet ,RxSpeakerOff } from "react-icons/rx"



const MainGame = () => {
    const [value , setValue] = useState(false)

    const audioRef = useRef(null);
    const beachRef = useRef(null)

  const handlePlayClick = () => {
    audioRef.current.play();
    beachRef.current.play();
    setValue(true)
  };

  const handlePauseClick = () => {
    audioRef.current.pause();
    beachRef.current.pause();
    setValue(false)
  };
    
 


  const volumeButtonStyle={
    border:"1px solid black" , fontSize:"22px" , borderRadius:"100%" ,padding:"8px" , cursor:"pointer"
  }

  return (
    <Box className='mainGameBox' overflow="hidden" >
         
        {/*  Water is here ------------- */}
        
        <Box className='waterMain'>
            {/* Audio */}
        <audio src={myAudioFile} loop ref={audioRef} />
        <audio src={beach} loop ref={beachRef} />
      {/* <button onClick={handlePlayClick}>Play</button>
      <button onClick={handlePauseClick}>Pause</button> */}

      <Box >{value ?  <RxSpeakerQuiet onClick={handlePauseClick} style={volumeButtonStyle} /> : <RxSpeakerOff onClick={handlePlayClick} style={volumeButtonStyle} /> } </Box>
        


       <Box  display="flex"   > 
         <Box className='sky'>
            <Img src={sky} alt="sky1" height="250px" />
         </Box>
         <Box className='sky2'>
            <Img src={sky} alt="sky2" height="300px" />
         </Box>
         
        </Box>

         {/* Croco */}
         <Box  >

        <Box className='crocoLunch'> </Box>
        <Box className='crocoLunchRotate'></Box>

        </Box>

       
      

         

        

        </Box>
       
    </Box>
  )
}

export  {MainGame}
