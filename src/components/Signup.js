// Imports
import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
const backendURL = process.env.REACT_APP_SERVER_URL;

const Signup = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password === confirmPassword) {
            const newUser = { name, email, password };

            axios.post(backendURL + "/api/users/register", newUser)
            .then(response => {
                setRedirect(true);
            })
            .catch(error => {
                console.log(error);
            })
        }
    }

    if (redirect) return <Redirect to='/profile' />
    return (
        <div>
            <h2 className="text-center">Signup</h2>
            <div className="login-container">
                <form onSubmit={handleSubmit} className="form-login">                
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={name} onChange={handleName} className="login__input" />
                    <label  htmlFor="email">Email</label>
                    <input className="login__input" type="email" name="email" value={email} onChange={handleEmail}  />               
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={handlePassword} className="login__input" />
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleConfirmPassword} className="login__input" />
                    <button type="submit" className="btn bt-primary float-right">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Signup;