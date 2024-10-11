'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Grid, Typography, Box, Button } from '@mui/material';
import { IconStarFilled, IconStarHalf, IconStarOff } from '@tabler/icons-react'; // Import filled stars

const banners = [
  {
    id: 1,
    src: '/images/banner1.jpg',
    title: 'Dubai’s Elite In-Home Beauty: Effortless Glamor for YOU',
    subtitle: 'Time to make your skin glow',
    buttonText: 'Book Now',
    rating: 4.5,
  },
  {
    id: 2,
    src: '/images/banner2.jpg',
    title: 'Dubai’s Elite In-Home Beauty: Effortless Glamor for YOU',
    subtitle: 'Time to make your skin glow',
    buttonText: 'Book Now',
    rating: 4,
  },
  {
    id: 3,
    src: '/images/banner3.jpg',
    title: 'Dubai’s Elite In-Home Beauty: Effortless Glamor for YOU',
    subtitle: 'Time to make your skin glow',
    buttonText: 'Book Now',
    rating: 5,
  },
];

// Helper function to render star icons based on the rating
const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 !== 0 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  const stars = [];

  // Add full filled stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<IconStarFilled key={`full-${i}`} size={20} color="gold" />);
  }

  // Add half star if present
  if (halfStars) {
    stars.push(<IconStarHalf key="half" size={20} color="gold" />);
  }

  // Add empty stars
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<IconStarOff key={`empty-${i}`} size={20} color="gray" />);
  }

  return stars;
};

const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box className="relative w-full mx-auto overflow-hidden">
      <Box
        sx={{
          display: 'flex',
          transition: 'transform 1s ease-in-out',
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {banners.map((banner) => (
          <Box
            key={banner.id}
            sx={{
              minWidth: '100%',
              height: { xs: '300px', md: '550px' },
              position: 'relative',
            }}
          >
            <Image
              src={banner.src}
              alt={`Banner ${banner.id}`}
              layout="fill"
              objectFit="cover"
            />

            {/* Overlay Content */}
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                p: 3,
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: 'white',
                  fontFamily: 'Philosopher, sans-serif',
                  // fontWeight: 'bold',
                  mb: 2,
                  textAlign: 'center',
                  maxWidth: '800px'
                }}
              >
                {banner.title}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: 'white',
                  mb: 4,
                  textAlign: 'center',
                }}
              >
                {banner.subtitle}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'white',
                  fontFamily: 'Philosopher, sans-serif',
                  color: 'black',
                  px: 4,
                  py: 1.5,
                  borderRadius: '30px',
                  fontWeight: 'bold',
                  '&:hover': { backgroundColor: '#e0e0e0' },
                }}
              >
                {banner.buttonText}
              </Button>

               {/* Render Star Ratings with Rating Number */}
               <Box sx={{position: 'absolute', bottom: '50px'}}>
               <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, mt: 4 }}>
                <Box sx={{ display: 'flex', mr: 1 }}>
                  {renderStars(banner.rating)}
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                >
                  {banner.rating} Star rating
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{ color: 'white', textAlign: 'center' }}
              >
                Rating on our services
              </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default BannerSlider;
