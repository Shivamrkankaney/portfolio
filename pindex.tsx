
import { MainCom } from "./Pmain";
import { PAbout } from "./pAbout";
import { Protfolio } from "./phome";
import { BrowserRouter, Route, Routes } from "react-router-dom";



export function Introduction(){

    return(
        <div>
            <BrowserRouter>

            <Routes>
<Route path="/" element={<Protfolio/>}/>
                <Route path="Home" element={<PAbout/>}/>
<Route path="About" element={<PAbout/>}></Route>
<Route path="Home" element={<Protfolio/>}></Route>

            </Routes>




            </BrowserRouter>
        </div>
    )
}
