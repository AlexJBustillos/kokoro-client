import React from 'react';

const journal = () => {
    return (
        <footer className="footer bg-dark">
            <div className="container text-center">
                <span className="text-muted">@2020 Built by Alex Bustillos (during COVID)</span>
                <div class="entry">
                <form class="entry">
                    <label for="date">Date</label>
                    <input type="text" id="date" name="date"/>
                    <label for="stime">start time</label>
                    <input type="text" id="stime" name="stime"/>
                    <label for="etime">end time</label>
                    <input type="text" id="etime" name="etime"/>
                </form>
                </div>
            </div>
        </footer>
    )
}

export default journal;