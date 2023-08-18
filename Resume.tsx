import * as React from "react";
import img from "../photos/8afa2768fb6ac64c551ae536f86a7a3a.png";
import img2 from '../photos/download.jpeg';
import {
  Typography,
  Button,
  Grid,
  Card,
  CardContent,

  CardActionArea,
  colors,

} from "@mui/material";

import { Protfolio2 } from "./PAbout2";
import styled from "@emotion/styled";
import SchoolIcon from '@mui/icons-material/School';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
const MyTypography = styled(Typography)({
  marginLeft: "50px", marginTop: "20px",color:'black'

 })
 const Mybtn = styled(Button)({
 margin:'5px'
 ,
 backgroundColor:"#44566c"
 })

 const Mydiv= styled("div")({
display:'flex',
marginTop:'80px'
 })

export function Resume(){
    return(
        <div>
          <Protfolio2/>

          <div >
          <MyTypography
            variant="h3"

          >
            <b>Resume</b> <img src={img} width="200px" />
          </MyTypography>

          <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={{ marginLeft: "20px" }}
        >
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 400}}>
              <CardActionArea>

                <CardContent  style={{ backgroundColor: "#ECF9FF" }}>
                <Typography variant="h5" style={{font:"26px" , color:'black' , }}>
                 <span style={{color:'red', marginRight:'8px'}}> <SchoolIcon /></span>Education</Typography>
                  <Typography gutterBottom variant="h6" component="div" style={{fontSize:'14px', paddingLeft:'32px'}}>
                  2021-2023

                  </Typography>
                  <Typography variant="h5" color="black" paddingLeft="28px">
                  Ph.D in Horriblensess
                  </Typography>
                  <p style={{color:"black",paddingLeft:'30px'}}>ABC University, Los Angeles, CA</p>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>


          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea>

                <CardContent  style={{ backgroundColor: "#F7C8E0" }}>
                <Typography variant="h5" style={{font:"26px" , color:'black' , }}>
                 <span style={{color:'red', marginRight:'8px'}}> <WorkOutlineIcon /></span>Experience</Typography>
                  <Typography gutterBottom variant="h6" component="div" style={{fontSize:'14px', paddingLeft:'32px'}}>
                  2017-2021

                  </Typography>
                  <Typography variant="h5" color="black" paddingLeft="28px">
                  Computer Science
                  </Typography>
                  <p style={{color:"black",paddingLeft:'30px'}}>ABC University, Imperialize Technical Institute</p>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 400}}>
              <CardActionArea>

                <CardContent style={{ backgroundColor: "#EA8FEA" }}>
                <Typography variant="h5" style={{font:"26px" , color:'black' , }}>
                 <span style={{color:'red', marginRight:'8px'}}>
                 < MilitaryTechIcon /></span>Awards</Typography>
                  <Typography gutterBottom variant="h6" component="div" style={{fontSize:'14px', paddingLeft:'32px'}}>
                  2015-2017

                  </Typography>
                  <Typography variant="h5" color="black" paddingLeft="28px">
                  Graphic Designer
                  </Typography>
                  <p style={{color:"black",paddingLeft:'30px'}}>Web Graphy, Los Angeles, CA</p>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 400}}>
              <CardActionArea>

                <CardContent style={{ backgroundColor: "#F7C8E0" }}>

                  <Typography gutterBottom variant="h6" component="div" style={{fontSize:'14px', paddingLeft:'32px'}}>
                  2019 - Present

                  </Typography>
                  <Typography variant="h5" color="black" paddingLeft="28px">
                  Sr. Software Tester
                  </Typography>
                  <p style={{color:"black",paddingLeft:'30px'}}>Google Inc.</p>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 400}}>
              <CardActionArea>

                <CardContent style={{ backgroundColor: "#EA8FEA" }}>

                  <Typography gutterBottom variant="h6" component="div" style={{fontSize:'14px', paddingLeft:'32px'}}>
                  2015-2017

                  </Typography>
                  <Typography variant="h5" color="black" paddingLeft="28px">
                  Cr. Web Developer
                  </Typography>
                  <p style={{color:"black",paddingLeft:'30px'}}>ib-themes ltd.</p>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 400}}>
              <CardActionArea>

                <CardContent style={{ backgroundColor: "#ECF9FF" }} >

                  <Typography gutterBottom variant="h6" component="div" style={{fontSize:'14px', paddingLeft:'32px'}}>
                  2014 - 2015

                  </Typography>
                  <Typography variant="h5" color="black" paddingLeft="28px">
                  Jr. Web Developer
                  </Typography>
                  <p style={{color:"black",paddingLeft:'30px'}}>Creative Gigs.</p>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 400}}>
              <CardActionArea>

                <CardContent style={{ backgroundColor: "#ECF9FF" }}>

                  <Typography gutterBottom variant="h6" component="div" style={{fontSize:'14px', paddingLeft:'32px'}}>
                  2021
                  </Typography>
                  <Typography variant="h5" color="black" paddingLeft="28px">
                  Best Developer
                  </Typography>
                  <p style={{color:"black",paddingLeft:'30px'}}>University Of Melbourne, NA

</p>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 400}}>
              <CardActionArea>

                <CardContent style={{ backgroundColor: "#F7C8E0" }}>

                  <Typography gutterBottom variant="h6" component="div" style={{fontSize:'14px', paddingLeft:'32px'}}>
                  2008

                  </Typography>
                  <Typography variant="h5" color="black" paddingLeft="28px">
                  Best Writter
                  </Typography>
                  <p style={{color:"black",paddingLeft:'30px'}}>Online Typodev Soluation Ltd..</p>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 400}}>
              <CardActionArea>

                <CardContent style={{ backgroundColor: "#EA8FEA" }}>

                  <Typography gutterBottom variant="h6" component="div" style={{fontSize:'14px', paddingLeft:'32px'}}>
                  2015-2017

                  </Typography>
                  <Typography variant="h5" color="black" paddingLeft="28px">
                  Best Freelancer
                  </Typography>
                  <p style={{color:"black",paddingLeft:'30px'}}>Fiver & Upwork Level 2 & Top Rated</p>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>


        </Grid>
      </div>

      <Mydiv>
         <div>
          <Typography variant="h5" color='black' paddingLeft='40px'><b>Working Skills</b></Typography> <br />

          <img src={img2} width='600px'height='200px' style={{paddingLeft:'22px'}}/>


         </div>
         <div style={{marginLeft:'20px'}}> <Typography variant="h5" color='black' paddingLeft='5px'><b>Knowledges</b></Typography> <br />

         <Mybtn variant="contained">Degital design</Mybtn> <Mybtn variant="contained">Marketing</Mybtn>
         <Mybtn variant="contained">Social Media</Mybtn>
         <Mybtn variant="contained">Print</Mybtn><br />
         <Mybtn variant="contained">Time Management</Mybtn>
         <Mybtn variant="contained">Flexibity</Mybtn>
         <Mybtn variant="contained">Print</Mybtn><br />
         <Mybtn variant="contained">Time Management</Mybtn>
         <Mybtn variant="contained">Flexibity</Mybtn>
         <Mybtn variant="contained">Social Media</Mybtn>
         </div>
          </Mydiv>
          <center>
            <div style={{marginTop:'100px'}}>
              <p>
              © 2023 All Rights Reserved by ib-themes.
              </p>
            </div>
          </center>





        </div>
    )
}
