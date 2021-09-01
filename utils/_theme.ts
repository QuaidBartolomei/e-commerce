import {
  createTheme
} from '@material-ui/core/styles';

export const theme = createTheme({
  palette: {
    background: {},
    primary: {
      // https://coolors.co/2a373c-607d8b-a8dadc
      main: '#607d8b',
      light: '#a8dadc',
      dark: '#2A373C',
    },
    secondary: {
      main: '#212121',
    },
  },
});
