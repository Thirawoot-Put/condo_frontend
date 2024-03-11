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
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

export default function Navbar() {
  const navigate = useNavigate();
  const { authUser, logout } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const goProfile = () => {
    navigate(`/user/profile/${authUser?.id}`);
    setAnchorEl(null);
  };

  const goChat = () => {
    navigate(`/user/chat`);
    setAnchorEl(null);
  };

  const goCreatePost = () => {
    navigate('/agent/post');
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='fixed'
        sx={{ height: '4rem', px: '1rem', bgcolor: '#153243' }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <div className='flex gap-4'>
            <Typography
              role='button'
              onClick={() => navigate('/map')}
              variant='p'
              component='div'
              sx={{ flexGrow: 1, borderRight: 1, paddingRight: 2 }}
            >
              Map
            </Typography>
            <Typography
              role='button'
              onClick={() => navigate('/search')}
              variant='p'
              component='div'
              sx={{ flexGrow: 1, borderRight: 1, paddingRight: 2 }}
            >
              Check our room
            </Typography>
            <Typography
              role='button'
              onClick={() => navigate('/user/review')}
              variant='p'
              component='div'
              sx={{ flexGrow: 1 }}
            >
              Review
            </Typography>
          </div>
          <div>
            <Typography
              role='button'
              onClick={() => navigate('/')}
              variant='h5'
              component='div'
              sx={{ flexGrow: 1 }}
            >
              CondRent
            </Typography>
          </div>
          <div className='flex items-center gap-4 ml-24'>
            {authUser && (
              <Typography
                variant='p'
                component='div'
                sx={{ flexGrow: 1, fontSize: 20, fontWeight: 500 }}
              >
                {authUser.firstName} {authUser.lastName}
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
                  <MenuItem onClick={goChat}>Chats</MenuItem>
                  {authUser.role === 'AGENT' && (
                    <MenuItem onClick={goCreatePost}>Create post</MenuItem>
                  )}
                  <MenuItem
                    onClick={() => {
                      logout();
                      setAnchorEl(null);
                      navigate('/');
                    }}
                  >
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            ) : (
              <Button
                onClick={() => navigate('/login')}
                bg='gray'
                color='black'
              >
                Login/Register
              </Button>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
