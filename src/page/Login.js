import React from 'react'
import '../style.scss'
const Login = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>samar chat</span>
                <span className='title'>Reqister</span>
                <form>
                    <input type='text' placeholder='display name'/>
                    <input type='password' placeholder='password'/>
                    <input style={{display: "none"}} type='file' />
                    <button>Login</button>
                </form>
                <p>you do have an account? Register</p>
            </div>
        </div>
    )
}

export default Login