import React from 'react'
import { Box, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

const SwiperProjects = ({listProjects, title}) => {
    return (
        <Box mt={5}>
            <Typography variant="subtitle1" textAlign='center' sx={{ color: '#fff', fontSize: 32, mb: 2 }}>
                {title}
            </Typography>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
                style={{
                    width: '420px',
                    height: '320px'
                }}
            >
                {listProjects.map((project, index) => (
                    <SwiperSlide 
                        key={index} 
                        style={{
                            borderRadius: 5,
                            overflow: 'hidden' // Asegura que la imagen no sobresalga del borde redondeado
                        }}
                    >
                        <Box
                            sx={{
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                position: 'relative'
                            }}
                        >
                            <Box
                                component="img"
                                src={project.imagePath}
                                alt={project.name}
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain', // Esto asegura que toda la imagen sea visible
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                }}
                            />
                            <Typography
                                variant="h6"
                                sx={{
                                    position: 'relative', // Cambiado de 'absolute' a 'relative'
                                    zIndex: 1, // Asegura que el texto esté sobre la imagen
                                    p: 1,
                                    color: '#fff',
                                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                                    backgroundColor: 'rgba(0,0,0,0.5)', // Fondo semi-transparente para mejorar la legibilidad
                                    width: '100%'
                                }}
                            >
                                {project.name}
                            </Typography>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
            <img src="/projects/work/" alt="" />
        </Box>
    );
}

export default SwiperProjects