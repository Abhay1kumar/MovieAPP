import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'




import './Home.css'

export default function Home() {
    const [users, setUsers] = useState([])


    useEffect(() => {
        loadUsers();
    }, []);

    async function loadUsers() {
        const result = await axios.get('https://61ea3a487bc0550017bc65f8.mockapi.io/user')
        setUsers(result.data)
    }

    const deleteUser = async (id) => {
        await axios.delete(`https://61ea3a487bc0550017bc65f8.mockapi.io/user/${id}`)
        loadUsers();
    }

    return (
        <>     
        <div className='button'>
           <Link to='/addUser'> <button>Add User</button></Link>
            </div>  
        
         <table className="table">
            <thead className="thead">
                <tr>
                    <th>SN</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Edit/Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((item, index) => {
                        return <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.city}</td>
                            <td>
                                <Link to ={`/editUser/${item.id}`}> <button className="edit">Edit</button></Link>
                                <Link to='/'> <button className="delete" onClick={()=>deleteUser(item.id)}>Delete</button></Link>
                               

                            </td>
                        </tr>
                    })
                }

            </tbody>

        </table>
        </>

    )
}
