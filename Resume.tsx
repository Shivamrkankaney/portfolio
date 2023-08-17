import * as React from "react";
import RoofingIcon from "@mui/icons-material/Roofing";
import PersonPinCircleRoundedIcon from "@mui/icons-material/PersonPinCircleRounded";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import HomeRepairServiceOutlinedIcon from "@mui/icons-material/HomeRepairServiceOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import styled from "@emotion/styled";
import bimg from "../photos/pngtree-colorful-round-abstract-vector-background-image_134620.jpg"
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const MyButton = styled(Button)({
    border: "1px solid white",
                    background: "white",
                    marginLeft: "10px",
                    borderRadius: "10px",
                  textAlign:'center',
})
const MTdiv = styled("div")({
    backgroundImage: `url(${bimg})`,
    backgroundColor: "antiquewhite",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize:"cover",
    backgroundAttachment: "fixed",
    justifyContent: "space-around",
    height: "125px"

   })


export function Resume(){
    return(
        <div>
             <MTdiv className="main2">
          <div className="mainsec">
            <div style={{marginLeft: "20px" }}>
              <h1> portfolio</h1>
            </div>

            <div style={{ marginTop: "20px",float:"right" }} className="Dbtn">
              <MyButton
                className="btn"
              >
                {" "}
                <Link to="Home" style={{ textDecoration: "none" }}>
                  <RoofingIcon />
                  Home
                </Link>{" "}
              </MyButton>
              <MyButton
                className="btn"
              >
                {" "}
                <PersonPinCircleRoundedIcon />
                About
              </MyButton>
              <MyButton
                className="btn"
              >
                {" "}
                <DescriptionOutlinedIcon />
                Resume
              </MyButton>
              <MyButton
                className="btn"
              >
                {" "}
                <HomeRepairServiceOutlinedIcon />
                Works
              </MyButton>
              <MyButton
                className="btn"
              >
                <BookOutlinedIcon />
                Blogs
              </MyButton>
              <MyButton
                className="btn"
              >
                {" "}
                <ContactPhoneOutlinedIcon />
                Contact
              </MyButton>
            </div>
            <div className="hamburger2">==</div>
          </div>
        </MTdiv>
        
        </div>
    )
}
