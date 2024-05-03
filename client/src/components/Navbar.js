import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        padding: '8px 0',
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: '#333', fontWeight: 'bold' }}
        >
          HiringFast
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button
            color="inherit"
            sx={{
              marginRight: '16px',
              color: '#666',
              '&:hover': { color: '#333' },
            }}
          >
            Find Work
          </Button>
          <Button
            color="inherit"
            sx={{
              marginRight: '16px',
              color: '#666',
              '&:hover': { color: '#333' },
            }}
          >
            Applications
          </Button>
          <Button
            color="inherit"
            sx={{
              marginRight: '16px',
              color: '#666',
              '&:hover': { color: '#333' },
            }}
          >
            Latest Jobs
          </Button>
          <Button
            color="inherit"
            sx={{
              marginRight: '16px',
              color: '#666',
              '&:hover': { color: '#333' },
            }}
          >
            Post a job
          </Button>
          <Button
            color="inherit"
            sx={{
              marginRight: '16px',
              color: '#666',
              '&:hover': { color: '#333' },
            }}
          >
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;