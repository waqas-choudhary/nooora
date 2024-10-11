'use client';
import { useState, useRef } from 'react';
import { Box, Typography, Avatar, Grid } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Swiper styles
import SwiperCore from 'swiper'; // Import Swiper core
import { Star } from '@mui/icons-material'; // Material UI's Star icon

const testimonials = [
    {
        text: "Had mani / pedi, Lovely technicians, Really happy with results, Will definitely use again. Thank you.",
        name: "Polina Kuzma",
        rating: 5,
        image: "/images/avatar.png",
    },
    {
        text: "Had mani / pedi, Lovely technicians, Really happy with results, Will definitely use again. Thank you.",
        name: "Polina Kuzma",
        rating: 4,
        image: "/images/avatar.png",
    },
    {
        text: "Had mani / pedi, Lovely technicians, Really happy with results, Will definitely use again. Thank you.",
        name: "Polina Kuzma",
        rating: 3,
        image: "/images/avatar.png",
    },
    {
        text: "Had mani / pedi, Lovely technicians, Really happy with results, Will definitely use again. Thank you.",
        name: "Polina Kuzma",
        rating: 5,
        image: "/images/avatar.png",
    },

];

const TestimonialSliderComponent = () => {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleDotClick = (index) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
            setActiveIndex(index);
        }
    };

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.activeIndex);
    };

    return (
        <Box sx={{ textAlign: 'center', py: 8 }}>
            <Swiper
                ref={swiperRef}
                onSlideChange={handleSlideChange}
                spaceBetween={50}
                slidesPerView={1}
                style={{ padding: '40px 0' }}
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <Box sx={{ maxWidth: '1060px', mx: 'auto' }}>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontFamily: 'Philosopher, sans-serif',
                                    //   fontWeight: 'bold',
                                    color: '#333',
                                    lineHeight: '55px',
                                    mb: 3,
                                }}
                            >
                                <span style={{ color: '#E19A8F', fontSize: '162px', verticalAlign: 'bottom', display: 'block' }}>
                                    “
                                </span>
                                {testimonial.text}
                            </Typography>



                            {/* Dotted Border */}
                            <Box
                                sx={{
                                    borderTop: '1px dashed #E19A8F',
                                    borderBottom: '1px dashed #E19A8F',
                                    paddingY: 2,
                                    marginY: 2,
                                }}
                            >
                                {/* Testimonial Author */}
                                <Grid container spacing={2} justifyContent="space-between" alignItems="center" sx={{ mb: 0 }}>
                                    <Grid item sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                                        <Avatar
                                            alt={testimonial.name}
                                            src={testimonial.image}
                                            sx={{
                                                width: 50,
                                                height: 50,
                                            }}
                                        />
                                         <Typography sx={{ fontWeight: 'bold', color: '#333', fontFamily: 'Philosopher, sans-serif' }}>
                                            {testimonial.name}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                       
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} sx={{ color: '#E19A8F', fontSize: '24px' }} />
                                            ))}
                                            <Typography sx={{ ml: 1, fontSize: '16px', color: '#A45D63' }}>
                                                {testimonial.rating} Star rating on our services
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Dots */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                {testimonials.map((_, index) => (
                    <Box
                        key={index}
                        onClick={() => handleDotClick(index)} // Click to change slide
                        sx={{
                            width: activeIndex === index ? '40px' : '24px',
                            height: '4px',
                            backgroundColor: activeIndex === index ? '#A45D63' : '#D4867C',
                            margin: '0 4px',
                            borderRadius: '10px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                        }}
                    ></Box>
                ))}
            </Box>
        </Box>
    );
};

export default TestimonialSliderComponent;
