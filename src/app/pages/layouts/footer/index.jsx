'use client';
import { Box, Typography, Grid, Link, Button, IconButton } from '@mui/material';
import { Facebook, Instagram, WhatsApp } from '@mui/icons-material'; // Social media & WhatsApp icons
import Image from 'next/image'; // Next.js Image component if you're using Next.js

const locations = ['Abu Dhabi', 'Egypt', 'Bahrain', 'Berlin', 'London', 'Denmark', 'Egypt', 'Bahrain', 'Berlin', 'London', 'Denmark',];

const services = {
    Nails: ['Nail Spa', 'Nail Extensions', 'Nail Treatments'],
    Occasions: ['Wedding', 'Gift Cards'],
    Massage: ['Couple Massage', 'Therapeutic massage', 'Reflexology Massage Thai', 'Massage'],
    Eyelash: ['Eyelash Extension', 'Brow Lamination', 'Lash Lifting'],
    'Face & Body': ['Facial', 'Clean Ups', 'Waxing', 'Threading', 'Bikini/Brazilian Waxing'],
    Hair: ['Blow Dry Hair Botox', 'Hair Color', 'Hair Cut', 'Hair Styling Keratin'],
};

const FooterComponent = () => {
    return (
        <Box sx={{ backgroundColor: '#F8EBE9', pt: 6, pb: 4, textAlign: 'center', borderRadius: '60px 60px 0 0', paddingBottom: '10px' }}>
            {/* Locations */}
            <Box sx={{ mb: 6, borderBottom: '2px solid #fff', paddingBottom: '43px' }}>
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', fontFamily: 'Philosopher, sans-serif' }}>
                    Our Locations
                </Typography>
                <Grid container spacing={2} justifyContent="center" sx={{ maxWidth: '763px', margin: '0 auto' }}>
                    {locations.map((location, index) => (
                        <Grid item key={index}>
                            <Box
                                sx={{
                                    display: 'inline-block',
                                    fontFamily: 'Philosopher, sans-serif',
                                    padding: '10px 20px',
                                    borderRadius: '10px',
                                    backgroundColor: '#fff',
                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                <Typography sx={{ fontSize: '20px', color: '#000', fontFamily: 'Philosopher, sans-serif', }}>{location}</Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Logo and Main Links */}
            <Box sx={{ textAlign: 'center', mb: 4, }}>
                <Image src="/images/logo.svg" alt="Noora Logo" width={190} height={120} style={{margin: '0 auto'}}/>
                <Typography sx={{ mt: 4, maxWidth: '600px', mx: 'auto', color: '#212529', mb: 4, fontFamily: 'Philosopher, sans-serif', }}>
                    Enjoy top-tier home salon services in Dubai, delivered right to your door. Relax as we bring the ultimate
                    pampering experience to the comfort of your home.
                </Typography>
                <Grid container justifyContent="center" spacing={2} sx={{ mb: 4 }}>
                    {['Home', 'About Noora', 'Blog', 'Services', 'Contact Us', 'Sitemap'].map((link, index) => (
                        <Grid item key={index}>
                            <Link href="#" underline="none" sx={{ color: '#A45D63', border: '1px solid #C67D71', px: 3, py: 1, borderRadius: '100px'}}>
                                {link}
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Services Grid */}
            <Grid container spacing={3} justifyContent="center" sx={{ mb: 4, maxWidth: '1278px', margin: '0 auto', borderTop: '1px solid #F6E1DD', borderBottom: '1px solid #F6E1DD'}}>
                {Object.entries(services).map(([category, items], index) => (
                    <Grid item key={index} xs={12} sm={6} md={2}>
                        <Typography sx={{ fontWeight: 'bold', mb: 2, fontSize: '16px', color: '#333', textAlign: 'left', fontFamily: 'Philosopher, sans-serif', }}>
                            {category}
                        </Typography>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', textAlign: 'left' }}>
                            {items.map((item, itemIndex) => (
                                <li key={itemIndex} style={{ marginBottom: '8px' }}>
                                    <Link href="#" underline="none" sx={{ color: '#A45D63', fontSize: '14px' }}>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Grid>
                ))}
                    {/* Book Now Button and Social Media Icons */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2, mb: 4, width: '100%' }}>
                {/* Book Now Button with WhatsApp Icon */}
                <Button
                    variant="outlined"
                    startIcon={<WhatsApp />}
                    sx={{
                        color: '#32D851',
                        borderColor: '#32D851',
                        textTransform: 'none',
                        fontSize: '18px',
                        borderRadius: '30px',
                        fontFamily: 'Philosopher, sans-serif',
                        padding: '8px 22px',
                        background: 'white',
                        '&:hover': {
                            backgroundColor: 'rgba(50, 216, 81, 0.1)',
                        },
                    }}
                >
                    Book Now
                </Button>

                {/* Social Media Icons */}
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <IconButton href="#" sx={{ color: '#A45D63', background: '#c078584a' }}>
                        <Facebook />
                    </IconButton>
                    <IconButton href="#" sx={{ color: '#A45D63',  background: '#c078584a' }}>
                        <Instagram />
                    </IconButton>
                </Box>
            </Box>
            </Grid>

        

            {/* Footer Bottom Section */}
            <Box sx={{  pt: 4, maxWidth: '1278px', margin: '0 auto' }}>
                <Grid container justifyContent="space-between" alignItems="center" spacing={3} sx={{ mb: 2 }}>
                    {/* Copyright Text */}
                    <Grid item sx={{display: 'flex', alignItems: 'center', gap: '20px'}}> 
                        <Typography sx={{ color: '#C67D71',  }}>Nooora Beauty Concierge © 2022-2023</Typography>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Image src="/images/payement.png" alt="Visa" width={290} height={20} />
                            
                            {/* Add more payment icons as needed */}
                        </Box>
                    </Grid>

                    {/* Terms Links */}
                    <Grid item>
                        <Grid container spacing={2} justifyContent="center">
                            {['Terms', 'Reschedule', 'Refund', 'Cancellation', 'Privacy'].map((link, index) => (
                                <Grid item key={index}>
                                    <Link href="#" underline="none" sx={{ color: '#C67D71' }}>
                                        {link}
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default FooterComponent;
