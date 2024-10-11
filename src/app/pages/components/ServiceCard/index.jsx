import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, Chip } from '@mui/material';
import Image from 'next/image';
import { IconStar } from '@tabler/icons-react';

const ServiceCard = ({ title, image, price }) => {
  return (
    <Card sx={{ borderRadius: '16px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', padding: '10px' }}>
      <CardMedia
        sx={{ height: '170px', borderRadius: '16px' }}
        component="img"
        alt={title}
        image={image}
      />
      <CardContent sx={{ padding: '10px', paddingBottom: '10px !important', textAlign: 'left' }}>
        <Chip
          icon={<IconStar size={16} style={{ color: '#32d851' }} />}
          label="30% OFF"
          sx={{
            backgroundColor: 'white',
            color: 'black',
            fontSize: '12px',
            fontWeight: 'bold',
            borderRadius: '5px',
            paddingLeft: '4px',
            paddingRight: '8px',
            height: '28px',
            marginTop: '-54px',
            marginLeft: '10px',
            lineHeight: 'normal',
          }}
        />
        <Typography variant="h6" sx={{
          fontWeight: 'bold', fontSize: '18px', color: '#A45D63', marginTop: '-17px', fontFamily: 'Philosopher, sans-serif',
        }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: '#212529', mt: 1 }}>
          Starts at <strong>{price}</strong>
        </Typography>
        <Box sx={{ textAlign: 'left', mt: 2 }}>
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
            Book Now
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
