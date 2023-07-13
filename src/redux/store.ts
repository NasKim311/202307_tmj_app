import { combineReducers , configureStore } from '@reduxjs/toolkit'

import cartReducer, {cartSlice} from "redux/cartReducer"

const rootReducer = combineReducers({
	cart: cartReducer ,
	
  });
  
  export type RootState = ReturnType<typeof rootReducer>;
  
  const store = configureStore({
	reducer: rootReducer,
  });


  export default store;