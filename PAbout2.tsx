import {  Button , Link} from "@mui/material";
import "./pstyle.css";
import {
  Roofing as RoofingIcon,
  PersonPinCircleRounded as PersonPinCircleRoundedIcon,
  DescriptionOutlined as DescriptionOutlinedIcon,
  HomeRepairServiceOutlined as HomeRepairServiceOutlinedIcon,
  BookOutlined as BookOutlinedIcon,
  ContactPhoneOutlined as ContactPhoneOutlinedIcon,

} from "@mui/icons-material";

import styled from "@emotion/styled";
import bimg from "../photos/pngtree-colorful-round-abstract-vector-background-image_134620.jpg"


const MyButton = styled(Button)({
  border: "1px solid white",
                  background: "white",
                  margin: "10px",
                  borderRadius: "5px",
                  padding:"10px,20px",
                  color:"blue"
 })





 const Mdiv = styled("div")({
  backgroundImage: `url(${bimg})`,
  backgroundColor: "antiquewhite",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize:"cover",
  backgroundAttachment: "fixed",
 height:'125px',
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


export function Protfolio2() {

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
          <Link href={`/${menuItem.label}`}>
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


    </Mdiv>
  );
}
