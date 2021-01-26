import React,{useState} from "react"
import axios from "axios"
import {Redirect} from "react-router-dom"


const UserEdit = (props) =>{
    console.log(props)
    const [newEmail, setNewEmail] = useState('')
    const [newName, setNewName] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [imageAlt, setImageAlt] = useState('')
    const [redirect, setRedirect] = useState('')
    const backendURL = process.env.REACT_APP_SERVER_URL
    const dataChange = (e) => {
        console.log('----Changing Email----');
        e.preventDefault();const { files } = document.querySelector('input[type="file"]')
        const formData = new FormData();
        formData.append('file', files[0]);
        formData.append('upload_preset', 'ivgbzzgb');
        const options = {
            method: 'POST',
            body: formData,
        };
        return fetch('https://api.cloudinary.com/v1_1/alexbustillos/image/upload', options)
        .then(res => res.json())
        .then(res => {
            const userID = props.user.id
            const email = newEmail
            const name = newName
            const avatar = res.secure_url
            const userData = { email, name, avatar, userID }
            console.log(userData);
            axios.put(backendURL + "/api/users/" + userID, userData)
            .then(res =>{
                setRedirect(true)
            })

        })
        .catch(error => {
            console.log(error);
        })
    }
    if (redirect) return <Redirect to="/welcome"/>
    const handleImage = (e) => {
        e.preventDefault();
        setImageUrl(e.target.value)
        setImageAlt(e.target.value)
    }
    const handleName = (e) => {
        e.preventDefault();
        setNewName(e.target.value)
    }
    
    const handleEmail = (e) => {
        e.preventDefault();
        setNewEmail(e.target.value)
    }
    return(
        <div>
                 <form>
                <p className="old-email">CURRENT EMAIL:  {props.user.email}</p>
                <label/>
                <input type="text" name="email" id="email" onChange={handleEmail} />
                <p className="old-email">CURRENT NAME:  {props.user.name}</p>
                <label/>
                <input className="new-email-box" type="text" name="name" id="name" onChange={handleName} />
                <section className="left-side">
                    <div className="form-group">
                    <p className="old-email2">CHANGE YOUR PROFILE IMAGE:</p>
                        <input className="btn-image1" onChange={handleImage} type="file"/>
                    </div>
                <input className="btn-image2" type="submit" value="Update Profile"  onClick={dataChange}/>
                </section>
            </form>
  
            <button>delete profile</button>
        </div>
    )
    
}





export default UserEdit;