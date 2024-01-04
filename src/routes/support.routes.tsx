
import { Outlet } from "react-router-dom";
import { Support } from "../pages/project/supportform/Support.page";


export const allSupportForm={
    path:'/home',
    element:<><Outlet/></>,
    children:[
        {
            path:'supportform',
            element:<Support/>
        }
   
    ]
}