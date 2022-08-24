import React from 'react'
import './Header.css'
import { Search, Home, Flag, Tv, Storefront, Groups, List, Message, Notifications } from '@mui/icons-material'
import fbImg from '../../utility/Logo/fb-logo.png'
import { IconButton, Avatar } from '@mui/material'

const Header = () => {
    return (
        <div className='header'>
            <div className="header__left">
                <img src={fbImg} alt="Logo" />
                <div className="header__input">
                    <Search />
                    <input type="text" placeholder='Search Facebook' />
                </div>
            </div>
            <div className="header__center">
                <div className="header__option header__option--active "><Home fontSize='large' /></div>
                <div className="header__option"><Flag fontSize='large' /></div>
                <div className="header__option"><Tv fontSize='large' /></div>
                <div className="header__option"><Storefront fontSize='large' /></div>
                <div className="header__option"><Groups fontSize='large' /></div>
            </div>

            <div className="header__right">
                <IconButton>
                    <div className="header__info"><List fontSize='large' /></div>
                </IconButton>
                <IconButton>
                    <div className="header__info"><Message fontSize='large' /></div>
                </IconButton>
                <IconButton>
                    <div className="header__info"><Notifications fontSize='large' /></div>
                </IconButton>
                <div className="header__info">
                    <Avatar />
                    <h4>User</h4>
                </div>
            </div>
        </div>
    )
}

export default Header