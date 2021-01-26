import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router-dom';



const Profile = (props) => {
    console.log(props);
    const backendUrl = process.env.REACT_APP_SERVER_URL;
    const { id, name, email } = props.user
    const [status, setStatus] = useState('');
    const [meditation, setMeditation] = useState('');
    const [experience, setExperience] = useState('');
    const [bio, setBio] = useState('');
    const [redirect, setRedirect] = useState(false);

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
        const profileData = { id, name, email, status, meditation, experience, bio}
        e.preventDefault();
        axios.put(backendUrl + "/api/profiles/" + id, profileData)
        .then(response => {
            console.log(response);
            setRedirect(true)
        })
        .catch(error => {
            console.log(error);
        })
    }
    if (redirect) return <Redirect to='/details' />
    const userData = props.user ? 
    (<div>
        <h1>Edit Your Profile Below</h1>
    </div>) : <h4>Loading...</h4>

    const errorDiv = () => {
        return (
            <div className="text-center pt-4">
                <h3>Please <Link to="/login">login</Link> to view this page</h3>
            </div>
        );
    };

    return (
        <div>
            { props.user ? userData : errorDiv() }
            <div>
                <form onSubmit={handleSubmit}>
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
            <Link to="/journal">Journal</Link>

        </div>
    );
}

export default Profile;