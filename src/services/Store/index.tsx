import { configureStore } from '@reduxjs/toolkit'
import answerReducer from './reducers/answers'
import loginReducer from './reducers/auth'

const store = configureStore({
  reducer: {
    answers: answerReducer,
    auth: loginReducer,
  },
});


export default store;