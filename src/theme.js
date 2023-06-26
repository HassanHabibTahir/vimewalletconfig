import { createTheme } from '@mui/material';

export const theme = createTheme({
  // palette: {
  //   mode: 'dark',
  // },
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    subtitle1: {
      fontWeight: '400',
      fontSize: '25px',
      lineHeight: '30.48px',
      marginBottom: '8px',
    },
    h5: {
      fontWeight: '700',
      fontSize: '25px',
      lineHeight: '30.48px',
    },
    h6: {
      fontWeight: '400',
      fontSize: '22px',
      lineHeight: '24.38px',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {},
      },
    },
  },
});
