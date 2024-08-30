import React from 'react'
import { Grid, Typography } from '@mui/material'
import Navbar from '@/components/ui/Navbar'
import Layout from '@/components/layout/Layout'


const IndexPage = () => {
  return (
    <Layout>
      <Grid container display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Grid item xs={12} md={8} lg={8} xl={8}>
          <Typography variant="h1">
            Hello World
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} lg={4} xl={4}>
          <Typography variant="h1">
            Hello World
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default IndexPage