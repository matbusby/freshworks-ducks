import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3FA8B7', //Teal
      light: '#F2F2F2', //Off White
    },
    secondary: {
      main: '#ACD3A0', //Green
      light: '#E5E5E5', //Light Gray
    },
    text: {
      primary: '#4A4A4A', //Dark Gray
      secondary: '#FFFFFF', //White
    },
  },
  typography: {
    allVariants: {
      fontFamily: "'Quattrocento Sans', 'sans-serif'",
    },
    h1: {
      fontWeight: 700,
    },
  },
});

theme.props = {
  MuiTextField: {
    InputProps: {
      disableUnderline: true,
    },
  },
};

theme.overrides = {
  MuiButton: {
    root: {
      textTransform: 'capitalize',
      borderRadius: '35px',
      padding: '16px',
      boxShadow: 'none',
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
  MuiIconButton: {
    colorPrimary: {
      color: theme.palette.primary.light,
      borderRadius: '80px', //Circle icon
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
      },
    },
    colorSecondary: {
      backgroundColor: 'unset',
      color: theme.palette.primary.light,
    },
  },
  MuiTypography: {
    colorPrimary: {
      color: theme.palette.common.black,
    },
    colorSecondary: {
      color: theme.palette.common.white,
    },
  },
  MuiCard: {
    root: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.text.primary,
      borderRadius: '35px',
      padding: '20px',
    },
  },
  MuiTextField: {
    root: {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.grey[300],
      margin: '10px',
      paddingLeft: '30px',
      paddingBottom: '3px',
      borderRadius: '35px',
    },
  },
  MuiFormLabel: {
    root: {
      color: theme.palette.text.primary,
      marginLeft: '15px',
      marginTop: '5px',
      marginBottom: '5px',
    },
  },
  MuiAppBar: {
    root: {
      backgroundColor: theme.palette.primary.main,
    }

  },
  MuiFormHelperText: {
    root: {
      color: theme.palette.text.primary,
    }
  }
};

export default theme;
