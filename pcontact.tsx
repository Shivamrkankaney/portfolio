import styled from "@emotion/styled"
import { Typography , Grid,CardContent,CardActionArea,Card, Button} from "@mui/material"
import { Protfolio2 } from "./PAbout2"
import img from "../photos/8afa2768fb6ac64c551ae536f86a7a3a.png";
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import TextField from '@mui/material/TextField';

const MyTypography = styled(Typography)({
    marginLeft: "50px", marginTop: "20px",color:'black'

   })
   const Mydiv= styled("div")({
    display:'flex',
    marginTop:'80px',

justifyContent:'space-around'
     })

export function PContact(){
    return(

        <div>
             <Protfolio2/>

<div>

  <Mydiv>
<div >
    <div>
<Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={{ marginTop:'30px' , justifyContent:'space-around' }}
        >
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ minWidth: 300}} style={{ backgroundColor:"#FFAACF", borderRadius:"10px",}}>


                <CardContent  style={{ backgroundColor: "#ECF9FF" }}>
                <Typography gutterBottom variant="h5" component="div"> <span style={{margin:'10px'}}><EmailIcon/></span>

 <b>Phone</b>
</Typography>
                <Typography variant="body2" color="text.secondary" paddingLeft="40px">
        +999 999 666
        </Typography>
        <Typography variant="body2" color="text.secondary"paddingLeft="40px">
        +999 999 666
        </Typography>


                    </CardContent>


            </Card>
          </Grid>
          </Grid>
          </div>
          <div>
          <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={{ marginTop:'30px' , justifyContent:'space-around' }}
        >
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{  minWidth: 300}} style={{backgroundColor:"#B9F3E4", borderRadius:"10px"}}>


                <CardContent  style={{ backgroundColor: "#F6E6C2" }}>
                <Typography gutterBottom variant="h5" component="div"> <span style={{margin:'10px'}}><PermPhoneMsgIcon/></span>

<b>Email</b>
</Typography>
                <Typography variant="body2" color="text.secondary"paddingLeft="40px">
       sshifsf@gmail.com
        </Typography>
        <Typography variant="body2" color="text.secondary"paddingLeft="40px">
       sshifsf@gmail.com
        </Typography>



                    </CardContent>


            </Card>
          </Grid>
          </Grid>
          </div>
          <div>
          <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={{ marginTop:'30px' , justifyContent:'space-around' }}
        >
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{  minWidth: 300}} style={{backgroundColor:"#FFAACF", borderRadius:"10px"}}>


                <CardContent  style={{ backgroundColor: "#ECF9FF" }}>
                <Typography gutterBottom variant="h5" component="div"> <span style={{margin:'10px'}}><HomeIcon/></span>


Address
</Typography>
                <Typography variant="body2" color="text.secondary"paddingLeft="40px">
 Tilak nagar
        </Typography>
        <Typography variant="body2" color="text.secondary"paddingLeft="40px">
 Tilak nagar
        </Typography>


                    </CardContent>


            </Card>
          </Grid>


        </Grid>
        </div>
</div>

         <div style={{marginLeft:'20px'}}> <Typography variant="h5"  paddingLeft='5px' paddingTop='40px'>I'm always open to discussing product</Typography>
         <Typography variant="h5"  paddingLeft='5px' > <b>design work or partnerships.</b></Typography>

         <div style={{marginTop:'40px', marginLeft:'5px'}}>
         <TextField id="standard-basic" label="Name*" variant="standard"  style={{width:'400px'}}/>


         </div>
         <div style={{marginTop:'40px', marginLeft:'5px'}}>
         <TextField id="standard-basic" label="Email*" variant="standard"  style={{width:'400px'}}/>


         </div>
         <div style={{marginTop:'40px', marginLeft:'5px'}}>
         <TextField id="standard-basic" label="Address*" variant="standard"  style={{width:'400px'}}/>


         </div>
         <div style={{marginTop:'40px', marginLeft:'5px'}}>
         <Button variant="outlined" style={{border:'1px solid blue', color:'blue'}}>Submit</Button>


         </div>
</div>

         </Mydiv>
         </div>

         <center>
            <div style={{margin:'100px'}}>
              <p>
              © 2023 All Rights Reserved by ib-themes.
              </p>
            </div>
          </center>
         </div>
    )}
