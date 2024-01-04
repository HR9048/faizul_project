
import { Outlet } from "react-router-dom";
import { Support } from "../pages/project/supportform/Support.page";


export const allSupportForm={
    path:'/project',
    element:<><Outlet/></>,
    children:[
        {
            path:'Supportform',
            element:<Support/>
        }
   
    ]
}