import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import useAuth from '../features/auth/hook/useAuth';
import * as store from '../ultils/local-store';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

export default function Navbar() {
  const navigate = useNavigate();
  const { authUser } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const goProfile = () => {
    navigate(`/user/profile/${authUser?.id}`);
    setAnchorEl(null);
  };

  const goCreatePost = () => {
    navigate('/agent/post');
    setAnchorEl(null);
  };

  const logout = () => {
    store.clearToken();
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed' sx={{ height: '4rem', px: '1rem' }}>
        <Toolbar>
          <Typography
            role='button'
            onClick={() => navigate('/')}
            variant='h6'
            component='div'
            sx={{ flexGrow: 1 }}
          >
            Condrent
          </Typography>
          {authUser && (
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              Welcome {authUser.firstName} {authUser.lastName}
            </Typography>
          )}
          {authUser ? (
            <div>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleMenu}
                color='inherit'
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={goProfile}>Profile</MenuItem>
                {authUser.role === 'AGENT' && (
                  <MenuItem onClick={goCreatePost}>Create post</MenuItem>
                )}
                <MenuItem onClick={logout}>Logout</MenuItem>
              </Menu>
            </div>
          ) : (
            <Button onClick={() => navigate('/login')} bg='gray' color='black'>
              Login/Register
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
