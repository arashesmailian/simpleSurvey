import QuestionViewer from './components/QuestionViewer';
import Login from './components/Login/Login';
import formConfig from './services/formConfigs.json';
import { useSelector } from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Protected from './components/Login/Protected';

function App() {
  const authState:any = useSelector((state:any):any => state.auth);
  console.log(authState.isAuthentication)
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<QuestionViewer configs={formConfig} />} /> */}
        <Route path='/' element=
        { 
          <Protected isLoggedIn={authState.isAuthentication} >
            <QuestionViewer configs={formConfig} />
          </Protected>
        }
        />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
