import React, { useState } from 'react'
import { VideoCameraBack, PhotoLibrary, InsertEmoticon } from '@mui/icons-material';
import { Avatar } from '@mui/material'
import "./MessageSender.css"

const MessageSender = () => {
    const [input, setInput] = useState('')
    const [imageURL, setImageURL] = useState('')
    const handelSubmit = e => {
        e.preventDefault();

        // Some claver DB stuff
        setImageURL('');
        setInput('')
    }
    return (
        <div className='messageSender'>
            <div className="messageSender__top">
                <Avatar />
                <form>
                    <input value={input} onChange={(e) => { setInput(e.target.value) }} type="text" placeholder='Whats on Your Mind ?' />
                    <input value={imageURL} type="url" placeholder='Image URL (Optional)' />
                    <button onClick={handelSubmit} type='submit'>Post</button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideoCameraBack style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibrary style={{ color: 'green' }} />
                    <h3 className='icon-text'>Photos/Videos</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticon style={{ color: 'orange' }} />
                    <h3 className='icon-text'>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender