import React from 'react'
import './SideBar.css'
import { AssistantPhoto, Group, Message, Storefront, VideoLibrary, KeyboardArrowDown } from '@mui/icons-material'
import SidebarRow from './SidebarRow/SidebarRow'


const SideBar = () => {
    return (
        <div className='sidebar'>
            <SidebarRow src='https://avatars.githubusercontent.com/u/103167179?v=4' title='Mouse' />
            <SidebarRow Icon={Group} title='Friends' />
            <SidebarRow Icon={Message} title='Messages' />
            <SidebarRow Icon={AssistantPhoto} title='Pages' />
            <SidebarRow Icon={VideoLibrary} title='Videos' />
            <SidebarRow Icon={Storefront} title='MarketPlace' />
            <SidebarRow Icon={KeyboardArrowDown} title='Show More' />
        </div>
    )
}

export default SideBar  