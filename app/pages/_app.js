import '../styles/globals.css'
import ContextProvider from '../context';
import theme from '../styles/theme';
import { ThemeProvider } from '@material-ui/core/styles';

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ContextProvider>
  )
}

export default MyApp
