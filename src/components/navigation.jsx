import React from "react";
import instagram from "../assets/mainpage/instagram.png"
import pinterest from "../assets/mainpage/pinterest.png"
import asLogo from "../assets/mainpage/AS-Landscape-Logo-RGB.png"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const logoStyle = {height: '12pt'}

function Navigation() {
      return (
        <div>

    <ul className="nav" style={{'backgroundColor':'#254F5E'}}>
     <a className="nav-link ml-5 mr-0 pl-1 pr-1 pb-0 pt-0 mt-0" href="https://instagram.com/annabella.studios">
      <img alt="instagam-logo" src={instagram} style={logoStyle}/>
     </a>
     <a className="nav-link ml-0 pl-1 pr-1 pb-0 pt-0 mt-0" href="https://pinterest.co.uk/libby_annabella">
      <img alt="pinterest-logo" src={pinterest} style={logoStyle}/>
     </a>
    </ul>

        <Navbar className = "justify-content-center" expand="lg" >
          <div className="justify-content-center">
            <Navbar.Brand href="/" className="d-lg-none" style={{width: '200pt', color: '#254F5E', paddingLeft: '5.5%', paddingRight: '5.5%'}} >
              <img alt="as-logo" className="img-fluid" src={asLogo} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{border: '0px', position: 'absolute', right: '0%', top: '15px'}} />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto justify-content-center align-items-center" style={{fontFamily: '"Cormorant Garamond", serif', fontSize: '11px', letterSpacing: '1px', width: '100%'}}>
                <Nav.Link style={{width: '15%', minWidth: '150px', color: '#254F5E', 'textAlign': 'center'}} href="/story"> STORY</Nav.Link>
                <Nav.Link style={{width: '15%', minWidth: '150px', color: '#254F5E', 'textAlign': 'center'}} href="/portfolio"> PORTFOLIO</Nav.Link>
                <Navbar.Brand style={{width: '30%', color: '#254F5E'}} href="/" className="d-none d-lg-block">
                  <img alt="as-logo" className="img-fluid" src={asLogo} />
                </Navbar.Brand>
                <Nav.Link className style={{width: '15%', minWidth: '150px', color: '#254F5E', 'textAlign': 'center'}} href="/requests"> EVENT REQUESTS</Nav.Link>
                <Nav.Link style={{width: '15%', minWidth: '150px', color: '#254F5E', 'textAlign': 'center'}} href="/hello">  SAY HELLO</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>

        </div>
      );
    }
  

export default Navigation;
