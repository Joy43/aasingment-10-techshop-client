import { createBrowserRouter } from "react-router-dom";
import Rootlayout from "../src/RootLayout/Rootlayout";
import ErrorPage from "../src/ErroPage/ErrorPage";

import Addphone from "../src/component/Pages/AddPhone/Addphone";

import Home from "../src/component/Home/Home";

import Updatephone from "../src/component/Pages/Updatephone/Updatephone";
import Login from "../src/component/Authall/Login/Login";
import SignUp from "../src/component/Authall/SignUp/SignUp";



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
       {
        path:"updatePhone/:id",
        element:<Updatephone></Updatephone>,
        loader:({params})=>fetch (`http://localhost:5000/phone/${params.id}`),
      },
{
  path:"/showcategory/:id",
  loader:()=>fetch('http://localhost:5000/phone'),

},

     {
      path:"login",
      element:<Login></Login>,
     },
     {
      path:'signup',
      element:<SignUp></SignUp>

     }
     


      ]
    },
  ]);
export default router;