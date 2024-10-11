'use client'
import { useState } from 'react';
import { Grid, Typography, Box, Button, CardContent, CardMedia, Chip } from '@mui/material';
import { IconStar } from '@tabler/icons-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Image from 'next/image';
import SwiperCore, { Pagination } from 'swiper'; // Import Pagination module
import ServiceCard from '../ServiceCard'; // Import the ServiceCard component

// Fake data for the sliders
const sliderData = {
    facial: [
        {
            id: 1,
            title: 'Acne Treatment',
            price: 'AED 709',
            image: 'images/image1.jpg',
        },
        {
            id: 2,
            title: 'Anti Aging',
            price: 'AED 709',
            image: 'images/image2.jpg',
        },
        {
            id: 3,
            title: 'Brightening Treatment',
            price: 'AED 709',
            image: 'images/image3.jpg',
        },
        {
            id: 4,
            title: 'Deep Cleansing',
            price: 'AED 709',
            image: 'images/image4.jpg',
        },
        {
            id: 5,
            title: 'House Cleansing',
            price: 'AED 709',
            image: 'images/image4.jpg',
        },
    ],
    cleanup: [
        {
            id: 1,
            title: 'Clean Up 1',
            price: 'AED 609',
            image: 'images/image1.jpg',
        },
        {
            id: 2,
            title: 'Clean Up 2',
            price: 'AED 609',
            image: 'images/image2.jpg',
        },
        {
            id: 3,
            title: 'Clean Up 3',
            price: 'AED 609',
            image: 'images/image3.jpg',
        },
        {
            id: 4,
            title: 'Clean Up 4',
            price: 'AED 609',
            image: 'images/image4.jpg',
        },
        {
            id: 5,
            title: 'Clean Up 5',
            price: 'AED 609',
            image: 'images/image4.jpg',
        },
    ],
};

SwiperCore.use([Pagination]); 

const WhatsNew = () => {
    const [activeTab, setActiveTab] = useState('facial'); 
    const [fade, setFade] = useState(false); 

    const handleTabChange = (tab) => {
        setFade(false); 
        setTimeout(() => {
            setActiveTab(tab);
            setFade(true); 
        }, 400); 
    };

    return (
        <Box sx={{ mt: 8, backgroundImage: 'url("/images/background.png")', backgroundRepeat: 'no-repeat', backgroundPositionX: 'right', backgroundPositionY: '200px' }}>
            <Box sx={{ margin: '0 64px', paddingBottom: '100px'}}>
                <Grid container spacing={4} sx={{ justifyContent: 'space-between', alignItems: 'end', mb: 4 }}>
                    <Grid item xs={12} md={4}>
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: 'bold',
                                color: '#333',
                                fontFamily: 'Philosopher, sans-serif',
                                mb: 2,
                            }}
                        >
                            What s <span style={{ color: '#E19A8F' }}>New</span>
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#707070'}}>
                            Our Dermalogica facial gets you the results you want – whether some gentle exfoliation and
                            rejuvenation, or treating dry or oily skin.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Image src="/images/dermalogica.svg" alt="dermalogica" width={318} height={118} />
                    </Grid>
                </Grid>

                {/* Tabs and Slider Section */}
                <Grid container spacing={4}>
                    {/* Left Side: Tabs */}
                    <Grid item xs={12} md={2}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                height: '100%',
                            }}
                        >
                            {/* Tab 1: Facial */}
                            <Box
                                sx={{
                                    position: 'relative',
                                    cursor: 'pointer',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    width: '218px',
                                    height: '118px',
                                    mb: 2,
                                    border: activeTab === 'facial' ? '2px solid #E19A8F' : '2px solid transparent',
                                }}
                                onClick={() => handleTabChange('facial')}
                            >
                                <Image src="/images/tab1.jpg" alt="Facial" width={218} height={118} />
                                <Box sx={{ textAlign: 'center', position: 'absolute', left: '38%', top: '41%', color: '#fff' }}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                        Facial
                                    </Typography>
                                </Box>
                            </Box>

                            {/* Tab 2: Clean Up */}
                            <Box
                                sx={{
                                    position: 'relative',
                                    cursor: 'pointer',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    width: '218px',
                                    height: '118px',
                                    mb: 2,
                                    border: activeTab === 'cleanup' ? '2px solid #E19A8F' : '2px solid transparent',
                                }}
                                onClick={() => handleTabChange('cleanup')}
                            >
                                <Image src="/images/tab2.png" alt="Clean up" width={218} height={118} />
                                <Box sx={{ textAlign: 'center', position: 'absolute', left: '38%', top: '41%', color: '#fff' }}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                        Clean up
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Right Side: Slider */}
                    <Grid item xs={12} md={10}>
                        <Box
                            sx={{
                                opacity: fade ? 1 : 0,
                                transition: 'opacity 0.5s ease-in-out', // Add fade-in transition
                            }}
                        >
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={4}
                                loop={true}
                                autoplay={{ delay: 3000 }}
                                pagination={{
                                    clickable: true,
                                }}
                                style={{ padding: '20px' }}
                                onSwiper={() => setFade(true)} // Trigger fade-in on Swiper initialization
                            >
                                {sliderData[activeTab].map((slide) => (
                                    <SwiperSlide key={slide.id}>
                                        <ServiceCard 
                                            title={slide.title} 
                                            image={slide.image} 
                                            price={slide.price} 
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default WhatsNew;
