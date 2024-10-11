'use client'
import { Box, Typography, Button, Grid } from '@mui/material';

const TicketComponent = () => {
  return (
    <Box sx={{ textAlign: 'center', margin: '0 auto', mt: 8, maxWidth: '1180px' }}>
      {/* Title Section */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          fontFamily: 'Philosopher, sans-serif',
          mb: 1,
          color: '#333',
        }}
      >
        Get Yourself a <span style={{ color: '#E19A8F' }}>Deal</span>
      </Typography>
      <Typography variant="body1" sx={{ color: '#707070', mb: 4 }}>
        Let us treat you to discounts and free treatments. Or why not treat a friend with a <br/> gift card? Spread the joy!
      </Typography>

      {/* Ticket Section */}
      <Grid container spacing={4} justifyContent="center">
        {/* Ticket 1 */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'start',
              justifyContent: 'start',
              padding: '20px',
              backgroundImage: 'url("/images/ticket.png")', 
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              height: '150px',
              position: 'relative',
              borderRadius: '12px',

            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 'bold',
                color: '#fff',
                fontFamily: 'Philosopher, sans-serif',
                fontSize: '24px',
                paddingLeft: '30px',
                paddingTop: '20px',

              }}
            >
              AED 30 OFF
            </Typography>
            
          </Box>
        </Grid>

        {/* Ticket 2 */}
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
              padding: '20px',
              backgroundImage: 'url("/images/mainTicket.png")', 
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              height: '150px',
              position: 'relative',
              borderRadius: '12px',
            }}
          >
            <Box sx={{ textAlign: 'center', width: '60%' }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 'bold',
                  color: '#A45D63',
                  fontFamily: 'Philosopher, sans-serif',
                  fontSize: '32px',
                }}
              >
                5+1 Packages
              </Typography>
            </Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#fff',
                color: 'black',
                textTransform: 'none',
                borderRadius: '5px',
                px: 3.7,
                position: 'absolute',
                right: '52px',
                bottom: '57px',
                fontFamily: 'Philosopher, sans-serif',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontSize: '18px', marginRight: '5px', background: '#008000', color: 'white', padding: '3px', borderRadius: '100px', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>★</span> 
              Book 5 & Get 1 free
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TicketComponent;
