import React, { useState } from 'react'
import { Backdrop, Box, Divider, Grid, Grid2, SpeedDial, SpeedDialAction, SpeedDialIcon, Typography } from '@mui/material'
import { GitHub, TextSnippetRounded, WhatsApp } from '@mui/icons-material';
import Navbar from '../ui/Navbar'
import Head from 'next/head'
import Footer from '../ui/Footer';


const Layout = ({children, title, pageDescription}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={pageDescription} />
                <meta name="og:title" content={title} />
                <meta name="og:description" content={pageDescription} />
                <link rel="icon" type="image/png" href="/meta.png" />
            </Head>
            <Box sx={{
                minHeight: '100vh',
                bg:'#141414',
            }}>
                <Navbar/>
                <Box component="main">
                    <Grid2 container justifyContent="center">
                        <Grid2 size={{ xs: 12, md: 10, lg: 10, xl: 10 }}>
                            {children}
                        </Grid2>
                    </Grid2>
                    <Grid2 container justifyContent="center" mt={10}>
                        <Grid2 size={{ xs: 12, md: 12, lg: 12, xl: 12 }}>
                            <Divider sx={{ borderColor: '#fff', borderWidth: 1, borderStyle: 'solid' }} />
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 10, lg: 10, xl: 10 }}>
                            <Footer/>
                        </Grid2>
                    </Grid2>
                    <SpeedDial
                        ariaLabel="SpeedDial example"
                        sx={{ position: 'fixed', bottom: 15, right: 15 }}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        open={open}
                        icon={<SpeedDialIcon />}   
                    >
                        <SpeedDialAction
                            key="action1"
                            icon={<TextSnippetRounded sx={{color:'#2e7ad1'}} />}
                            tooltipTitle="Curriculum vitae"
                            onClick={() => window.open('/CVJuanPuertas.pdf', '_blank')} // Cambia '/path/to/your/cv.pdf' por la ruta correcta a tu PDF en la carpeta public
                        />
                        <SpeedDialAction
                            key="action2"
                            icon={<GitHub sx={{color:'#000'}} />}
                            tooltipTitle="GitHub Profile"
                            onClick={() => window.open('https://github.com/juanpuertas', '_blank')} // Cambia 'tu-usuario' por tu nombre de usuario de GitHub
                        />
                        <SpeedDialAction
                            key="action3"
                            icon={<WhatsApp sx={{color:'#49ec72'}} />}
                            tooltipTitle="WhatsApp Number"
                            onClick={() => window.open('https://wa.me/+584145512273?text=Hola%20quiero%20más%20información', '_blank')} // Cambia '1234567890' por tu número de WhatsApp
                        />
                    </SpeedDial>
                </Box>
            </Box>
        </>
    )
}

export default Layout