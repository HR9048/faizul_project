
import { Outlet } from "react-router-dom";
import { Support } from "../pages/project/supportform/Support.page";

export const allSupportForm={
    path:'/support',
    element:<><Outlet/></>,
    children:[
        {
            path:'support',
            element:<Support/>
        }
   
    ]
}