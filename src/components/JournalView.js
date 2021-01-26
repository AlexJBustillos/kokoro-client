import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

const JournalView = (props) => {
    const backendURL = process.env.REACT_APP_SERVER_URL;
    const [journal, setJournal] = useState('');
    const [journalArray, setJournalArray] = useState([]);
    const {id} = props.user;
    useEffect(() => {
        axios.get(backendURL + "/api/journals/all/" + id)
        .then(response => {
            const display = response.data.journals;
            setJournalArray(display)
            setJournal( display.map((i, idx) => {
                return (
                    <div key={i._id}>
                        <h2>{i.title}</h2>
                        <h5>{i.text}</h5>
                        <p>{i._id}</p>
                        <p>{i.date.substring(0,10)}</p>
                        <div className="container">
                            <button type="button" className="btn bt-primary"><Link to={"/journalEdit/"+ i._id}>Edit</Link></button>
                        </div>
                        
                    </div>
                )
            }))
        })
        // return index
    }, [id, backendURL])

    // const deleteExercise = (id) => {
    //     axios.delete(backendURL + "/api/journals/" + id)
    //     .then(res => {console.log(res.data)});
    //     setJournalArray(
    //         journal.filter(el => el._id !== id)
    //     )
    // }

    return (
        <div>
            <h1>Hello {props.user.name.toUpperCase()} from the VIEWS</h1>
            {journal}
            {/* <div> */}
                {/* <div className="modal fade" id="form" tabindex="-1" role="dialog" aria-labelledby="exampleModallabel" aria-hidden="true"> */}
                            {/* <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                    <div className="modal-header border-bottom-0">
                                        <h5 className="modal-title" id="exampleModallabel">Edit Journal</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <form onSubmit={editForm}>
                                        <div className="modal-body">
                                            <div className="form-group">
                                                <label htmlFor="title">Title</label>
                                                <input type="text" value={title} onChange={handleTitle} className="form-control" id="text" aria-describedby="textHelp" placeholder="Enter Title" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="content">Content</label>
                                                <input type="text" value={text} onChange={handleText} className="form-control" id="text" aria-describedby="textHelp" placeholder="Enter Content" />
                                            </div>
                                            <div class="modal-footer border-top-0 d-flex justify-content-center">
                                                <button type="submit" class="btn btn-success">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div> */}
                
            {/* </div> */}
            <Link to="/journal">Journal Entry</Link>
        </div>
    )
}
export default JournalView;