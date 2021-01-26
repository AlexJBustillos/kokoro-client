import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProfileDetails = (props) => {
    const backendURL = process.env.REACT_APP_SERVER_URL;
    const [profile, setProfile] = useState('')
    const {id} = props.user
    useEffect(() => {
        axios.get(backendURL + "/api/profiles/" + id)
        .then(response => {
            const field = response.data.profile;
            setProfile( field.map((i, idx) => {
                return (
                    <div key={idx}>
                        <h2>Status: {i.status}</h2>
                        <h3>Meditation: {i.meditation}</h3>
                        <h3>Experience: {i.experience}</h3>
                        <p>Bio: {i.bio}</p>
                        <button className="btn bt-primary"><Link to="/profile">Edit</Link></button>
                    </div>
                )
            }))
        })
    }, [props.user.id, backendURL, id])
    return (
        
        <div className="text-center">
            <div className="imageHolder">
                <img className="profile-img" src={props.user.avatar} alt={props.user.name} />
            </div>
            <h1>{props.user.name}</h1>
            {profile}
            <div>
                <Link to="/journal">Journal</Link>
                <Link to="/edit">User Edit</Link>
            </div>
        </div>
        
    )
}

export default ProfileDetails;