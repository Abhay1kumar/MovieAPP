import React from 'react'
import Pagination from '@mui/material/Pagination';



function PaginationPage({ setPage, numberOfPages = 10 }) {

    const handlePaginationPage = (page) => {
        setPage(page);
        window.scroll(0, 0);
    }

    return (
        <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            marginTop: 10,
            
        }}>
           
                <Pagination 
                    count={numberOfPages}
                    onChange={(e) => handlePaginationPage(e.target.textContent)} 
                   
                    />
          
        </div>
    )
}

export default PaginationPage;