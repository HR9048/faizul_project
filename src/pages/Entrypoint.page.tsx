import { Box, Button, Grid, Paper } from "@mui/material"
import { Link } from "react-router-dom"
import { Home } from "./project/home/Home.page"
import { Login } from "./project/login/Login.page"
import { Register } from "./project/register/Register.page"


export const Entrypoint:React.FC<{}>=()=>{
    return (
    <>
    <div>
    <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
        <Paper elevation={3}  >
        
<Grid                                          
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
>
    {/* <Link to="/lessons/lesssons">           
<Button>lessons</Button></Link>
<Link to='/project/login'>
Home
</Link> 
 <Link to='/contact/contact'>
<Button>Contact Form</Button>
</Link>  */}
<Register/>
 <Login/>
 <Home/>
 <Link to='/Login/login'>Login
</Link>
<Link to='/home/supportform'>
    <button>Supportfrom</button>
</Link>
<Link to='/Register/register'>Register
</Link>
</Grid> 
            
    </Paper>
    </Box>
    
    </div>
    </>
 
    )
}