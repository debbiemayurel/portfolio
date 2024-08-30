import React from 'react'
import { useRouter } from 'next/router'
import { Box, Button, Grid, Typography } from '@mui/material'

const Navbar = () => {
    const { asPath, push } = useRouter();
  return (
    <Grid container display='flex' justifyContent='center' mt={3.5}>
        <Grid item xs={12} sm={12} md={11} lg={11} xl={10}>
            <Box 
                sx={{
                    backgroundColor:'#1d1c22',
                    p:2,
                    borderRadius:1,
                    display:'flex',
                    justifyContent:'space-between',
                    alignItems:'center'
                }}
            >   
                <Box>
                    <Typography variant='h4' color='primary' ml={2} onClick={()=>{push('/')}} sx={{ cursor:'pointer'}}>JuamPi</Typography>
                </Box>
                <Box>
                    <Button variant='text'>
                        Home
                    </Button>
                    <Button variant='text'>
                        About Us
                    </Button>
                    <Button variant='text'>
                        Portfolio
                    </Button>
                    <Button variant='text'>
                        Service
                    </Button>
                    <Button variant='text'>
                        Contact
                    </Button>
                </Box>
                
            </Box>
        </Grid>
    </Grid>
  )
}

export default Navbar