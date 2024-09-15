import React from 'react';
import { Box, Button, Typography, Container, Grid2 } from '@mui/material';
import Layout from '@/components/layout/Layout';
import Scene from '@/components/scene/Scene';
import ListTecnhologies from '@/components/ui/ListTecnhologies';
import ExperenceWork from '@/components/utils/ExperenceWork';
import SwiperProjects from '@/components/utils/SwiperProjects';
import projectsWork from '@/utils/ListProjectsWork';
import projectsPersonal from '@/utils/ListProjectsPersonal';

const IndexPage = () => {
    return (
        <Layout title="Portfolio - Home" pageDescription="Home">
            <Container maxWidth="xll" sx={{ mt: 10, minHeight: '100vh' }}>
                <Grid2 container spacing={4}>
                    <Grid2 size={{ xs: 12, md: 8 }}>
                        <Box>
                            <Typography variant="h1" sx={{ fontSize: { xs: 36, md: 46 }, color: '#fff' }}>
                                {`Hi, I'm Juan Puertas!`}
                            </Typography>
                            <Typography variant="h1" sx={{ fontSize: { xs: 36, md: 46 }, color: '#fff' }}>
                                Developer <Typography component="span" color="primary" sx={{ fontSize: 'inherit' }}>Web</Typography>
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ mt: 4, color: '#fff' }}>
                                I am a web developer proficient in multiple programming languages, frameworks, code reviews, and automated testing. I excel in web development, utilizing my skills and creativity to build dynamic and robust applications.
                            </Typography>
                        </Box>
                        <Button variant="contained" sx={{ mt: 4, borderRadius: 1 }}>
                            Show More
                        </Button>
                        <Grid2 container spacing={2} sx={{ mt: 4 }}>
                            {[
                                { value: '1+', label: 'Year of experience' },
                                { value: '7', label: 'Projects created for clients' },
                                { value: '1', label: 'Personal project' }
                            ].map((item, index) => (
                                <Grid2 size={{ xs: 12, sm: 4 }} key={index}>
                                    <Typography variant="h4" fontWeight="bold" color="#fff">
                                        {item.value}
                                    </Typography>
                                    <Typography variant="subtitle1" color="#fff">
                                        {item.label}
                                    </Typography>
                                </Grid2>
                            ))}
                        </Grid2>
                        <ListTecnhologies />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <Box>
                            <Scene />
                        </Box>
                    </Grid2>
                </Grid2>
                <Box width={'100%'}>
                    <ExperenceWork/>
                </Box>
                <Box>
                    <SwiperProjects title='Completed Projects' listProjects={projectsWork}/>
                </Box>
                <Box>
                    <SwiperProjects title='Completed Personal Projects' listProjects={projectsPersonal}/>
                </Box>
            </Container>
        </Layout>
    );
};

export default IndexPage;