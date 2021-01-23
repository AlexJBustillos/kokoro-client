import React from 'react';
import { Link } from 'react-router-dom'

const Journal = () => {
    return (
        
            <div className="container text-center">
               
               <div className="jentry">
                <form className="entry">
                    <label for="stime">start time</label>
                    <input type="text" id="stime" name="stime"/>
                    <label for="etime">end time</label>
                    <input type="text" id="etime" name="etime"/>
                    <label for="Mentry">Entry</label>
                    <textarea className="Mentry" name="Mentry" rows="4" cols="50"></textarea>

                </form>
                </div>  
                <Link to="/profile">Profile</Link>
            </div>
        
    )
}

export default Journal;