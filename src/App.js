import React from 'react'
import Header from './Header'
import './App.css'
import { Container } from '@mui/material';
import SimpleBottomNavigation from './pages/MainNav'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Movies from './Movies/Movies'
import Series from './Series/Series'
import Trending from './Trending/Trending'





export default function App() {
  return (

    <Router>
      <Header />

      <div className="app">

        <Container>
          <Routes>
            <Route path="/" element={<Trending />} exact />
            <Route path="/movies" element={<Movies />} exact />
            <Route path="/series" element={<Series />} exact />
          </Routes>
        </Container>
      </div>


      <SimpleBottomNavigation />
    </Router>

  )
}
