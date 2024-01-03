import { Accordion, AccordionDetails, AccordionSummary, AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material"

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
            sx={{ mr: 170 }}
          >
             <Button color="inherit">HOME</Button>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <Button color="inherit">Login</Button>
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


    </Box>
       
  
    
    </>
}