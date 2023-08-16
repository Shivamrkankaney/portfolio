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
export function Protfolio() {
  return (
    <div className="main">
      <div className="mainsec">
        <div>
          <h1> portfolio</h1>
        </div>
        <div className="hamburger">==</div>
        <div className="navbar-items">
          <Button
            className="btn"
            style={{
              border: "1px solid white",
              marginLeft: "10px",
              borderRadius: "10px",
              background: "white",
            }}
          >
            {" "}
            <RoofingIcon />
            Home
          </Button>
          <Button
            className="btn"
            style={{
              border: "1px solid white",
              background: "white",
              marginLeft: "10px",
              borderRadius: "10px",
            }}
          >
            {" "}
            <Link to="About" style={{ textDecoration: "none" }}>
              {" "}
              <PersonPinCircleRoundedIcon />
              About
            </Link>
          </Button>
          <Button
            className="btn"
            style={{
              border: "1px solid white",
              background: "white",
              marginLeft: "10px",
              borderRadius: "10px",
            }}
          >
            {" "}
            <DescriptionOutlinedIcon />
            Resume
          </Button>
          <Button
            className="btn"
            style={{
              border: "1px solid white",
              background: "white",
              marginLeft: "10px",
              borderRadius: "10px",
            }}
          >
            {" "}
            <HomeRepairServiceOutlinedIcon />
            Works
          </Button>
          <Button
            className="btn"
            style={{
              border: "1px solid white",
              background: "white",
              marginLeft: "10px",
              borderRadius: "10px",
            }}
          >
            <BookOutlinedIcon />
            Blogs
          </Button>
          <Button
            className="btn"
            style={{
              border: "1px solid white",
              background: "white",
              marginLeft: "10px",
              borderRadius: "10px",
            }}
          >
            {" "}
            <ContactPhoneOutlinedIcon />
            Contact
          </Button>
        </div>
      </div>

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
          <Button
            style={{
              border: "1px solid white",
              borderRadius: "10px",
              backgroundColor: " rgb(143, 55, 55)",
              color: "white",
            }}
          >
            <h4>
              Download
              <DownloadingSharpIcon />
            </h4>
          </Button>
        </div>
      </center>
    </div>
  );
}
