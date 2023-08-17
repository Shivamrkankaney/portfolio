import { Typography, Button } from "@mui/material";
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

const MyButton = styled(Button)({
  border: "1px solid white",
                  background: "white",
                  marginLeft: "10px",
                  borderRadius: "10px",

 })
 const DButton = styled(Button)({
  border: "1px solid white",
              borderRadius: "10px",
              backgroundColor: " rgb(143, 55, 55)",
              color: "white",

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
export function Protfolio() {
  return (
    <Mdiv className="main">
      <Msdiv className="mainsec">
        <div>
          <h1> portfolio</h1>
        </div>
        <div className="hamburger">==</div>
        <div className="navbar-items">
          <MyButton
            className="btn"

          >
            {" "}
            <RoofingIcon />
            Home
          </MyButton>
          <MyButton
            className="btn"

          >
            {" "}
            <Link to="About" style={{ textDecoration: "none" }}>
              {" "}
              <PersonPinCircleRoundedIcon />
              About
            </Link>
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
      </Msdiv>

      <center>
        <div style={{ marginTop: "10px" }}>
          <img src={imgs} alt="" style={{ borderRadius: "100%" }} />
          <h1 style={{ marginTop: "20px" }}>Monalisa Ashley</h1>
          <p>Ui/Ux Designer</p>
          <Button>
            <FacebookOutlinedIcon />
          </Button>
          <TwitterIcon />
          <Button>
            <LinkedInIcon />
          </Button>
          <Button>
            <InstagramIcon />
          </Button>{" "}
          <br />
          <DButton

          >
            <h4>
              Download
              <DownloadingSharpIcon />
            </h4>
          </DButton>
        </div>
      </center>
    </Mdiv>
  );
}
