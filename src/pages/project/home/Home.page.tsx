import { Accordion, AccordionDetails, AccordionSummary, AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { Support } from "../supportform/Support.page"

export const Home:React.FC<{}>=()=>{
  

    return <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"

            aria-label="font-family"
            sx={{ mr: 150 }}
          >
             <Button color="inherit">HOME</Button>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
        </Toolbar>
        </AppBar>

        <div>
      <Accordion>
        <AccordionSummary
        >
          <Typography>Query 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
        >
          <Typography>Query 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
        >
             <Typography>Query 3</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
    <center>
    <div>
      <Support/>
      <Link to= './supportform/support.page'>
        <Button>Support form</Button>
      </Link>
    </div>
    </center>
    


    </Box>
       
  
    
    </>
}