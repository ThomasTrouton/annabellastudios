import React from "react";

import yellow from "../assets/mainpage/yellow.jpg"
import table from "../assets/mainpage/table.webp"
import roses from "../assets/mainpage/roses.jpg"
import whiteArrowLeft from "../assets/mainpage/white-arrow-left.png"
import whiteArrowRight from "../assets/mainpage/white-arrow-right.png"
import mainpg1 from "../assets/mainpage/41360F1A-F236-4CF9-BE9C-1A88936B0DB5.jpeg"
import mainpg2 from "../assets/mainpage/5560F391-E416-4009-A975-07B97204A31B_1_201_a.jpeg"
import mainpg3 from "../assets/mainpage/E0BABC43-189C-4FA3-8350-9A2B49044E0C.jpeg"
import mainpg4 from "../assets/mainpage/786C7902-844E-4B55-BD88-1EC0219C1162_1_201_a.jpeg"
import tables from "../assets/mainpage/tables.jpg"

import Carousel from 'react-bootstrap/Carousel'
import { Link } from "react-router-dom";

const arrowStyle = {"width": "15pt"}

function Home() {
  return (
    <div className="home">
        
        <Carousel
            prevIcon = {<img src={whiteArrowLeft} alt="left" style = {arrowStyle} />}
            nextIcon = {<img src={whiteArrowRight} alt="right" style = {arrowStyle} /> }
            nextLabel = {null}
            prevLabel = {null}
            indicators = {false}
            >
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={yellow}
            alt="First slide"
        />
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={table}
            alt="Second slide"
        />
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={roses}
            alt="Third slide"
        />
        </Carousel.Item>
        </Carousel>

    <div className="jumbotron jumbotron-fluid" style={{"marginBottom":0, "backgroundColor":"#f2eae7"}}>
     <div className="container text-center" style={{"fontFamily": "Cormorant Garamond", "color":"#254F5E"}}>
      <p className="tab-heading">
       FLORAL DESIGN STUDIO
      </p>
      <p style={{"fontFamily": "Libre Baskerville",  "color":"#254F5E", "fontSize": "14px"}}>
        Annabella Studios is a unique floral design studio based in Queensland, Australia.<br/>
        Creating abundant, seasonal, colourful and rambling florals for weddings & events across Queensland…<br/>
        Australia and beyond. We are now taking bookings for 2022 & 2023.
      </p>
     </div>
    </div>
    <div className="container-fluid">
     <div className="row mb-4 px-lg-5 justify-content-around">
      <div className="col-4 px-0 px-lg-3">
        <Link to="/portfolio/baby-shower">
       <img className="img-fluid" loading="lazy" sizes="33vw" src={mainpg1} alt="pink flowers"  style={{"cursor": "pointer", "marginRight": "2pt"}}/>
       </Link>
      </div>
      <div className="col-4 px-0 px-lg-3">
      <Link to="/portfolio">
       <img className="img-fluid" loading="lazy" sizes="33vw" src={mainpg2} alt="pink flowers on table" style={{"cursor": "pointer", "marginLeft": "1pt", "marginRight": "1pt"}}/>
       </Link>
      </div>
      <div className="col-4 px-0 px-lg-3">
        <Link to="/portfolio/summer-long-lunch">
       <img className="img-fluid" loading="lazy" sizes="33vw" src={mainpg3}  alt="yellow flowers" style={{"cursor": "pointer", "marginLeft": "2pt"}}/>
       </Link>
      </div>
     </div>
     <div className="row">
      <div className="col text-center">
      <a href="/portfolio" >

       <button className="btn btn-default para-1" style={{"borderRadius": "0px", "borderColor":"#254F5E", "background": "none"}}>
        View Portfolio
       </button>
       </a>
      </div>
     </div>
    </div>
    <div className="container mt-5" style={{"fontFamily": "Cormorant Garamond", "color":"#254F5E"}}>
     <div className="row mt-0 mb-5 justify-content-around">
      <div className="col-lg-6 col-sm-12">
       <img className="img-fluid w-80" loading="lazy" src={mainpg4} alt ="flowers and door" />
      </div>
      <div className="col-lg-6 col-sm-12">

        <div className="container" style= {{"height":"100%", "backgroundColor":"#94a395", "paddingLeft": "20px", "paddingRight": "20px", "fontFamily": 'Cormorant Garamond', "color":"#f2eae7", "textAlign":"center"}}>
          <div className="row align-items-center justify-content-center" style={{"height": "100%"}}>
          <div className="row pt-5 mb-5 justify-content-around" style={{"fontFamily": "Cormorant Garamond", "fontWeight": "300", "fontSize": "32px", "letterSpacing": "2px"}} >MEET LIBBY</div>
          <div className="row mt-0 mb-5 justify-content-around" style={{"fontFamily": "Cormorant Garamond", "fontWeight": "300", "fontSize": "14px", "letterSpacing": "2px", "paddingLeft": "20%", "paddingRight": "20%"}}> Hello, my name is Libby Annabella. I am the creator & designer behind Annabella Studios… I look forward to sitting and sipping a coffee or cocktail with you while we work out how to bring your floral fancies to life.</div>
          <div className="row mt-0 mb-5 justify-content-around">
          <a href="/story" >
            <button className="btn btn-default para-1" style={{"borderRadius": "0px", "color":"#f2eae7", "borderColor":"#f2eae7", "background": "none"}}>
             Read More
            </button>
            </a>
           </div>
        </div>   
      </div>  
      </div>
     </div>
    </div>
    <div className="container-fluid mt-5" style={{"fontFamily": "Cormorant Garamond", "color":"#254F5E", "position": "relative", "padding":"0", "margin":"0"}}>
     <img className="w-100" loading="lazy" src={tables} alt="tables of flowers" />
    </div>
   </div>
  );
}

export default Home;
