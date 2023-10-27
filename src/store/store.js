import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../fovourite/favourity.slice'
import todoReducer from '../todo/ToDo.slice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer
  },
})