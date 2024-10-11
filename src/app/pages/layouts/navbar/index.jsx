'use client';

import { useState } from 'react';
import { IconPhone, IconBrandWhatsapp } from '@tabler/icons-react';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Image from 'next/image'; // Import Next.js Image component

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header>
      {/* Top bar */}
      <Box
        sx={{
          background: 'linear-gradient(to right, #E19A8F, #9E5A57)',
          py: 1,
          textAlign: 'center',
        }}
      >
        <Grid container justifyContent="center" gap="20px" alignItems="center" sx={{ px: 4 }}>
          <Grid item>
            <Typography variant="body2" sx={{ color: 'white' }}>
              Makeup That Spell Attention - 4 Classy Makeup Looks.
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'white',
                color: '#E19A8F',
                textTransform: 'none',
                fontWeight: 'bold',
                boxShadow: 'unset',
                borderRadius: '100px',
                fontFamily: 'Philosopher, sans-serif',
              }}
            >
              Book Now
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Main Navbar */}
      <Box sx={{ backgroundColor: 'white', py: 2.5, boxShadow: 2 }}>
        <Grid container justifyContent="space-between" alignItems="center" sx={{ px: 4 }}>
          <Grid item>
            <Grid container alignItems="center" spacing={2}>
              <Grid item>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#F6E1DD',
                    color: '#CB8277',
                    textTransform: 'none',
                    px: 2,
                    py: 1.5,
                    borderRadius: '999px',
                    boxShadow: 'none',
                    fontFamily: 'Philosopher, sans-serif',
                  }}
                >
                  Gift Card
                </Button>
              </Grid>
              <Grid
                sx={{
                  backgroundColor: '#F6E1DD',
                  color: '#CB8277',
                  width: '48px',
                  height: '48px',
                  borderRadius: '999px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
                item
              >
                <IconPhone sx={{ color: '#CB8277' }} />
              </Grid>
              <Grid item>
                <Typography variant="body1" sx={{ fontFamily: 'Philosopher, sans-serif' }}>
                  Blog
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          {/* Center Logo */}
          <Grid item>
            <a  href='#' container justifycontent="center">
              {/* Add Logo Image */}
              <Image
                src="/images/logo.svg" 
                alt="Logo"
                width={189}
                height={50} 
              />
            </a>
          </Grid>

          <Grid item>
            <Grid container alignItems="center" spacing={2}>
              {/* Services Dropdown */}
              <Grid item>
                <Button
                  variant="text"
                  onClick={toggleDropdown}
                  sx={{
                    color: 'black',
                    textTransform: 'none',
                    fontFamily: 'Philosopher, sans-serif',
                  }}
                  endIcon={<span>&#9662;</span>}
                >
                  Services
                </Button>
                {dropdownOpen && (
                  <Box
                    sx={{
                      position: 'absolute',
                      right: 100,
                      mt: 2.5,
                      width: '200px',
                      backgroundColor: 'white',
                      border: '1px solid #ccc',
                      borderRadius: '8px',
                      boxShadow: 3,
                      zIndex: '99999'
                    }}
                  >
                    <Button
                      fullWidth
                      sx={{
                        justifyContent: 'start',
                        px: 2,
                        fontFamily: 'Philosopher, sans-serif',
                        color: 'black',
                      }}
                    >
                      Service 1
                    </Button>
                    <Button
                      fullWidth
                      sx={{
                        justifyContent: 'start',
                        px: 2,
                        fontFamily: 'Philosopher, sans-serif',
                        color: 'black',
                      }}
                    >
                      Service 2
                    </Button>
                    <Button
                      fullWidth
                      sx={{
                        justifyContent: 'start',
                        px: 2,
                        fontFamily: 'Philosopher, sans-serif',
                        color: 'black',
                      }}
                    >
                      Service 3
                    </Button>
                  </Box>
                )}
              </Grid>

              {/* Book Now Button */}
              <Grid item>
                <Button
                  variant="contained"
                  startIcon={<IconBrandWhatsapp />}
                  sx={{
                    backgroundColor: 'transparent',
                    border: '2px solid #32D851',
                    color: '#32D851',
                    textTransform: 'none',
                    boxShadow: 'none',
                    fontWeight: 'bold',
                    borderRadius: '999px',
                    px: 3,
                    py: 1,
                    fontFamily: 'Philosopher, sans-serif',
                  }}
                >
                  Book Now
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </header>
  );
};

export default NavBar;
