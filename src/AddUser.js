import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import './EditUser.css'


export default function AddUser() {

    let navigation=useNavigate();

    const [data, setData] = useState(
        {
            name: '',
            city: '',
        }
    )
    const { name, city } = data;

    const onInputChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('https://61ea3a487bc0550017bc65f8.mockapi.io/user', data)
            navigation('/')
    }

    return (

        <form onSubmit={ e=>onSubmit(e)}>
        <div className="mainbox">
            <div className="inputBox">
                <h3>Your Name</h3>
                <input type="text" placeholder="Type your name.." name="name" vale={name} onChange={e => onInputChange(e)} />

            </div>
            <div className="inputBox">
                <h3>City</h3>
                <input type="text" placeholder="Type your city name.." name="city" value={city} onChange={e => onInputChange(e)} />

            </div>
        <button type="submit">Add Data</button>
            
        </div>
        </form>
    )
}
