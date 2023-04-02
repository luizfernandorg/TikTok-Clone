import React, {useState} from 'react'
import "./VideoSidebar.css"
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';

function VideoSidebar({likes,messages,shares}) {
    const [liked, setLiked] = useState(false)
    
    function handdleLike(){
        setLiked(!liked);
    }

    return (
        <div className="videoSidebar">
            <div className="videoSidebar__options" onClick={handdleLike}>
                { liked ? <FavoriteBorderIcon font-size="large"/> : <FavoriteIcon/>}
                <p>{ liked ? likes : likes + 1 }</p>
            </div>
            <div className="videoSidebar__options">
            <ChatIcon font-size="large"/>
                <p>{messages}</p>
            </div>
            <div className="videoSidebar__options">
                <ShareIcon font-size="large"/>
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar