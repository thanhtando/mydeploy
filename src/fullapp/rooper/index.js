
import { Provider } from 'react-redux';
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
    </Provider>
  )
}