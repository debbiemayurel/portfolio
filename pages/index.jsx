import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import Navbar from '@/components/ui/Navbar'
import Layout from '@/components/layout/Layout'
import Scene from '@/components/scene/Scene'


const IndexPage = () => {
  return (
    <Layout title="Portfolio - Home" pageDescription="Home">
      <Grid container display="flex" justifyContent="center" mt={10} height="100vh">
        <Grid item xs={12} md={7} lg={7} xl={7}>
          <Box>
            <Typography variant="h1" sx={{fontSize:46,color:'#fff'}}>
              {`Hi, I'm Juan Puertas!`}
            </Typography>
            <Typography variant="h1" sx={{fontSize:46,color:'#fff'}}>
              Developer 
              <Typography variant='h1' component='span' color='primary' sx={{fontSize:46}}> Web</Typography>
            </Typography>
            <Typography variant='body1' color='#fff' mt={4}>
              I am a web developer proficient in multiple programming languages, frameworks, code reviews, and automated testing. I excel in web development, utilizing my skills and creativity to build dynamic and robust applications.
            </Typography>
          </Box>
          <Button variant='contained' sx={{mt:4, borderRadius:1}}>
            Show More
          </Button>
          <Grid container mt={4} display='flex' gap={1}>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Typography variant="h4" fontWeight='bold' sx={{color:'#fff'}}>
                {`1+`}
              </Typography>
              <Typography variant="h6" sx={{color:'#fff'}}>
                {`Year of experience`}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Typography variant="h4" fontWeight='bold' sx={{color:'#fff'}}>
                {`7`}
              </Typography>
              <Typography variant="h6" sx={{color:'#fff'}}>
                {`Projects created to client`}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Typography variant="h4" fontWeight='bold' sx={{color:'#fff'}}>
                {`1`}
              </Typography>
              <Typography variant="h6" sx={{color:'#fff'}}>
                {`Project personal`}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={5} lg={5} xl={5}>
          <Box>
            <Scene/>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default IndexPage