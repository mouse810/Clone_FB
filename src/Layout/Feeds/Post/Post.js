import React from 'react'
import { Avatar } from '@mui/material'
import './Post.css'

const Post = ({ profilePic, image, userName, timeStamp, message }) => {
    return (
        <div className='post'>
            <div className="post__top">
                <Avatar src={profilePic} className='post__avatar' />
                <div className="post__topInfo">
                    <h3>{userName}</h3>
                    <p>TimStamp...</p>
                </div>
            </div>
            <div className="post__bottom">
                <p>{message}</p>
            </div>
            <div className="post__image" style={{overflow:"hidden"}}>
                <img src={image} alt="" />
            </div>
        </div>
    )
}

export default Post