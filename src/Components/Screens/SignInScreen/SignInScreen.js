import React, { useRef } from 'react'
import './SignInScreen.css'
import { auth } from '../../../firebase'

function SignInScreen() {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    //when a button is inside a form, it will refresh...to prevent this use 'e.preventDefault()'
    const register = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch((error) => {
            alert(error.message)
        })
    }
    const signIn = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch((error) => {
            alert(error.message)
        })
    }

    return (
        <div className="signInScreen">
            <form>
                <h1>Sign In</h1>
                <input 
                    type="email"
                    placeholder="Email"
                    ref={emailRef}
                />
                <input 
                    type="password"
                    placeholder="Password"
                    ref={passwordRef}
                />
                <button
                    onClick={signIn}
                    type="submit"                
                >
                    Sign In
                </button>
                <h4>
                    <span className="signInScreen__grey">New to Netflix? </span>
                    <span className="signInScreen__link" onClick={register}>Sign up now.</span>
                </h4>
            </form>
        </div>
    )
}

export default SignInScreen
