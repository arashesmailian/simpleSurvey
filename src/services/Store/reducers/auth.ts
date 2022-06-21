import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthentication:false,
    email: "",
    password: ""
  },
  reducers: {
    login_success: (state: any, {payload} : {payload: any}) => {
      state.isAuthentication=true;
      state.email= payload.email; 
      state.password= payload.password ;
      localStorage.setItem('user' , JSON.stringify(state));
      },
    logout_success: (state: any, {payload} : {payload: any}) => {
      state.isAuthentication = false;
      localStorage.setItem('user' , JSON.stringify(state));
      },
    },
})

// Action creators are generated for each case reducer function
export const { login_success } = authSlice.actions;
export const { logout_success } = authSlice.actions;

export default authSlice.reducer;
