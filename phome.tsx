import { Typography, Button,Icon} from "@mui/material";
import "./pstyle.css";
import RoofingIcon from "@mui/icons-material/Roofing";
import PersonPinCircleRoundedIcon from "@mui/icons-material/PersonPinCircleRounded";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import HomeRepairServiceOutlinedIcon from "@mui/icons-material/HomeRepairServiceOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import imgs from "../photos/_images_about_avatar.jpg";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import DownloadingSharpIcon from "@mui/icons-material/DownloadingSharp";
import { BrowserRouter, Link } from "react-router-dom";
import styled from "@emotion/styled";
import bimg from "../photos/pngtree-colorful-round-abstract-vector-background-image_134620.jpg"
import { useState } from "react";
import { Padding } from "@mui/icons-material";

const MyButton = styled(Button)({
  border: "1px solid white",
                  background: "white",
                  margin: "10px",
                  borderRadius: "5px",
                  padding:"10px,20px",
                  color:"blue"

 })
 const DButton = styled(Button)({
  border: "1px solid white",
              borderRadius: "25px",
              backgroundColor: " #C70039",
              color: "white",
              marginTop:'30px',
 height:'55px',
 justifyItems:'center',

              fontSize:"18px"



 })

 const ILink= styled(Link)({
  border:"1px ",
  borderRadius:'5px',
  marginLeft:'10px',
  padding:'8px',
  paddingBottom:'13px',


 })

 const Mdiv = styled("div")({
  backgroundImage: `url(${bimg})`,
  backgroundColor: "antiquewhite",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize:"cover",
  backgroundAttachment: "fixed",
 minHeight:  "100vh",
  justifyContent: "space-around",
 })
 const Msdiv = styled("div")({
  display: "flex",
justifyContent: "space-between",
alignItems: "center",
paddingTop: "15px",

 })
 const menuItems = [
  { label: "Home",  icon: <RoofingIcon /> },
  { label: "About",  icon: <PersonPinCircleRoundedIcon /> },
  { label: "Resume", icon: <DescriptionOutlinedIcon /> },
  { label: "Works", icon: <HomeRepairServiceOutlinedIcon /> },
  { label: "Blog",  icon: <BookOutlinedIcon />},
  { label: "Contact",icon: <ContactPhoneOutlinedIcon /> }
];

const sstyle=[{label: <FacebookOutlinedIcon />,  color: 'blue' },
{ label: <TwitterIcon />,  color: 'blue'},
{label:  <LinkedInIcon />,  color: 'palevioletred' },
{ label: <InstagramIcon />,  color: 'blue' }]

export function Protfolio() {

  return (
    <Mdiv className="main">
      <Msdiv className="mainsec">
        <div>
          <h1 style={{color:"#C70039"}}> portfolio</h1>
        </div>
        <div className="hamburger">==</div>
        <div className="navbar-items">


        {menuItems.map((menuItem:any, index:any) => {
        return (
          <Link to={`/${menuItem.label}`}>
          <MyButton className="btn"
           key={index}>
            <span style={{paddingRight:'6px' , paddingLeft:'6px'}}> {menuItem.icon} </span>
            <span style={{paddingRight:'10px'}}>{menuItem.label}</span>


          </MyButton>
          </Link>
        );
      })}


        </div>
      </Msdiv>

      <center>
        <div style={{ marginTop: "10px" }}>
          <img src={imgs} alt="" style={{ borderRadius: "100%" }} />
          <h3 style={{ marginTop: "20px" }}> <b>Monalisa Ashley</b></h3>
          <p>Ui/Ux Designer</p>
         <div>
          {
            sstyle.map((menuItem:any, index:any)=>
           <ILink to="/" className="linkk"
            style={{color:menuItem.color , backgroundColor:'white'}}>{menuItem.label}</ILink> )
          }
         </div>
          <DButton>

             <p  style={{paddingLeft:'18px', paddingBottom:'0px', paddingTop:'15px',paddingRight:'18px',}}>
              <DownloadingSharpIcon /> Download CV</p>

          </DButton>
        </div>
      </center>
    </Mdiv>
  );
}
