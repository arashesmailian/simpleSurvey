import { createSlice } from "@reduxjs/toolkit"

export const answersSlice = createSlice({
    name: 'answers',
    initialState: {
      
    },
    reducers: {
        answerUpdate: (state: any, {payload} : {payload: any}) => {
          state[payload.id] = {value: payload.value, title: payload.title}
      },
    },
  })
  

  
// Action creators are generated for each case reducer function
export const { answerUpdate } = answersSlice.actions

export default answersSlice.reducer