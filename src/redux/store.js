import { configureStore } from '@reduxjs/toolkit'
import contactreduce from '../redux/contactSlice'




export const store = configureStore({
  reducer: {
     contact:contactreduce
  },
})