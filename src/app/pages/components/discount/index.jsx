import React from 'react';
import { Grid, Typography, Box, Card, CardContent } from '@mui/material';
import Image from 'next/image';

const offers = [
  {
    title: 'Referral Programs',
    description: 'Refer a friend and gift them 15% off! You receive a 10% discount, too!',
    image: '/images/discount1.png', 
    backgroundColor: '#FFDCD6', // Color for the first card
  },
  {
    title: 'BirthdayGift',
    description: 'Celebrate with 10% off! on your birthday if you sign up with Nooora.',
    image: '/images/discount2.png',
    backgroundColor: '#FFF0EF', // Color for the second card
  },
];

const DiscountOffers = () => {
  return (
    <Box sx={{ textAlign: 'center', mt: 8, mb: 8, maxWidth: '1200px', margin: '0 auto'}}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 'bold',
          color: '#333',
          fontFamily: 'Philosopher, sans-serif',
        }}
      >
        Let Us Give You a <span style={{ color: '#E19A8F' }}>Discount!</span>
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: '#707070', mt: 2, maxWidth: '700px', margin: 'auto' }}
      >
        Why not refer a friend—both you and your friend are rewarded with discounts! And celebrate your next birthday in style with a 10% OFF from Nooora!
      </Typography>

      {/* Offer Cards */}
      <Grid container spacing={4} sx={{ mt: 4, justifyContent: 'center' }}>
        {offers.map((offer) => (
          <Grid item xs={12} md={6} key={offer.title}>
            <Card
              sx={{
                backgroundColor: offer.backgroundColor, 
                borderRadius: '16px',
                padding: '20px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'left',
                height: '218px'
              }}
            >
              {/* Image Section */}
              <Box sx={{ flexShrink: 0, mr: 2 }}>
                <Image
                  src={offer.image}
                  alt={offer.title}
                  width={180}
                  height={180} 
                  style={{ borderRadius: '8px'}}
                />
              </Box>

              {/* Text Section */}
              <CardContent sx={{ padding: '0px', paddingBottom: '0 !important', width: '100%', maxWidth: '252px', paddingLeft: '30px'}}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    fontSize: '1.5rem',
                    color: '#A45D63',
                    fontFamily: 'Philosopher, sans-serif',
                  }}
                >
                  {offer.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#212529',
                    mt: 1,
                    fontSize: '1rem',
                  }}
                >
                  {offer.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DiscountOffers;
