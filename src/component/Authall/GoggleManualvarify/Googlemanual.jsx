import { useContext } from "react";

import { FcGoogle } from "react-icons/fc";
import { IconContext } from "react-icons";
import { AuthContext } from "../../../ProviderVarify/Provider";


const GooogleManual = () => {
const{signInWithGoogle}=useContext(AuthContext)
    const handlemanualGoogle=()=>{
        signInWithGoogle()
        }
    return (
        <div >
            <IconContext.Provider value={{ className: "shared-class", size: 35 }}><button  onClick={handlemanualGoogle}>  <FcGoogle></FcGoogle>  </button> </IconContext.Provider>
           
        </div>
    );
};

export default GooogleManual;