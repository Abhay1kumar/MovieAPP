import './Header.css'
import React from 'react'

function Header() {
    return (
        <div>
         <span onClick={() => window.scrollTo(0,0)} className="header">🎬Entertainment Hub🎬
         <p style={{fontSize:"11px" , fontWeight:"bold"}}>by Abhay Kumar</p>
        </span>
       
        </div>
       
    )
}

export default Header