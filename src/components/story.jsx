import React from "react";
import me from "../assets/mainpage/me.jpg"
import { Link } from "react-router-dom";

const textStyle = {"fontFamily": "Cormorant Garamond", "fontWeight": "300", "fontSize": "14px", "letterSpacing": "2px"}
const headingStyle = {"fontFamily": "Cormorant Garamond", "fontWeight": "300", "fontSize": "28px", "letterSpacing": "2px", "textTransform":"uppercase"}

function Story() {
  return (
    <div className="story">
    <div className="jumbotron jumbotron-fluid p-0" style={{"backgroundColor":"#f2eae7"}}>
     <div className="container text-center" style={{"fontFamily": "Cormorant Garamond", "color":"#254F5E"}}>
      <p className="tab-heading" style={{"textTransform": "uppercase"}}>
        The Story of Annabella Studios
      </p>
      <p style={{"fontFamily": "Cormorant Garamond", "fontWeight": "300", "fontSize": "14px", "letterSpacing": "2px"}}>
        Annabella Studios is a floral design studio in Queensland, specialising in wedding & event floristry <br/> inspired by the harmony of nature &  the dynamic of seasonal changes! 
      </p>
     </div>
    <div className="container mb-5">
     <div className="row mb-4 justify-content-around">
      <div className="col-lg-6 col-sm-12 pt-4">
       <img className="img-fluid w-80" loading="lazy" src={me} alt="libby" style={{"cursor": "pointer"}}/>
      </div>
      <div className="col-lg-6 col-sm-12 pt-4 text-center" style={{"color":"#254F5E"}}>
       <p style={headingStyle}>
        WEDDINGS &amp; EVENTS
       </p>
       <p style={textStyle}>
        Annabella Studio’s signature style is creating out of the ordinary florals for weddings, events & flower styling… whether for an elopement or a sit down formal event for hundreds of your closest friends. We will create magic with an abundance of colour & texture.<br/><br/>
        We offer quotations following a virtual or in person consultation. Please follow the link to <Link to="/requests" style={{"color": "#254F5E"}}> event requests</Link> to organise a coffee or a cocktail with me to discuss your event or wedding.        
       </p>
       <br/>
       <p style={headingStyle}>
        Philosophy
       </p>
       <p style={textStyle}>
        Libby’s designs are built on a philosophy of abundance in nature, joy of celebration, passion & the enchantment of rambling blooms.
       </p>
       <br/>
       <p style={headingStyle}>
        Libby Annabella
       </p>
       <p style={textStyle}>
        Originally from New Zealand, Libby has followed flowers across the globe. Living & working in London, Amsterdam, Dublin & across Europe, Libby has chased design, floral fulfillment & the romance of travel. These experiences have created, inspired & infused Libby’s colourful, rambling & floralful style.<br/><br/>
        Currently based in Brisbane, Australia, but with no fixed compass, Libby will travel wherever the flowers will take her, specialising in weddings, events & flower styling across Australia, New Zealand & the globe.<br/><br/>
        If Libby was a cocktail… she would be an Elderflower Sour. It's a delightful mix of acidity & floral elderflower flavor that is frothy & sprinkled with rosie delight… what cocktail would you be?
       </p>
      </div>
     </div>
    </div>
    </div>
   </div>
  );
}

export default Story;
