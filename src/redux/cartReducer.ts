import { createSlice } from '@reduxjs/toolkit'
import store from 'redux/store'
//import {CartItemDTO} from "models/cart"

export const initialState = {
  loaded : false,
  //items: new Array<CartItemDTO>(),
  items: new Array<any>(),
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {  
      console.log(action);
      state.items.push(action.payload);
    },

    remove: (state, action) => {
      let gid = action.payload;
      state.items = state.items.filter(p=>p.gid != gid);

    },
  },
})

export default cartSlice.reducer
