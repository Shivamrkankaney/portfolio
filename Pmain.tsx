
import { Button } from "@mui/material";
import imgs from  '../photos/_images_about_avatar.jpg'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import DownloadingSharpIcon from '@mui/icons-material/DownloadingSharp';
import { BrowserRouter, Link } from 'react-router-dom';

export function MainCom(){
    return(
        <center>
        <div style={{marginTop:'10px'}}>
        <img src={imgs} alt=""  style={{borderRadius:'100%'}}/>
        <h1 style={{marginTop:'20px'}}>Monalisa Ashley</h1>
        <p>Ui/Ux Designer</p>
        <Button><FacebookOutlinedIcon />
        </Button><TwitterIcon/><Button>
            <LinkedInIcon /></Button><Button><InstagramIcon/></Button> <br />
 <Button style={{border:'1px solid white', borderRadius:'10px',backgroundColor:' rgb(143, 55, 55)', color:'white'}}><h4>Download<DownloadingSharpIcon/></h4></Button>



    </div>
   </center>
    )
}
