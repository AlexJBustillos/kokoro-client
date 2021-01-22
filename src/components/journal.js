import React from 'react';

const journal = () => {
    return (
        
            <div class="journal" className="container text-center">
               
               <div class="jentry">
                <form class="entry">
                    <label for="stime">start time</label>
                    <input type="text" id="stime" name="stime"/>
                    <label for="etime">end time</label>
                    <input type="text" id="etime" name="etime"/>
                    <label for="Mentry">Entry</label>
                    <textarea class="Mentry" name="Mentry" rows="4" cols="50"></textarea>

                </form>
                </div>  
                
            </div>
        
    )
}

export default journal;