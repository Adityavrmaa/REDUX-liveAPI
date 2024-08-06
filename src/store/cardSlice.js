import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
}

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    add: (state,action) => {
        state.cart.push(action.payload);
    },
    remove: (state,action) => {
      return state.cart.filter((item)=>item.id!== action.payload);
    },
   
  },
})


export const { add, remove } = cardSlice.actions

export default cardSlice.reducer