import React from 'react'
import { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {

    const [signState, setSignState] = useState("Sign In")

    return (
        <>
            <div className='login'>
            </div>
            <div className="login-form">

                <h3>{signState}</h3>
                <form >
                    {signState === "Sign Up" ? <input type="text" placeholder='Your name' /> : <></>}

                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>{signState}</button>
                    <div className="form-help">
                        <div className="remember">
                            <input type="checkbox" />
                            <label htmlFor="">Rember Me </label>

                        </div>
                        <Link to={'Need Help?'} style={{ color: '#352d2d' }}>Need Help?</Link>
                    </div>
                </form>
                <div className="form-switch">
                    {signState === "Sign In" ?
                        <p>New to Event? <span onClick={() => { setSignState("Sign Up") }}>Sign Up Now</span></p>
                        : <p>Already have an account?  <span onClick={() => { setSignState("Sign In") }}  >Sign In Now</span> </p>
                    }
                    {/* <Link to= {'RowPost'} >App</Link> */}

                </div>
            </div>
        </>
    )
}

export default Login