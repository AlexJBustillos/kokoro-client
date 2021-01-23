import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
// import { Redirect } from 'react-router-dom';

const ProfileDetails = (props) => {
    console.log(props);
    const backendURL = process.env.REACT_APP_SERVER_URL;
    const [profile, setProfile] = useState('')
    const {id, name} = props.user
    // const [bio, setBio] = useState('')
    // const [status, setStatus] = useState('')
    // const [meditation, setMeditation] = useState('')
    // const [experience, setExperience] = useState('')

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
                    </div>
                )
            }))
        })
    }, [props.user.id])

    return (
        
        <div>
            <h1>{props.user.name}</h1>
            {profile}
            <div>
                <label htmlFor="edit">Edit</label>
            </div>
            <div>
                <Link to="/journal">Journal</Link>
            </div>
        </div>
        
    )
}

export default ProfileDetails;