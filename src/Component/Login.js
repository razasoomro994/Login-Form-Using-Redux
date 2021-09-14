import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {login} from "../feature/userSlice"
import "../Component/login.css"

export const Login = (props) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            login({
                name: name,
                email: email,
                password: password,
                loggedIn: true

            }))
    }


    return (
        <div>


            <div className="main">
                <p className="sign" align="center">Login Form</p>
                <form className="form1" onSubmit={(e) => handleSubmit(e)}>
                    <input type="name" className="pass" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="email" className="un" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" className="un" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button class="submit" align="center">Sign in</button>

                </form>

            </div>






        </div>
    )
}

