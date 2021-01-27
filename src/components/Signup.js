// Imports
import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
const backendURL = process.env.REACT_APP_SERVER_URL;

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [status, setStatus] = useState('');
    const [meditation, setMeditation] = useState('');
    const [experience, setExperience] = useState('');
    const [bio, setBio] = useState('');
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

    const handleStatus = (e) => {
        setStatus(e.target.value);
    }
    const handleMeditation = (e) => {
        setMeditation(e.target.value);
    }
    const handleExperience = (e) => {
        setExperience(e.target.value);
    }
    const handleBio = (e) => {
        setBio(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password === confirmPassword) {
            const newUser = { name, email, password };

            axios.post(backendURL + "/api/users/register", newUser)
            .then(response => {
                const id = response.data._id
                const profileData = { id, status, meditation, experience, bio }
                // axios.post(backendURL + "/api/profiles/" + id, profileData)
                // .then(response => {
                //     console.log(response);
                    
                // })
                // .catch(error => {
                //     console.log(error);
                // })
                setRedirect(true);
            })
            .catch(error => {
                console.log(error);
            })
        }
    }

    if (redirect) return <Redirect to='/login' />
    return (
        <div className="row mt-4">
            <div className="col-md-7 offset-md-3">
                <div className="card card-body">
                    <h2 className="py-2">Signup</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" value={name} onChange={handleName} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" value={email} onChange={handleEmail} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" value={password} onChange={handlePassword} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleConfirmPassword} className="form-control" />
                        </div>
                        <h2>Create Profile</h2>
                        <div className="form-group">
                        <label htmlFor="status">Status: Begginer - Intermediate - Expert</label>
                        <input 
                            type="text" 
                            name="status" 
                            value={status}
                            onChange={handleStatus}
                            className="form-control"
                        />
                        </div>
                        <div className="form-group">
                            <label htmlFor="meditation">Types of Meditation interested in</label>
                            <input 
                                type="text" 
                                name="meditation"
                                value={meditation}
                                onChange={handleMeditation}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="experience">Experience with Meditation</label>
                            <input 
                                type="text"
                                name="experience"
                                value={experience}
                                onChange={handleExperience}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="bio">Tell us a bit about yourself</label>
                            <input 
                                type="text"
                                name="bio"
                                value={bio}
                                onChange={handleBio}
                                className="form-control"
                            />
                        </div>
                        <button type="submit" className="btn bt-primary float-right">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;