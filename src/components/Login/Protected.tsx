import { Navigate } from "react-router-dom";

interface ProtectedInputs {
    isLoggedIn : boolean;
    children: any;
  }

const Protected = ({ isLoggedIn , children } : ProtectedInputs) => {
 if (!isLoggedIn) {
 return <Navigate to="/login" replace />;
 }
 return children;
};
export default Protected;