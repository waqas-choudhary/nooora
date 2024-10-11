import { Grid, Typography, Box, Button, Card, CardContent, CardMedia, Chip } from '@mui/material';
import { IconStar } from '@tabler/icons-react';
import Image from 'next/image';

const cardData = [
  {
    id: 1,
    title: 'Couples Facial',
    price: 'AED 709',
    image: 'images/special1.jpg',
    mostBooked: true, 
  },
  {
    id: 2,
    title: 'Couples Massage',
    price: 'AED 508',
    image: 'images/special2.jpg',
    mostBooked: false,
  },
  {
    id: 3,
    title: 'Couples Mani Pedi',
    price: 'AED 389',
    image: 'images/special3.jpg',
    mostBooked: false,
  },
];

const CouplesSpecial = () => {
  return (
    <Box
      sx={{
        border: '1px solid #E19A8F',
        borderRadius: '20px',
        padding: { xs: '24px', md: '48px' },
        margin: '0 64px',
        mt: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: { xs: 'column', md: 'row' },
        backgroundColor: '#fff',
      }}
    >
      {/* Left Image */}
      <Box sx={{ flex: 1, position: 'relative', width: { xs: '100%', md: '30%' }, height: '370px', bottom: '-88px' , textAlign: 'center' }}>
        <Image src="/images/special.png" alt="Special"  objectFit="contain" width= "223" height= "370"  style={{backgroundColor: 'white', margin: '0 auto'}}/>
      </Box>

      {/* Right Content */}
      <Box sx={{ flex: 1.5 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            color: '#333',
            fontFamily: 'Philosopher, sans-serif',
            mb: 2,
          }}
        >
          Couples <span style={{ color: '#E19A8F' }}>Special</span>
        </Typography>
        <Typography variant="body1" sx={{ color: '#707070', mb: 4, lineHeight: '1.8' }}>
          We are an on-demand salon in Dubai. Enjoy hassle-free at-home salon services from 10 am
          till 10 pm, seven days a week. Choose a time and place that suits you and we will come to
          your doorstep to pamper you anywhere in Dubai.
        </Typography>

        {/* Cards */}
        <Grid container spacing={2}>
          {cardData.map((card) => (
            <Grid key={card.id} item xs={12} sm={4}>
              <Card sx={{ borderRadius: '16px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', position: 'relative', padding: '10px'}}>
                <CardMedia
                  sx={{ height: '110px', borderRadius: '16px' }}
                  component="img"
                  alt={card.title}
                  image={card.image}
                />
                <CardContent sx={{padding: '0'}}>
                  {/* Conditional Rendering for Most Booked Label */}
                  {card.mostBooked && (
                    <Chip
                      icon={<IconStar size={16} style={{ color: 'white' }} />}
                      label="Most booked"
                      sx={{
                        backgroundColor: '#32d851a8',
                        color: 'white',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        borderRadius: '16px',
                        paddingLeft: '4px',
                        paddingRight: '8px',
                        height: '28px',
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        '.MuiChip-icon': {
                          marginLeft: '4px',
                        },
                      }}
                    />
                  )}
                  
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#A45D63' , mt: 1, fontFamily: 'Philosopher, sans-serif', }}>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#212529'}}>
                    Starts at <strong>{card.price}</strong>
                  </Typography>
                </CardContent>
                <Box sx={{ mt: 3 }}>
                  <Button
                    variant="contained"
                    sx={{
                        backgroundImage: 'linear-gradient(90deg, #E19A8F 0%, #9E5A57 100%)',
                        fontFamily: 'Philosopher, sans-serif',
                        color: '#fff',
                      textTransform: 'none',
                      borderRadius: '50px',
                      px: 4,
                      '&:hover': { backgroundImage: 'linear-gradient(90deg, #d4867c 0%, #8c4843 100%)',
                      },
                    }}
                  >
                    Book Now
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default CouplesSpecial;
