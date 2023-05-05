import React, {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from "../firebase";

const Login = () => {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        try{
            await signInWithEmailAndPassword(auth,email,password);
            navigate("/")
            console.log(e,'eeeeeee')
        } catch (err) {
            setErr(true);
        }
    }

    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>samar chat</span>
                <span className='title'>Reqister</span>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='display name'/>
                    <input type='password' placeholder='password'/>
                    <input style={{display: "none"}} type='file' />
                    <button>Login</button>
                    {err && <span style={{color: 'red'}}>Some error occur</span>}
                </form>
                <p>you don't have an account? <Link to='/Register'>Register</Link></p>
            </div>
        </div>
    )
}

export default Login