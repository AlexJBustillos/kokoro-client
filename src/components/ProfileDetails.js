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
                        <p>STATUS: {i.status}</p>
                        <p>MEDITATION: {i.meditation}</p>
                        <p>EXPERIENCE: {i.experience}</p>
                        <p>BIO: {i.bio}</p>
                        <button className="btn"><Link to="/profile">Edit</Link></button>
                    </div>
                )
            }))
        })
    }, [props.user.id, backendURL, id])
    return (
        
        <div className="text-center">
            <div>
                <img className="profile-img" src={props.user.avatar} alt={props.user.name} />
            </div>
            <h1>{props.user.name}</h1>
            {profile}
            <div>
                <Link to="/journal">Journal Entry</Link> | <Link to="/edit">Edit User data</Link>
            </div>
        </div>
        
    )
}

export default ProfileDetails;