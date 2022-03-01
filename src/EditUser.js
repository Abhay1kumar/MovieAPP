
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";
import './EditUser.css'

export default function EditUser() {

    let navigation = useNavigate()
    const {id} = useParams();

    
    useEffect(() => {
   
        const loadUser = async () => {
            const result = await axios.get(`https://61ea3a487bc0550017bc65f8.mockapi.io/user/${id}`)
            setuser(result.data)
        };
        loadUser();

    }, []);

   

    const [user, setuser] = useState(
        {
            name: '',
            city: '',
        }
    )


    const { name, city } = user;



    const onInputChange = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value });
    }


    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`https://61ea3a487bc0550017bc65f8.mockapi.io/user/${id}`, user)
        navigation('/')
    }



   


    return (
        <form onSubmit={e => onSubmit(e)}>
            <div className="mainbox">
                <div className="inputBox">
                    <h3>Your Name</h3>
                    <input type="text" placeholder="Type your name.." name='name' value={name} onChange={e => onInputChange(e)} />

                </div>
                <div className="inputBox">
                    <h3>City</h3>
                    <input type="text" placeholder="Type your city name.." name="city" value={city} onChange={e => onInputChange(e)} />

                </div>
                <button type="submit">Update user</button>
            </div>
        </form>
    )
}
