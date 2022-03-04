// import * as React from 'react';
import React ,{useEffect} from 'react'
import Box from '@mui/material/Box';
import MovieIcon from '@mui/icons-material/Movie';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import './MainNav.css'
import WhatshotIcon from '@mui/icons-material/Whatshot';
import {useNavigate} from 'react-router-dom'


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (value === 0) navigate('/');
    else if (value === 1) navigate('/movies');
    else if (value === 2) navigate('/series');
  }, [value,navigate])

  return (
    <Box className="bottom-navigation" >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);

        }}
        sx={{ backgroundColor: 'black' }}
      >
        <BottomNavigationAction label="Trending" sx={{ color: 'white' }} icon={<WhatshotIcon />} />
        <BottomNavigationAction label="Movies" sx={{ color: 'white' }} icon={<MovieIcon />} />
        <BottomNavigationAction label="Tv Series" sx={{ color: 'white' }} icon={<LiveTvIcon />} />
      </BottomNavigation>
    </Box>
  );
}
