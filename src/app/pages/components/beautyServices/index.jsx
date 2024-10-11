'use client'
import React, { useState, useRef } from 'react';
import { Grid, Typography, Box, Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay } from 'swiper'; // Import Swiper's Autoplay module
import 'swiper/swiper-bundle.css';
import ServiceCard from '../ServiceCard';

// Initialize Swiper modules
SwiperCore.use([Autoplay]);

const categories = ['Nails', 'Eyelash', 'Massage', 'Waxing', 'Facials'];

const services = {
  Nails: [
    { title: 'Gel Pedicure', image: '/images/nail1.jpg', price: 'AED 709' },
    { title: 'Gel Refill', image: '/images/nail2.jpg', price: 'AED 709' },
    { title: 'Gel Pedicure', image: '/images/nail3.jpg', price: 'AED 709' },
    { title: 'Gel Refill', image: '/images/nail4.jpg', price: 'AED 709' },
    { title: 'Gel Pedicure', image: '/images/nail1.jpg', price: 'AED 709' },
    { title: 'Gel Refill', image: '/images/nail2.jpg', price: 'AED 709' },
  ],
  Eyelash: [
    { title: 'Gel Pedicure', image: '/images/nail1.jpg', price: 'AED 709' },
    { title: 'Gel Refill', image: '/images/nail2.jpg', price: 'AED 709' },
    { title: 'Gel Pedicure', image: '/images/special1.jpg', price: 'AED 709' },
    { title: 'Gel Refill', image: '/images/nail2.jpg', price: 'AED 709' },
    { title: 'Gel Pedicure', image: '/images/nail1.jpg', price: 'AED 709' },
    { title: 'Gel Refill', image: '/images/nail2.jpg', price: 'AED 709' },
  ],
  Massage: [
    { title: 'Back Massage', image: '/images/special1.jpg', price: 'AED 809' },
    { title: 'Full Body Massage', image: '/images/special2.jpg', price: 'AED 1009' },
    { title: 'Back Massage', image: '/images/nail3.jpg', price: 'AED 809' },
    { title: 'Full Body Massage', image: '/images/special3.jpg', price: 'AED 1009' },
    { title: 'Back Massage', image: '/images/special1.jpg', price: 'AED 809' },
    { title: 'Full Body Massage', image: '/images/special2.jpg', price: 'AED 1009' },
  ],
  Waxing: [
    { title: 'Full Body Wax', image: '/images/image1.jpg', price: 'AED 599' },
    { title: 'Bikini Wax', image: '/images/image2.jpg', price: 'AED 399' },
    { title: 'Full Body Wax', image: '/images/image3.jpg', price: 'AED 599' },
    { title: 'Bikini Wax', image: '/images/service1.jpg', price: 'AED 399' },
    { title: 'Full Body Wax', image: '/images/image1.jpg', price: 'AED 599' },
    { title: 'Bikini Wax', image: '/images/image2.jpg', price: 'AED 399' },
  ],
  Facials: [
    { title: 'Acne Treatment', image: '/images/service2.jpg', price: 'AED 709' },
    { title: 'Deep Cleansing Facial', image: '/images/service4.jpg', price: 'AED 709' },
    { title: 'Acne Treatment', image: '/images/service3.jpg', price: 'AED 709' },
    { title: 'Deep Cleansing Facial', image: '/images/service1.jpg', price: 'AED 709' },
    { title: 'Acne Treatment', image: '/images/service2.jpg', price: 'AED 709' },
    { title: 'Deep Cleansing Facial', image: '/images/service4.jpg', price: 'AED 709' },
  ],
};

const BeautyServices = () => {
  const [selectedTab, setSelectedTab] = useState(0); 
  const swiperInstance = useRef(null);

  const allServices = categories.flatMap(category => services[category]);

  const handleTabClick = (index) => {
    setSelectedTab(index); // Immediately set the selected tab
    const startIndex = categories.slice(0, index).reduce((acc, cat) => acc + services[cat].length, 0);
    swiperInstance.current.slideTo(startIndex, 300); // Smooth scroll to the selected category
  };

  const handleSlideChange = (swiper) => {
    const categoryLengths = categories.map(cat => services[cat].length);
    const cumulativeSlides = categoryLengths.reduce((acc, curr, idx) => [...acc, (acc[idx] || 0) + curr], []);
    const currentCategoryIndex = cumulativeSlides.findIndex(cumulative => swiper.activeIndex < cumulative);

    if (currentCategoryIndex !== selectedTab) {
      setSelectedTab(currentCategoryIndex); // Set active tab only if it's different from the current
    }
  };

  return (
    <Box sx={{ textAlign: 'left', mx: 0, mt: 10, mb: 8 }}>
      {/* Header Section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: 2, mx: 8 }}>
        <Box sx={{ maxWidth: '700px' }}>
          <Grid container sx={{ gap: '20px', flexWrap: 'nowrap'}}>
            <Box
              sx={{
                backgroundColor: '#E7F3E8',
                padding: '10px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                color: '#4CAF50',
                fontWeight: 'bold',
                fontSize: '22px',
              }}
            >
              From 10 AM - 10 PM
            </Box>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 'bold',
                color: '#333',
                fontFamily: 'Philosopher, sans-serif',
              }}
            >
              200+ Home <br />
              <span style={{ color: '#E19A8F' }}>Beauty Services</span>
            </Typography>
            </Grid>
            <Typography variant="body1" sx={{ color: '#707070', mt: 2 }}>
              Pick and choose what services you’d like to receive from the comfort of your home. Book via WhatsApp, sit back and wait for your treatment!
            </Typography>
         
        </Box>

        {/* Tabs Section */}
        <Box sx={{ mb: 0, display: 'flex', justifyContent: 'center', gap: 2 }}>
          {categories.map((category, index) => (
            <Button
              key={category}
              variant="contained"
              sx={{
                backgroundColor: selectedTab === index ? '#F3F4F6' : '#fff',
                color: selectedTab === index ? '#A45D63' : '#707070',
                textTransform: 'none',
                borderRadius: '20px',
                fontWeight: 'bold',
                padding: '10px 20px',
                boxShadow: selectedTab === index ? '0px 4px 10px rgba(0, 0, 0, 0.1)' : 'none',
                '&:hover': { backgroundColor: '#F3F4F6' },
              }}
              onClick={() => handleTabClick(index)}
            >
              {category}
            </Button>
          ))}
        </Box>
      </Box>

      {/* Swiper Slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={6}
        loop={false}
        autoplay={false}
        onSlideChange={handleSlideChange} // Sync the tab with the slide
        onSwiper={(swiper) => (swiperInstance.current = swiper)} // Store swiper instance in ref
        style={{ padding: '20px' }}
      >
        {allServices.map((service, index) => (
          <SwiperSlide key={index}>
            <ServiceCard title={service.title} image={service.image} price={service.price} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default BeautyServices;
