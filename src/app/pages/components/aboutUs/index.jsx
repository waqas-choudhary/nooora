import { Grid, Typography, Box } from '@mui/material';

const HowItWorks = () => {
    return (
        <Box sx={{ py: 8, px: { xs: 2, md: 8 } }}>
            <Grid container spacing={4} sx={{ justifyContent: 'space-between' }}>
                {/* Left Side: Heading and Description */}
                <Grid item xs={12} md={4}>
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 'bold',
                            mb: 2,
                            color: '#333',
                            fontFamily: 'Philosopher, sans-serif',
                        }}
                    >
                        How <span style={{ color: '#E19A8F', fontStyle: 'italic' }}>Nooora</span> Works
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ color: '#707070', lineHeight: '1.6', fontFamily: 'Philosopher, sans-serif' }}
                    >
                        We are an on-demand salon in Dubai. Enjoy hassle-free at-home salon services from 10 am
                        till 10 pm, seven days a week. Choose a time and place that suits you, and we will come
                        to your doorstep to pamper you anywhere in Dubai.
                    </Typography>
                </Grid>

                {/* Right Side: Steps */}
                <Grid item xs={12} md={6}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4}>
                            <Typography
                                variant="h3"
                                sx={{ fontWeight: 'bold', fontSize: '55px', color: '#333', fontFamily: 'Philosopher, sans-serif' }}
                            >
                                01
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    // fontWeight: 'bold',
                                    color: '#333',
                                    fontFamily: 'Philosopher, sans-serif',
                                    fontSize: '22px', 
                                    lineHeight: '26px',
                                    marginTop: '25px'
                                }}
                            >
                                Select Saloon Services
                            </Typography>

                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography
                                variant="h3"
                                sx={{ fontWeight: 'bold', fontSize: '55px', color: '#333', fontFamily: 'Philosopher, sans-serif' }}
                            >
                                02
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    // fontWeight: 'bold',
                                    color: '#333',
                                    fontFamily: 'Philosopher, sans-serif',
                                    fontSize: '22px', 
                                    lineHeight: '26px',
                                    marginTop: '25px'

                                }}                            >
                                Choose <br /> Date & Time
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography
                                variant="h3"
                                sx={{ fontWeight: 'bold', fontSize: '55px',  color: '#333', fontFamily: 'Philosopher, sans-serif' }}
                            >
                                03
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    // fontWeight: 'bold',
                                    color: '#333',
                                    fontFamily: 'Philosopher, sans-serif',
                                    fontSize: '22px', 
                                    lineHeight: '26px',
                                    marginTop: '25px'

                                }}                            >
                                Enjoy <br /> Pampering
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default HowItWorks;
