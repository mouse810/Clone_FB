import { Avatar } from '@mui/material'
import React from 'react'

const Stories = (image, profileSrc, title) => {
    return (
        <div className='stories'>
            <Avatar src={profileSrc} />
            <h4>{title}</h4>
        </div>
    )
}

export default Stories