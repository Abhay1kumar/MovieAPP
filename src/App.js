import React from 'react'
import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import AddUser from './AddUser'
import EditUser from './EditUser'




export default function App() {
  return (
    <div>
<Router>
<Header/>
  <Routes>
    <Route path="/addUser" element={<AddUser/>} />
    <Route path="/editUser/:id" element={<EditUser/>} />
    <Route path='/' element={<Home/>} />
  </Routes>
  <Footer />
</Router>
 
    </div>
  )
}
