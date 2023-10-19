import { createBrowserRouter } from "react-router-dom";
import Rootlayout from "../src/RootLayout/Rootlayout";
import ErrorPage from "../src/ErroPage/ErrorPage";

import Addphone from "../src/component/Pages/AddPhone/Addphone";

import Home from "../src/component/Home/Home";
import PhoneCard from "../src/component/Pages/phoneCard/PhoneCard";
import Phoneall from "../src/component/Home/Phone/Phoneall";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Rootlayout></Rootlayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
       {
path:"/",
element:<Home></Home>,
loader:()=>fetch('http://localhost:5000/phone'),

       },
       {
        path:"addphone",
        element:<Addphone></Addphone>,
        
       },
     
     


      ]
    },
  ]);
export default router;