import React from 'react'
import { Box } from '@mui/material'
import Navbar from '../ui/Navbar'

const Layout = ({children}) => {
    return (
        <Box sx={{
            backgroundImage: 'url("/backgroundimage.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh'
        }}>
            <Navbar/>
            <Box component="main" sx={{px:2}}>
                {children}
            </Box>
        </Box>
    )
}

export default Layout