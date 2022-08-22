import React from 'react'
import { Link } from 'react-router-dom'

const Login_Page = () => {
    return (
        <div className='login-page-main-div'>
            <h1>LogIn Form</h1>
            <form className="login-page-main-div__div">
                <div className="login-page-main-div__inputs">
                    <label htmlFor="username">User Name</label>
                    <input type="text" name='username' placeholder='User Name' className='login-page-main-div__input' />
                </div>
                <div className="login-page-main-div__inputs">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='Password' className='login-page-main-div__input' />
                </div>
                <div>
                    <button>LogIn</button>
                </div>
                <span className='form-input-login'>
                    If you don,t have an account ? SignUp <Link to='/'><button >Sign-Up</button></Link>
                </span>
            </form>
        </div>
    )
}

export default Login_Page