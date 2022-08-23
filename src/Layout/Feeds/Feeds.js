import React from 'react'
import StoryReel from './StoryReels/StoryReel'
import MessageSender from './MessageSender/MessageSender'
import Post from './Post/Post'
import Story1 from '../../utility/images/story1.jpg'
import Story2 from '../../utility/images/story2.jpg'
import './Feeds.css'


const Feeds = () => {
    return (
        <div className='feeds'>
            <StoryReel />
            <MessageSender />

            <Post profilePic='https://avatars.githubusercontent.com/u/103167179?v=4' message='Wow This Works'
                timStamp='This is TimeStamp' userName='Neo' image={Story1} />
            <Post profilePic='https://avatars.githubusercontent.com/u/103167179?v=4' message='Wow This Works'
                timStamp='This is TimeStamp' userName='Mouse' image={Story2} />
        </div>
    )
}

export default Feeds