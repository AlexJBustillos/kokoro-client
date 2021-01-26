import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Redirect } from 'react-router-dom';
const backendURL = process.env.REACT_APP_SERVER_URL;


const JournalEdit = (props) => {
    console.log(props.computedMatch.params.id);
    const backendURL = process.env.REACT_APP_SERVER_URL;
    const {id} = props.computedMatch.params.id;
    const [objectId, setObjectId] = useState('')
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [date, setDate] = useState(Date.now())
    const [redirect, setRedirect] = useState(false);

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleText = (e) => {
        setText(e.target.value);
    }

    const handleDate = (e) => {
        setDate(new Date(e))
    }

    const handleSubmit = (e) => {
        const journalData = { text, title, date, id };
        setObjectId(props.match.params.id);
        e.preventDefault();
        axios.put(backendURL + "/api/journals/update/" + props.match.params.id, journalData)
        .then(response => {
            console.log(response);
            setRedirect(true)
        })
        .catch(error => {
            console.log(error);
        })
    }
    if (redirect) return <Redirect to="/journalView" />

    return (
        <div>
            <h1>Edit</h1>
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
    )
}

export default JournalEdit;