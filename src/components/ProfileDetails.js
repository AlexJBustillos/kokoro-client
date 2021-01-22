import React from 'react';
import { Link } from 'react-router-dom'

const ProfileDetails = (props) => {
    return (
        
        <div>
            <h1>{props.user.name}</h1>
        </div>
        
    )
}

export default ProfileDetails;