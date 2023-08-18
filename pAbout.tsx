import {
  Typography,
  Button,
  Grid,
  Card,
  CardContent,

  CardActionArea,

} from "@mui/material";
import * as React from "react";

import img from "../photos/8afa2768fb6ac64c551ae536f86a7a3a.png";
import img2 from "../photos/_images_about_about.jpg";
import bimg from "../photos/pngtree-colorful-round-abstract-vector-background-image_134620.jpg"

import "./pstyle.css";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import CakeIcon from "@mui/icons-material/Cake";
import BuildIcon from "@mui/icons-material/Build";
import CollectionsIcon from "@mui/icons-material/Collections";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import InfoIcon from "@mui/icons-material/Info";
import BarChartIcon from "@mui/icons-material/BarChart";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Protfolio2 } from "./PAbout2";


 const MyTypography = styled(Typography)({
  marginLeft: "50px", marginTop: "20px"

 })

export function PAbout() {

  return (
    <div>
      <header>

<Protfolio2/>


      </header>
      <div>
        <div style={{ height: "150px" }}>
          <MyTypography
            variant="h4"

          >
            <b>About Me</b> <img src={img} width="200px" />
          </MyTypography>
        </div>
        <div className="about-container">
          <div>
            <img
              src={img2}
              width="320px"
              height="100%"
              style={{
                marginLeft: "60px",
                marginTop: "2px",
                borderRadius: "10px",
              }}
            />
          </div>
          <div style={{ marginLeft: "100px" }}>
            <Typography variant="h4">Who am i?</Typography>
            <br />
            <p>
              I'm Creative Director and UI/UX Designer from Sydney, Australia,
              working in web development <br /> <br />
              and print media. I enjoy turning complex problems into simple,
              beautiful and intuitive designs. <br /> <br />
              My aim is to bring across your message and identity in the most
              creative way. I created web design for many famous brand
              companies.
            </p>
            <Typography variant="h4">Personal Info</Typography>
            <br />
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3}}
            >
              <Grid item xs={12} sm={6} md={5}>
                <PhoneAndroidIcon />
                phone- <br /> <b>+91659864575</b>
              </Grid>
              <Grid item xs={12} sm={6} md={5}>
                <LocationOnIcon />
                Location: <br />
                <b>HongKong</b>
              </Grid>
              <Grid item xs={12} sm={6} md={5}>
                <EmailIcon />
                Email <br />
                <b>199sh@gmail.com</b>
              </Grid>
              <Grid item xs={12} sm={6} md={5}>
                <CakeIcon />
                BirthDay <br /> <b>24/3/1999</b>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>

      <div>
        <Typography variant="h4" style={{ margin: "50px" }}>
          <b> What I do!</b>
        </Typography>
        <br />
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={{ marginLeft: "20px" }}
        >
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardContent style={{ backgroundColor: "pink" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    <BuildIcon />
                    Ui/Ux Design
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardContent style={{ backgroundColor: "khakhee" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    <CollectionsIcon />
                    <InfoIcon /> App Development
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardContent style={{ backgroundColor: "lightgreen" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    <ManageAccountsIcon />
                    Images
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardContent style={{ backgroundColor: "gray" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    About us
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardContent style={{ backgroundColor: "red" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    <SettingsApplicationsIcon />
                    Management
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardContent style={{ backgroundColor: "yellow" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {" "}
                    <BarChartIcon />
                    Facilities
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </div>
      <center>
      <div style={{marginTop:'20px'}}>
     <h5>© 2023 All Rights Reserved by ib-themes.</h5>
      </div>
      </center>
    </div>
  );
}
