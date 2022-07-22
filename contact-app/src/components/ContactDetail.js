import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ContactDetail = () => {
    const [user, setUser] = useState({});
    const { id } = useParams()
    const LOCAL_STORAGE_KEY = "contacts";

    useEffect(() => {
        const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if(retriveContacts){
            console.log(retriveContacts)
            const contact = retriveContacts.find(contact => contact.id === parseInt(id));
            console.log(contact)
            setUser(contact)
        }
    },[id])

    const randomNumber = () => Math.floor(Math.random() * 99) + 1
    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={`https://randomuser.me/api/portraits/men/${randomNumber()}.jpg`} alt="user" />
                </div>
                <div className="content">
                    <div className="header">{user.name}</div>
                    <div className="description">{user.email}</div>
                </div>
            </div>
            <div className="center-div">
                <Link to="/">
                    <button className="ui button blue center">
                        Back to Contact List
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ContactDetail