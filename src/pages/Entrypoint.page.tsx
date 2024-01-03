import { Box, Button, Grid, Paper } from "@mui/material"
import { Link } from "react-router-dom"
import { Home } from "./project/home/Home.page"

export const Entrypoint:React.FC<{}>=()=>{
    return <>
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
<Home/>
<Link to='/support/supportform'>
<Button>Support Form</Button>
</Link>         
</Grid>

            
        </Paper>
    </Box>
    
    </>
}