
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';

const setupStore = () => {
  
}
const store = setupStore();
const MyApp = () => {

  return(
    <Provider store={store}>
      <head>
        <title>Create Now</title>
        <link rel='icon' href='/favicon.ico'/>
      </head>
      <ThemeProvider >

      </ThemeProvider>
    </Provider>
  )
}