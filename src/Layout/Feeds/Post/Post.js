import React from 'react'
import { Avatar } from '@mui/material'
import { ThumbUp, Share, Message } from '@mui/icons-material'
import './Post.css'

const Post = ({ profilePic, image, userName, timeStamp, message }) => {
    return (
        <div className='post'>
            <div className="post__top">
                <Avatar src={profilePic, message} className='post__avatar' />
                <div className="post__topInfo">
                    <h3>{userName}</h3>
                    <p>TimStamp...</p>
                </div>
            </div>
            <div className="post__bottom">
                <p>{message}</p>
            </div>
            <div className="post__image" style={{ overflow: "hidden" }}>
                <img src={image} alt="" />
            </div>
            <div className="post__options">
                <div className="post__option">
                    <ThumbUp />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <Message />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <Share />
                    <p>Share</p>
                </div>
                <div className="post__option">

                </div>
                <div className="post__option">

                </div>
            </div>
        </div>
    )
}

export default Post