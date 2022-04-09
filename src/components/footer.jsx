import React from "react";
import monogram from "../assets/mainpage/monogram_white.webp"

function Footer() {
  return (
    <div className="container-fluid mt-0" style={{"backgroundColor": "#94a395", width: "100%"}}>
    <div className="row mt-10 justify-content-center align-items-center" style={{"borderTop": "10pt"}}>
     &nbsp;
    </div>
    
    <div className="row mt-10 justify-content-center align-items-center" style={{"borderTop": "10pt"}}>
     <p className="text-center" style={{"fontFamily": 'Josefin Sans', "fontWeight": "300",  color:"white", "fontSize": "14px", "letterSpacing": "1px", "borderTop": "10pt"}}>
      &nbsp;
      <br/>
      &nbsp;
      <br/>
      FOLLOW ME ON INSTAGRAM
     </p>
    </div>        
    <div className="row mt-3 pb-0 justify-content-center fluid" id="instagramRow" style={{"backgroundColor": "#94a395"}}>
            {["COw6SLnNNxC", "CPnVkSItA06", "CPnVsOpN_xS", "CPnWDeUNWkl", "CVIXOe4Nfbo", "CXvOZHwtnIs"].map(el => <div className="col-6 col-lg-2" key = {el}> <a href = {"https://www.instagram.com/p/" + el}>  <img src = {"/ig/" + el + ".jpg"} className = "img-fluid mb-3" width = "100" height="100" style={{width:"100%"}} alt = "instagram thumbnail"/> </a></div>)}
    </div>
    
    <div style={{"fontFamily": 'Cormorant Garamond', "fontWeight": "300",  color:"white", "fontSize": "14px", "letterSpacing": "1px"}}>
    <div className="row justify-content-center"><img src = {monogram} alt="annabella studios monogram" style={{"height": "36pt"}}/></div>
    <div className="row justify-content-center pt-3">
    <a href="mailto:hello@annabellastudios.com" style = {{color:"white"}}>
      hello@annabellastudios.com
      </a>
      </div>
    <div className="row justify-content-center pb-3">0493 364 891</div>
    </div>
    
    <p className="text-center mb-0 pb-3" style={{"fontFamily": 'Cormorant Garamond', "fontWeight": "300",  color:"white", "fontSize": "14px", "letterSpacing": "1px", "borderTop": "10pt"}}> COPYRIGHT © 2022 ANNABELLA STUDIOS &nbsp; - &nbsp; ALL RIGHTS RESERVED </p>
    </div>
  );
}

export default Footer;
