import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
const backendURL = process.env.REACT_APP_SERVER_URL;

const Journal = (props) => {
    const { id } = props.user
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [date, setDate] = useState('')
    const [redirect, setRedirect] = useState(false)

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleText = (e) => {
        setText(e.target.value)
    }

    const handleDate = (e) => {
        setDate(new Date(e))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const journalData = { title, text, date };
        // axios.get(backendURL + "/api/journals/" + props.match.params.id)
        // .then(response => {
        //     console.log(response);
        // })
        axios.post(backendURL + "/api/journals/" + id, journalData)
        .then(response => {
            console.log(response);

            setRedirect(true);
        })
        .catch(error => {
            console.log(error);
        })
    }
    if (redirect) return <Redirect to="/journalView" />
    return (
        
            <div className="container text-center">
               <h1>Journal</h1>
               <div className="form-group">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" value={title} onChange={handleTitle} className="form-control"/>
                    <div>
                        <label htmlFor="content" className="float-center">Content</label>
                        <textarea className="form-control" name="text" value={text} onChange={handleText} rows="4" cols="50"></textarea>

                    </div>
                    <div>
                        <DatePicker 
                            selected={date}
                            onChange={handleDate}
                        />
                    </div>
                    <button type="submit" className="btn bt-primary float-right">Submit</button>
                </form>
                </div>  
                <Link to="/profile">Edit Profile</Link>
            </div>
        
    )
}

export default Journal;