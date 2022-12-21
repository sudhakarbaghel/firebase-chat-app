import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth"
import {auth} from "../firebase"
 
export default function Login() {
    const [err, setErr] = useState(false)
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        const email = e.target[0].value
        const password = e.target[1].value
        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate("/")
        } catch (err) {
            setErr(true);
            setLoading(false)
            
        }
    };

    return (
        <div className='formContainer'>
            <div className="formWrapper">
                <span className='logo'>Lavi Chat</span>
                <span className='title'>Login</span>

                <form onSubmit={handleSubmit} >
                    <input type="email" placeholder='email' />
                    <input type="password" placeholder='password' />
                    
                    <button disabled={loading}>Sign in</button>
                    {err && <span style={{ color: 'red', textAlign: 'center' }} >Something went wrong!</span>}

                </form>
                <p>You don't have an account?
                <Link to="/register"> Register</Link>   </p>

            </div>
        </div>
    )
}
