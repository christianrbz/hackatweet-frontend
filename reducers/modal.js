import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false,
};

export const userSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal: (state, action) => {
        console.log("change in modale")
      state.value = action.payload; 
    },
   
  },
});

export const { showModal } = userSlice.actions;
export default userSlice.reducer;
