
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

const RootState = {

}
const RootReducer = combineReducers({
  
})
const middleWare = [logger, thunk]
const storeSetup = configureStore({
  reducer: RootReducer,
  preloadedState: RootState,
  devTools: true,
  middleware: middleWare,
  // enhancers:
})
export default storeSetup