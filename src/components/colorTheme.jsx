import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#00695f',
      main: '#009688',
      dark: '#33ab9f',
      contrastText: '#fff',
    },
    secondary: {
      light: '#00a152',
      main: '#00e676',
      dark: '#33eb91',
      contrastText: '#000',
    },
  },
});

export default theme;