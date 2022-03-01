import React from 'react'
import './Header.css'
import profile from './profile.jpg'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import {Link} from 'react-router-dom'


export default function Header() {
  return (
    <div className="header">
        <div className="image">
          <Link to ='/'><img src={profile} width="60px" height="60px" alt="" /></Link>
            
        </div>
        <p>Abhay Kumar</p>
        <div className="heading">
         <p> User Data</p>  
        </div>
        <div className="icon">
        <PermIdentityIcon sx={{fontSize:"40"}} />
        </div>
    </div>
  )
}
