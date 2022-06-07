import { configureStore } from '@reduxjs/toolkit'
import authUserSlice from '../features/authUserSlice'

export const store = configureStore({
  reducer: {
    user: authUserSlice
  },
})