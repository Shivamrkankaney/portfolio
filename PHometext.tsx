import { Button, Link } from "@mui/material";
import styled from "@emotion/styled";
import imgs from "../photos/_images_about_avatar.jpg";
import "./pstyle.css";
import React from "react";

import {
  FacebookOutlined as FacebookOutlinedIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
  DownloadingSharp as DownloadingSharpIcon,
} from "@mui/icons-material";

const DButton = styled(Button)({
  border: "1px solid white",
  borderRadius: "25px",
  backgroundColor: " #C70039",
  color: "white",
  marginTop: "30px",
  height: "55px",
  justifyItems: "center",
  fontSize: "18px",
});

const Para = styled("p")({
  paddingLeft: "18px",
  paddingBottom: "0px",
  paddingTop: "15px",
  paddingRight: "18px",
});

const ILink = styled(Link)({
  border: "1px ",
  borderRadius: "5px",
  marginLeft: "10px",
  padding: "8px",
  paddingBottom: "13px",
});
const sstyle = [
  { label: <FacebookOutlinedIcon />, color: "blue" },
  { label: <TwitterIcon />, color: "blue" },
  { label: <LinkedInIcon />, color: "palevioletred" },
  { label: <InstagramIcon />, color: "blue" },
];

export const PHometext = () => {
  return (
    <div>
      <center>
        <div style={{ marginTop: "10px" }}>
          <img src={imgs} alt="" style={{ borderRadius: "100%" }} />
          <h3 style={{ marginTop: "20px" }}>
            {" "}
            <b>Monalisa Ashley</b>
          </h3>
          <p>Ui/Ux Designer</p>
          <div>
            {sstyle.map((menuItem: any, index: any) => (
              <ILink

                className="linkk"
                style={{ color: menuItem.color, backgroundColor: "white" }}
              >
                {menuItem.label}
              </ILink>
            ))}
          </div>
          <DButton className="Dbtn">
            <Para>
              <DownloadingSharpIcon /> Download CV
            </Para>
          </DButton>
        </div>
      </center>
    </div>
  );
};
