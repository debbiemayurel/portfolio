import React from 'react'
import { Box, Grid } from '@mui/material'
import Navbar from '../ui/Navbar'
import Head from 'next/head'

const Layout = ({children, title, pageDescription}) => {
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
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                bg:'#141414',
            }}>

                <Navbar/>
                <Box component="main">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} md={10} lg={10} xl={10}>
                            {children}
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default Layout