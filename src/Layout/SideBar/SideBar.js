import React from 'react'
import './SideBar.css'
// import { LocalHospital, AssistantPhoto, Group, Message, Storefront, VideoLibrary, KeyboardArrowDown } from '@mui/icons-material'
import {
    // IconButton ,
    Avatar } from '@mui/material'
import SidebarRow from './SidebarRow/SidebarRow'


const SideBar = () => {
    return (
        <div className='sidebar'>
            <h4>SideBar</h4>
            <div className="header__info">
                <Avatar />
                <h4>USER</h4>

                {/* <IconButton>
                <LocalHospital fontSize='large' />
            </IconButton>
            <IconButton>
                <AssistantPhoto fontSize='large' />
            </IconButton>
            <IconButton>
                <Group fontSize='large' />
            </IconButton>
            <Message fontSize='large' />
            <IconButton>
                <Storefront fontSize='large' />
            </IconButton>
            <IconButton>
                <VideoLibrary fontSize='large' />
            </IconButton>
            <IconButton>
                <KeyboardArrowDown fontSize='large' />
            </IconButton> */}

                {/* <SidebarRow title='Pages' /> */}
                {/* <SidebarRow title='Friends' />
                <SidebarRow title='Groups' />
                <SidebarRow title='MarketPlace' />
                <SidebarRow title='Watch' /> */}
            </div>
        </div>
    )
}

export default SideBar  