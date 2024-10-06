import { Email, LocalPhone } from '@mui/icons-material'
import { Box, Button, Divider, Grid2, Typography } from '@mui/material'
import React from 'react'
const infoContact = [
    {
        icon: <LocalPhone/>,
        value: '+58 414-5512273'
    },
    {
        icon: <></>,
        value: '+58 412-7924415'
    },
    {
        icon: <></>,
        value: '+58 251-2734484'
    },
]
const Footer = () => {
    return (
        <Grid2 container justifyContent='center' sx={{mt:10}}>
            
            <Grid2 mt={1} size={{ xs: 12, md: 6, lg: 4, xl: 3 }}>
                <Typography variant='h1' fontWeight='medium' color='primary'>JuamPi</Typography>
            </Grid2>
            <Grid2 mt={1} size={{ xs: 12, md: 6, lg: 4, xl: 3 }}>
                <Box display='flex' flexDirection='column' gap={1} justifyContent='center'>
                    <Box display='flex' alignItems='center'>
                        <LocalPhone sx={{color:'#fff'}}/>
                        <Typography variant='body2' color='#fff'>+58 414-5512273</Typography>
                    </Box>
                    <Typography variant='body2' color='#fff' sx={{ml:{xs:3}}}>+58 412-7924415</Typography>
                    <Typography variant='body2' color='#fff' sx={{ml:{xs:3}}}>+58 251-2734484</Typography>
                    <Typography
                        href="mailto:juanpuertas486@gmail.com" 
                        component='a' 
                        variant='body2' 
                        color='#fff'
                        display='flex' 
                        alignItems='center'
                        sx={{ 
                            border: 'none', 
                            textDecoration: 'none', 
                            '&:hover': { color: 'primary.main' }, // Cambia 'primary.main' al color primario deseado
                            '&:hover .MuiSvgIcon-root': { color: 'primary.main' } // Cambia el color del icono al pasar el mouse
                        }} 
                    >
                        <Email sx={{ color: 'inherit' }} /> {/* Cambia el color del icono al color del Typography */}
                        juanpuertas486@gmail.com
                    </Typography>
                </Box>
            </Grid2>
            <Grid2 mt={1} size={{ xs: 12, md: 6, lg: 4, xl: 3 }}>
                <Box display='flex' justifyContent='end'>
                    <Button variant='contained' color='primary' sx={{borderRadius: 1}}>
                        <Typography variant='h6'>Contact me</Typography>
                    </Button>
                </Box>
            </Grid2>
            <Grid2 mt={1} size={{ xs: 12, md: 12, lg: 12, xl: 12 }}>
                <Typography variant='body2' color='#fff' textAlign='center' sx={{ mt: 2 }}>
                    © {new Date().getFullYear()} Juampi. Todos los derechos reservados.
                </Typography>
            </Grid2>
        </Grid2>
    )
}

export default Footer