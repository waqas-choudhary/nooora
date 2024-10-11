'use client';
import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

const featuredPosts = [
  {
    title: 'The Difference Between Gel Nails and Acrylic Nail Extensions',
    category: 'NAILS',
    date: 'Jul 12, 2020',
    image: '/images/post.jpg',
  },
  {
    title: 'The Difference Between Gel Nails and Acrylic Nail Extensions',
    category: 'NAILS',
    date: 'Jul 12, 2020',
    image: '/images/post.jpg', 
  },
];

const FeaturedPost = () => {
  return (
    <Box sx={{ backgroundColor: '#FAEDEB', py: 8, mt: 12 }}>
      {/* Title Section */}
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontFamily: 'Philosopher, sans-serif',
          mb: 4,
          color: '#333',
        }}
      >
        Featured <span style={{ color: '#E19A8F' }}>Posts</span>
      </Typography>

      {/* Post Cards Section */}
      <Grid container spacing={4} justifyContent="center" sx={{gap: '40px', mt: 2}}>
        {featuredPosts.map((post, index) => (
          <Grid item xs={12} md={4} key={index} >
            <Card
              sx={{
                borderRadius: '82px', // Rounded corners as shown in the screenshot
                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
                padding: '12px',
                border: '1px solid #9e5a5761'
              }}
            >
              <CardMedia
                component="img"
                image={post.image}
                alt={post.title}
                sx={{ height: '231px', borderRadius: '70px' }} // Border radius on the top side of the card
              />
              <CardContent
                sx={{
                  textAlign: 'center',
                  padding: '24px',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    fontFamily: 'Philosopher, sans-serif',
                    color: '#333',
                  }}
                >
                  {post.title}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between',margin: '0 auto', mt: 4, maxWidth: '200px' }}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 'bold',
                      color: '#000',
                    }}
                  >
                    {post.category}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#707070' }}>
                    {post.date}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedPost;
