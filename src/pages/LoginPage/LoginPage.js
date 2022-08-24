import React from 'react'
import './LoginPage.css'
// import { Link } from 'react-router-dom'
import FB_Logo from '../../utility/Logo/fb-logo.png'
import FB_Text_Logo from '../../utility/Logo/text-logo.png'
import { Button } from '@mui/material'

const Login_Page = () => {
   
    
    return (
        <div className='login'>
            <div className="login__logo">
                <img src={FB_Logo} alt="Fb-Logo" />
                <img src={FB_Text_Logo} alt="Text FaceBook Logo" />
                <Button  type='submit'  variant='contained' color='primary'>SignUp</Button>

            </div>
            {/* <form className="login-page-main-div__div">
                <div className="login-page-main-div__inputs">
                    <label htmlFor="username">User Name</label>
                    <input type="text" name='username' placeholder='User Name' className='login-page-main-div__input' />
                </div>
                <div className="login-page-main-div__inputs">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='Password' className='login-page-main-div__input' />
                </div>
                <div>
                    <Button type='submit' onClick={signIn} >SignUp</Button>
                </div>
                <span className='form-input-login'>
                    If you don,t have an account ? SignUp <Link to='/'><button >Sign-Up</button></Link>
                </span>
            </form> */}
        </div>
    )
}

export default Login_Page