import React, {useRef,useState} from 'react'
import './video.css'

function Video() {
    const videoRef = useRef(null);
    const [play, setPlay] = useState(false)

    function handleStart(){
    
        if(play) {
            videoRef.current.pause()
            setPlay(false)
        } else {
            videoRef.current.play()
            setPlay(true)
        }
    }
    return (
        <div className='video'>
            <video 
                className='video__player'
                src="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/brecker2.mp4?alt=media&token=d1a44acd-bef3-4b18-bafe-92fa0b26828a"
                ref={videoRef}
                onClick={handleStart}
                loop
            >

            </video>
        </div>
  )
}

export default Video