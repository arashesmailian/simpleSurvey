import React from 'react';
import { useState } from 'react';
import store from '../../services/Store';
import { useSelector } from 'react-redux';
import { login_success } from '../../services/Store/reducers/auth';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const authState:any = useSelector((state:any):any => state.auth);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(email && password){
      // if(authState.email !== email && authState.password !== password){
      //   store.dispatch(login_success({ id:email, email:email, password: password }));
      //   navigate("/");
      //   }
      //   else if(authState.email === email && authState.password !== password){
      //       alert("Email or password is wrong")
      //   }
      if(authState.email === email && authState.password !== password){
          alert("Email or password is wrong")
        }
        else{
          store.dispatch(login_success({ id:email, email:email, password: password }));
          navigate("/");
        }
      }
    }
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
          <h4>Login</h4>
          <form onSubmit={handleSubmit}>
            <div style={{width:"50%",margin: 10,}}>
                <label>Email address</label>
                <input 
                  style={{border:'1px solid blue', borderRadius:5, padding:"10px" , marginLeft:"20px"}} 
                  type="text" 
                  placeholder="Enter email" 
                  value={email} onChange={(e) => setEmail(e.target.value)}
                  required
                  />
            </div>
            <div style={{width:"50%",margin: 10}}>
                <label>Password</label>
                <input
                  style={{border:'1px solid blue', borderRadius:5, padding:"10px" , marginLeft:"20px"}}
                  type="password" 
                  placeholder="Password"
                  value={password} onChange={(e) => setPassword(e.target.value)}
                  required
                />
            </div>
            <button value="submit" type="submit">
                Submit
            </button>
          </form>
        </div>
  )
}

export default Login