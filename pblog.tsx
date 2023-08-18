import * as React from 'react';
import {Card, CardActions, CardActionArea,CardContent,CardMedia,Button,Typography ,Grid,} from '@mui/material';
import "./pstyle.css";
import { Protfolio2 } from './PAbout2';
import img from "../photos/8afa2768fb6ac64c551ae536f86a7a3a.png";
import styled from '@emotion/styled';
import img1 from "../photos/_images_blog_images_small_1.jpg"
import img2 from "../photos/_images_blog_images_small_2.jpg"
import img3 from "../photos/_images_blog_images_small_3.jpg"
import img4 from "../photos/_images_blog_images_small_4.jpg"

import img5 from "../photos/_images_blog_images_small_5.jpg"

import img6 from "../photos/_images_blog_images_small_6.jpg"




const MyTypography = styled(Typography)({
    marginLeft: "50px", marginTop: "20px",color:'black'

   })
   
export function Pblog(){
    return(

        <div>
             <Protfolio2/>

<div>
<MyTypography
    variant="h3"

  >
    <b>Blog</b> <img src={img} width="200px" />
  </MyTypography>

</div>

<Grid
  container
  rowSpacing={1}
  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
  style={{ marginTop:'30px' , justifyContent:'space-around' }}
>
  <Grid item xs={12} sm={6} md={4}>
    <Card sx={{ maxWidth: 430}} style={{padding:'24px', backgroundColor:"#FFAACF", borderRadius:"10px"}}>
    <CardMedia className='grid'
component="img"
alt="green iguana"
height="330"
image={img1}

/>

        <CardContent  style={{ backgroundColor: "#ECF9FF" }}>
        <Typography variant="body2" color="text.secondary">
        27 April
Inspiration
</Typography> <br />

<Typography gutterBottom variant="h5" component="div">

Top 10 Toolkits for Deep Learning in 2021.
</Typography>
            </CardContent>


    </Card>
  </Grid>

  <Grid item xs={12} sm={6} md={4}>
    <Card sx={{ maxWidth: 350}} style={{padding:'24px', backgroundColor:"#B9F3E4", borderRadius:"10px"}}>
    <CardMedia className='grid'
component="img"
alt="green iguana"
height="280"
image={img2}

/>

        <CardContent  style={{ backgroundColor: "#F6E6C2" }}>
        <Typography variant="body2" color="text.secondary">
        000 April
Inspiration
</Typography> <br />

<Typography gutterBottom variant="h5" component="div">

Everything You Need to Know About Web Accessibility.
</Typography>
            </CardContent>


    </Card>
  </Grid>


  <Grid item xs={12} sm={6} md={4}>
    <Card sx={{ maxWidth: 385}} style={{padding:'24px', backgroundColor:"#FFAACF", borderRadius:"10px"}}>
    <CardMedia className='grid'
component="img"
alt="green iguana"
height="330"
image={img3}

/>

        <CardContent  style={{ backgroundColor: "#ECF9FF" }}>
        <Typography variant="body2" color="text.secondary">
        27 April
Inspiration
</Typography> <br />

<Typography gutterBottom variant="h5" component="div">

How to Own Your Audience by Creating an Email List.
</Typography>
            </CardContent>


    </Card>
  </Grid>

  <Grid item xs={12} sm={6} md={4}>
    <Card sx={{ maxWidth: 350}} style={{padding:'24px', backgroundColor:"#B9F3E4", borderRadius:"10px"}}>
    <CardMedia className='grid'
component="img"
alt="green iguana"
height="280"
image={img4}

/>

        <CardContent  style={{ backgroundColor: "#F6E6C2" }}>
        <Typography variant="body2" color="text.secondary">
        21 April
Web Design
</Typography> <br />

<Typography gutterBottom variant="h5" component="div">

The window know to say beside you
</Typography>
            </CardContent>


    </Card>
  </Grid>

  <Grid item xs={12} sm={6} md={4}>
    <Card sx={{ maxWidth: 400}} style={{padding:'24px', backgroundColor:"#FFAACF", borderRadius:"10px"}}>
    <CardMedia className='grid'
component="img"
alt="green iguana"
height="250"
image={img5}

/>

        <CardContent  style={{ backgroundColor: "#ECF9FF" }}>
        <Typography variant="body2" color="text.secondary">
        177 April
Inspiration
</Typography> <br />

<Typography gutterBottom variant="h5" component="div">

How to Own Your Audience by Creating an Email List.
</Typography>
            </CardContent>


    </Card>
  </Grid>


  <Grid item xs={12} sm={6} md={4}>
    <Card sx={{ maxWidth: 400}} style={{padding:'24px', backgroundColor:"#FFD9C0", borderRadius:"10px"}}>
    <CardMedia className='grid'
component="img"
alt="green iguana"
height="280"
image={img6}

/>

        <CardContent  style={{ backgroundColor: "#D0F5BE" }}>
        <Typography variant="body2" color="text.secondary">
        27 April
Inspiration
</Typography> <br />

<Typography gutterBottom variant="h5" component="div">

Everything You Need to Know About Web Accessibility.
</Typography>
            </CardContent>


    </Card>
  </Grid>


</Grid>


<center>
<div style={{margin:'100px', backgroundColor:'whitesmoke'}}>
<p>© 2023 All Rights Reserved by ib-themes.</p>
</div>
</center>
        </div>
    )

}
