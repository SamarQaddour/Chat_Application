import React from 'react'
import '../style.scss'
import Add from '../img/addAvatar.png'
const Register = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>samar chat</span>
                <span className='title'>Reqister</span>
                <form>
                    <input type='text' placeholder='display name'/>
                    <input type='email' placeholder='email'/>
                    <input type='password' placeholder='password'/>
                    <input style={{display: "none"}} type='file' />
                    <label htmlFor="file">
                        <img src={Add}   ='no image'/>
                        <span>Add an avatar</span>
                    </label>
                    <button>sign up</button>
                </form>
                <p>you do have an account? Login</p>

            </div>
        </div>
    )
}

export default Register