import { useContext } from "react";
import { AuthContext } from "../src/ProviderVarify/Provider";
import { useLocation,Navigate } from "react-router-dom";
import { Audio } from 'react-loader-spinner'

const PrivateRouter = ({children}) => {

    const {user,load}=useContext(AuthContext)
    
    const location=useLocation();
console.log(location);
    if(load){
        return <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
     }
     if(user){
         return children;
     }


    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRouter;