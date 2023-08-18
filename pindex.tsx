import { MainCom } from "./Pmain";
import { Resume } from "./Resume";
import { PAbout } from "./pAbout";

import { Protfolio } from "./phome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PWork } from "./pwork";
import { Pblog } from "./pblog";
import { PContact } from "../tsproject1/pcontact";

export function Introduction() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Protfolio />} />
          <Route path="Home" element={<Protfolio />} />
          <Route path="/About" element={<PAbout />}></Route>
          <Route path="Home" element={<Protfolio />}></Route>
          <Route path="Resume" element={<Resume />}></Route>
          <Route path="Works" element={<PWork/>}></Route>
          <Route path="Blog" element={<Pblog/>}></Route>
          <Route path="Contact" element={<PContact/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
