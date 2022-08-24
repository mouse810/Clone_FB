import React from 'react'
import './SignUpPage.css'
import { Link } from 'react-router-dom'


const Signed_Page = () => {
    return (
        <div className='signUp-Page'>
            div
            <h1>SignUp Form</h1>
            <form className='signUp-Page__form'>
                <div className="signUp-Page__form-inputs">
                    <div className="signUp-Page__input">
                        <label htmlFor="f_Name">First Name</label>
                        <input type="text" name='f_Name' placeholder='First name' />
                    </div>
                    <div className="signUp-Page__input">
                        <label htmlFor="l_Name">Lsat Name</label>
                        <input type="text" name='l_Name' placeholder='Last Name' />
                    </div>
                    <div className="signUp-Page__input">
                        <label htmlFor="email">E-Mail</label>
                        <input type="email" name='email' placeholder='E-mail' />
                    </div>
                    <div className="signUp-Page__input">
                        <label htmlFor="password">Enter Password</label>
                        <input type="password" name='password' placeholder='Enter Password' />
                    </div>
                    <div className="signUp-Page__input">
                        <label htmlFor="cnf-password">Confirm Password</label>
                        <input type="password" name='cnf-password' placeholder='Confirm Password' />
                    </div>
                    <div className="signUp-Page__input">
                        <label htmlFor="contact">Mobile-No</label>
                        <input type="number" name='contact' placeholder='Your Mobil-No' />
                    </div>
                    <div className="signUp-Page__btn">
                        <button>SignUp</button>
                    </div>
                    <span className="signUp-Page__span">
                        Already have an account? Login <Link to='/login'><button>Login</button></Link>
                    </span>
                </div>
            </form>
        </div>
    )
    
}

export default Signed_Page; 