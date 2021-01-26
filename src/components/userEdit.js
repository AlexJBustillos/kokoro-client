import React from "react"

const userEdit = () =>{
    return(
        <div>
            <form>
                <label for="newName">new username</label>
                <input type="text" id="newName"></input>
                <label for="newEmail"> new email</label>
                <input type="text" id="newEmail"></input>
                <label for="status">Status</label>
                <input type="text" id="status"></input>
                <label for="medType">meditation interests</label>
                <input type="text" id="medType"></input>
            </form>
        </div>
    )
}





export default userEdit;