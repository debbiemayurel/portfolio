import React, { useState } from 'react'
import { Backdrop, Box, Grid, Grid2, SpeedDial, SpeedDialAction, SpeedDialIcon, Typography } from '@mui/material'
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
                            <Footer/>
                        </Grid2>
                    </Grid2>
                    <SpeedDial
                        ariaLabel="SpeedDial example"
                        sx={{ position: 'fixed', bottom: 16, right: 16 }}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        open={open}
                        icon={<SpeedDialIcon />}   
                    >
                        <SpeedDialAction
                            key="action1"
                            icon={<TextSnippetRounded sx={{color:'#2e7ad1'}}/>}
                            tooltipTitle="Curriculum vitae"
                        />
                        <SpeedDialAction
                            key="action2"
                            icon={<GitHub sx={{color:'#000'}}/>}
                            tooltipTitle="GitHub Profile"
                        />
                        <SpeedDialAction
                            key="action3"
                            icon={<WhatsApp sx={{color:'#49ec72'}}/>}
                            tooltipTitle="WhatsApp Number"
                        />
                    </SpeedDial>
                </Box>
            </Box>
        </>
    )
}

export default Layout