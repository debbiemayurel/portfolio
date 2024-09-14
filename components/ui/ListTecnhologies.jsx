import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import technologies from '@/utils/ListTecnhologies'

const ListTecnhologies = () => {
    return (
        <Box mt={2}>
            <Typography variant="subtitle1" sx={{color:'#fff', fontSize:32}}>
                Technologies
            </Typography>
            <Grid container spacing={1} mt={2}>
                {technologies.map((tech, index) => (
                    <Grid item xs={6} sm={4} md={1.5} key={tech.name}>
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                            p={2}
                            sx={{
                                border: '1px solid white',
                                borderRadius: index === 0 ? '12px 0 0 12px' : index === technologies.length - 1 ? '0 12px 12px 0':'',
                                transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'scale(1.01)',
                                    boxShadow: '0 0 3px 1px rgba(255, 255, 255, 0.5)',
                                    border: '1px solid rgba(255, 255, 255, 0.8)',
                                }
                            }}
                        >
                            <Box
                                component='img'
                                src={tech.imagePath} 
                                alt={tech.name} 
                                style={{ width: '100%', height: '60px', objectFit: 'contain' }}
                            />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default ListTecnhologies;