import { Box, Button, Img } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import "./mainGame.css"
import sky from "./Sky_cloud.png"
import croco from "./Croco.png"
import myAudioFile from './audio.mp3';
import beach from "./beach.mp3"
import {RxSpeakerLoud ,RxSpeakerOff } from "react-icons/rx"
import { StackBox } from '../Components/StackBox'



const MainGame = () => {
    const [value , setValue] = useState(false)
    const [increaseCount , setIncreaseCount] = useState(5)

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
    
 const handleCount = ()=>{
  setIncreaseCount((prev)=>prev+1)

 }
 console.log(increaseCount)
 


  const volumeButtonStyle={
    border:"2px solid #ffff" , fontSize:"22px" , borderRadius:"100%" ,padding:"10px" , cursor:"pointer" ,backgroundColor:"black",color:"#ffff"
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

      <Box zIndex="10" position="absolute"  right="15px" top="10px">{value ?  <RxSpeakerLoud onClick={handlePauseClick} style={volumeButtonStyle} /> : <RxSpeakerOff onClick={handlePlayClick} style={volumeButtonStyle} /> } </Box>
        


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

      
      {/*  Stack game of student-----------------------  */}
       
       <Box position="absolute" bottom="130px" left="40px" border="2px solid black" height="400px" zIndex="4">
          {
            Array(increaseCount).fill('').map((_,i)=>{
              return (

                <StackBox count={i+1}  key={i}/>
            )
            })
          }
       </Box>
          <Button position="absolute" onClick={handleCount} bottom="130px" left="240px">hello</Button>
      

         

        

        </Box>
       
    </Box>
  )
}

export  {MainGame}
