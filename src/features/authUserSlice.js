import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userData: {},
  taskToDisplay: {},
  auth: {}
}

export const authUserSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    user: (state, action) => {
      state.userData = action.payload?.results;
    },
    addTaskToStore: (state, action) => {
      state.taskToDisplay = action.payload;
    },
    auth: (state, action) => {
      //Token data
      state.decoded = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { user, addTaskToStore, auth } = authUserSlice.actions

export default authUserSlice.reducer