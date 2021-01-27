import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

const JournalView = (props) => {
    const backendURL = process.env.REACT_APP_SERVER_URL;
    const [journal, setJournal] = useState('');
    const [redirect, setRedirect] = useState(false)
    const {id} = props.user;
    
    const handleDelete = (e) => {
        e.preventDefault();
        axios.delete(backendURL + "/api/journals/" + e.target.value)
        .then(response => {
            console.log(response.data)
            setRedirect(true)
        });
    }
    
    useEffect(() => {
        axios.get(backendURL + "/api/journals/all/" + id)
        .then(response => {
            const display = response.data.journals;
            setJournal( display.map((i, idx) => {
                return (
                    <div key={i._id}>
                        <div className="container">
                        <h2>{i.title}</h2>
                        <p>{i.text}</p>
                        <p>{i.date.substring(0,10)}</p>
                            <button type="button" className="btn bt-primary"> <Link to={"/journalEdit/"+ i._id}>Edit</Link>  </button>|
                            <button type="submit" className="btn btn-danger" value={i._id} onClick={handleDelete}>Delete</button>
                        </div>
                        
                    </div>
                )
            }))
        })
        
    }, [backendURL, id])

    if (redirect) return <Redirect to="/details" />

    return (
        <div className="text-center">
            <h1>{props.user.name} Journal Entries</h1>
            {journal}
            <Link to="/journal">Add a Journal Entry</Link>
        </div>
    )
}
export default JournalView;