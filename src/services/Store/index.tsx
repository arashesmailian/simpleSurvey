import { configureStore } from '@reduxjs/toolkit'
import answerReducer from './reducers/answers'

const store = configureStore({
  reducer: {
    answers: answerReducer,
  },
});


export default store;