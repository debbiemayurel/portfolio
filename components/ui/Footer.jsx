import { Box, Button, Grid2, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <Grid2 container justifyContent='center' sx={{mt:10}}>
            <Grid2 size={{ xs: 12, md: 6, lg: 4, xl: 3 }}>
                <Typography variant='body1' fontWeight='bold' color='primary'>JuamPi</Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6, lg: 4, xl: 3 }}>
                <Box display='flex' flexDirection='column' gap={1} justifyContent='center'>
                    <Typography variant='body1' color='primary'>+58 414-5512273</Typography>
                    <Typography variant='body1' color='primary'>+58 412-7924415</Typography>
                    <Typography variant='body1' color='primary'>+58 251-2734484</Typography>
                    <Typography variant='body1' color='primary'><a href="">juanpuertas486@gmail.com</a></Typography>
                </Box>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6, lg: 4, xl: 3 }}>
                <Box display='flex' justifyContent='end'>
                    <Button variant='contained' color='primary' sx={{borderRadius: 1}}>
                        <Typography variant='h6'>Contact me</Typography>
                    </Button>
                </Box>
                
            </Grid2>
            <Grid2 size={{ xs: 12, md: 12, lg: 12, xl: 12 }}>
                <Typography variant='h6' color='primary'>Footer</Typography>
            </Grid2>
        </Grid2>
    )
}

export default Footer