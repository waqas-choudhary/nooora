'use client';
import { Box, Typography, Button, Grid } from '@mui/material';
import Image from 'next/image'; 

const GiftCardComponent = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#FCEEFE',
        borderRadius: '20px',
        margin: '0 auto',
        padding: '40px',
        // margin: '40px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '1180px',
        mt: 6
      }}
    >
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {/* Left Side: Gift Card Image */}
        <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
          <Box
            sx={{
              backgroundColor: '#fff',
              borderRadius: '20px',
              padding: '20px',
              display: 'inline-block',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              width: '100%',
              maxWidth: '412px'
            }}
          >
            {/* Replace these with your actual image paths */}
            <Image
              src="/images/logo.svg" 
              alt="Nooora Logo"
              width={200}
              height={50}
              style={{ margin: '0 auto', marginTop: '10px' }}

            />
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', mt: 5, textAlign: 'center'}}>
            <Image
              src="/images/gift.svg" 
              alt="Gift Card"
              width={46}
              height={56}
                />
            <Typography
              sx={{
                fontFamily: 'Philosopher, sans-serif',
                fontWeight: 'bold',
                color: 'black',
                fontSize: '22px',
                marginTop: '10px',
              }}
            >
              Gift Card
            </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Right Side: Description and Button */}
        <Grid item xs={12} md={6} sx={{ textAlign: 'left' }}>
          <Typography
            sx={{
              fontFamily: 'Philosopher, sans-serif',
              color: 'black',
              fontSize: '17px',
              marginBottom: '20px',
              maxWidth: '350px'
            }}
          >
            Give the gift of Nooora—beauty and pampering. Simply choose the amount you wish to gift someone.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundImage: 'linear-gradient(90deg, #E19A8F 0%, #9E5A57 100%)',
              color: '#fff',
              textTransform: 'none',
              borderRadius: '50px',
              fontFamily: 'Philosopher, sans-serif',
              px: 4,
              '&:hover': {
                backgroundImage: 'linear-gradient(90deg, #d4867c 0%, #8c4843 100%)',
              },
            }}
          >
            Shop Gift Card
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GiftCardComponent;
