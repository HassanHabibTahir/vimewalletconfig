import { useCallback, useContext, useState } from 'react';
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';

import { AppContext } from '../utils';
import { StyledWalletMultiButton } from './Styles';
import Sidebar from './Sidebar';

const pages = [
  {
    name: 'Staking',
    to: '/staking',
  },
  {
    name: 'Farming',
    to: '/farming',
  },
];

const NavBar = () => {
  const { account, connect, disconnect } = useContext(AppContext);

  //   const [solarPrice, setSolarPrice] = React.useState(0)
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = useCallback((event) => {
    setAnchorElNav(event.currentTarget);
  }, []);

  const handleCloseNavMenu = useCallback(() => {
    setAnchorElNav(null);
  }, []);

  const connectionHandler = useCallback(() => {
    if (account) {
      return disconnect();
    }
    connect();
  }, [account, connect, disconnect]);

  return (
    <AppBar position="static" color="transparent" sx={{ boxShadow: 'none' }}>
      <Box display={{ xs: 'block', md: 'none' }}>
        <Sidebar />
      </Box>
      <Container>
        <Box display={{ xs: 'none', md: 'block' }}>
          <Toolbar disableGutters sx={{ height: '6em' }}>
            <RouterLink to="/">
              {/* <Box
              component="img"
              src={logo}
              alt=" Logo"
              sx={{ mr: 2, width: '200px' }}
            /> */}
              Logo
            </RouterLink>
            <Box
              sx={{
                display: 'flex',
                flexGrow: 1,
                justifyContent: 'flex-end',
              }}
            >
              <Box
                display={{ xs: 'none', md: 'flex' }}
                gap={5}
                alignItems="center"
                fontWeight={500}
                fontSize="13px"
                letterSpacing="1px"
              >
                {pages.map(({ name, to }) => (
                  <RouterLink
                    key={to + name}
                    to={to}
                    style={{
                      textDecoration: 'none',
                      color: '#fff',
                      textAlign: 'center',
                      fontSize: '16px',
                    }}
                  >
                    {name}
                  </RouterLink>
                ))}
                <StyledWalletMultiButton onClick={connectionHandler}>
                  {account
                    ? account.slice(0, 4) + '...' + account.slice(-4)
                    : 'Connect'}
                </StyledWalletMultiButton>
              </Box>
              <Box display={{ xs: 'flex', md: 'none' }}>
                <IconButton
                  size="large"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon sx={{ color: '#000' }} />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiPaper-root': {
                      backgroundColor: '#02052C',
                    },
                  }}
                >
                  {pages.map(({ name, to }) => (
                    <MenuItem key={to + name} onClick={handleCloseNavMenu}>
                      <RouterLink
                        to={to}
                        style={{
                          textDecoration: 'none',
                          color: '#fff',
                          textAlign: 'center',
                          fontSize: '16px',
                        }}
                      >
                        {name}
                      </RouterLink>
                    </MenuItem>
                  ))}

                  <MenuItem onClick={handleCloseNavMenu}>
                    <StyledWalletMultiButton onClick={connectionHandler}>
                      {account
                        ? account.slice(0, 4) + '...' + account.slice(-4)
                        : 'Connect'}
                    </StyledWalletMultiButton>
                  </MenuItem>
                </Menu>
              </Box>
            </Box>
          </Toolbar>
        </Box>
      </Container>
    </AppBar>
  );
};

export default NavBar;
