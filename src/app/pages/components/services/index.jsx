import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import Image from 'next/image';

const services = [
  {
    title: 'Massage',
    image: '/images/service1.jpg', 
  },
  {
    title: 'Eyelash',
    image: '/images/service2.jpg',
  },
  {
    title: 'Body',
    image: '/images/service3.jpg',
  },
  {
    title: 'Nail',
    image: '/images/service4.jpg',
  },
  {
    title: 'Facial',
    image: '/images/service5.jpg',
  },
  {
    title: 'Hair',
    image: '/images/service6.jpg',
  },
];

const HomeSalonServices = () => {
  return (
    <Box sx={{ textAlign: 'center', mt: 2, mb: 8, mx: 10 }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 'bold',
          color: '#333',
          fontFamily: 'Philosopher, sans-serif',
        }}
      >
        Our Popular Home <br />
        <span style={{ color: '#E19A8F' }}>Salon Service Includes</span>
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: '#707070', mt: 2, maxWidth: '700px', margin: 'auto' }}
      >
        Nooora’s team of qualified professionals deliver FIVE star salon services from the comfort of your home.
        Choose from 200+ mobile salon services in Dubai that starts from as little as...
      </Typography>

      {/* Service Grid */}
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.title}>
            <Box
              sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '16px',
                cursor: 'pointer',
              }}
            >
              <Image
                src={service.image}
                alt={service.title}
                layout="responsive"
                width={350}
                height={230}
                style={{ borderRadius: '16px' }}
              />
              {/* Overlay Text */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: '#fff',
                  borderRadius: '8px',
                  padding: '10px 20px',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 'bold',
                    color: '#fff',
                    fontSize: '1.5rem',
                    fontFamily: 'Philosopher, sans-serif',
                    textTransform: 'uppercase',
                    fontSize: '32px'
                  }}
                >
                  {service.title}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomeSalonServices;
