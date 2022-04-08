import React from "react";

import roses from "../assets/mainpage/roses.jpg"
import instagram from "../assets/mainpage/instagram.png"
import pinterest from "../assets/mainpage/pinterest.png"

class Hello extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      "entry.2005620554": "", //name
      "entry.1045781291": "", //email
      "entry.839337160": "", //message
      isSent: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

  }


  render() {return (
    <div className="hello">
    <div className="container-fluid" style={{"fontFamily": "Cormorant Garamond", "color":"#254F5E", "position": "relative", "paddingRight":"0", "paddingLeft":"0"}}>
     <img loading="lazy" src={roses} alt = "peach roses background" style={{"width":"100%"}}/>
     <div className="text-block custom-overlay" style={{"fontFamily": "Cormorant Garamond", "color":"white", "textAlign":"center"}}>
      <p style={{"fontFamily": "Cormorant Garamond", "fontWeight": "300", "fontSize": "14px", "letterSpacing": "2px", "textTransform":"uppercase"}}>
       STAY UP TO DATE
       <br/>
      </p>
      <p style={{"fontFamily": "Josefin Sans", "fontWeight": "300", "fontSize": "14px", "letterSpacing": "2px", "textTransform":"uppercase"}}>
       FOLLOW OUR FLORAL ADVENTURES
       <br/>
      </p>
      <ul style={{"padding":"0"}}>
       <a className="mr-0 pl-1 pr-1 pb-0 pt-0 mt-0" href="https://instagram.com/annabella.studios">
        <img src={instagram} alt = "instagram icon" style={{"height": "12pt"}}/>
       </a>
       <a className="ml-0 pl-1 pr-1 pb-0 pt-0 mt-0" href="https://pinterest.co.uk/libby_annabella">
        <img src={pinterest} alt = "pinterest icon" style={{"height": "12pt"}}/>
       </a>
      </ul>
      <p style={{"fontFamily": "Josefin Sans", "fontWeight": "300", "fontSize": "14px", "letterSpacing": "1px", "textTransform":"uppercase"}}>
       <br/>
       OUR CURRENT LOCATION
      </p>
      <p style={{"fontFamily": "Cormorant Garamond, cursive", "fontWeight": "300", "fontSize": "14px", "letterSpacing": "2px"}}>
       Queensland, AUSTRALIA
       <br/>
       <br/>
       but don't worry, we travel... JUST ASK
       <br/>
       hello@annabellastudios.com
      </p>
     </div>
    </div>
    <div className="jumbotron jumbotron-fluid pb-0" style={{"backgroundColor":"#f2eae7"}}>
     <div className="container text-center">
      <p className="tab-heading">
       SAY HELLO
      </p>
      <p style={{"fontFamily": "Libre Baskerville", "color":"#254F5E", "fontSize": "14px"}}>
       I'd love to hear from you
      </p>
     </div>
     <div className="container">
      <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfsSkvZ3rQgnWa-h0O0_B-MpBmSkK375p5r5pk_7VubeSYlog/formResponse?embedded=true" className="form" onSubmit={this.handleSubmit} style={{"fontFamily": "Josefin Sans", "color":"#254F5E"}}>
       <div className="form-group row justify-content-center">
        <div className="col-lg-4 col-sm-12 d-flex justify-content-center">
         <input name="entry.2005620554" placeholder="NAME" onChange={this.handleInputChange} value={this.state["entry.2005620554"]} style={{"backgroundColor": "#f2eae7", "width": "100%"}} type="text"/>
        </div>
        <div className="col-lg-4 col-sm-12 d-flex justify-content-center">
         <input name="entry.1045781291" placeholder="EMAIL" onChange={this.handleInputChange} value={this.state["entry.1045781291"]} required style={{"backgroundColor": "#f2eae7","width": "100%"}} type="email"/>
        </div>
       </div>
       <div className="form-group row justify-content-center">
        <div className="col-lg-8 col-sm-12 d-flex justify-content-center">
         <textarea className="form-control" name="entry.839337160" placeholder="MESSAGE" onChange={this.handleInputChange} value={this.state["entry.839337160"]} required rows="4" style={{"backgroundColor": "#f2eae7", "width": "100%"}}/>
        </div>
       </div>
       <div className="form-group row justify-content-center">
        <input style={{"backgroundColor": "#f2eae7", "border":"2px", "color": "#254F5E" }} disabled={this.state.isSent} type="SUBMIT" value={this.state.isSent ? "Sent Succesfully": "Send"} readOnly />
       </div>
      </form>
     </div>
    </div>
   </div>
  );
}

handleInputChange(event) {
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;

  this.setState({
    [name]: value
  });
}

handleSubmit(form) {
  try {
    var formAction = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfsSkvZ3rQgnWa-h0O0_B-MpBmSkK375p5r5pk_7VubeSYlog/formResponse?embedded=true/formResponse"


    var data = new URLSearchParams(this.state).toString()

    var xhr = new XMLHttpRequest();

    xhr.open('POST', formAction , true);
    xhr.setRequestHeader('Accept',
        'application/xml, text/xml, */*; q=0.01');
        xhr.setRequestHeader('Content-type',
        'application/x-www-form-urlencoded; charset=UTF-8');
    xhr.send(data);
    this.setState({isSent: true});
    form.preventDefault();
  } catch(e) {}
  return false;
}

}

export default Hello;
