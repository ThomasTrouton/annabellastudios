
import React from "react";
import Form from "react-bootstrap/Form";


const entryStyle = {"backgroundColor": "#f2eae7", "width": "100%", "fontFamily": "Josefin Sans"}
const todayDate = new Date().toISOString().split('T')[0]

class Requests extends React.Component{

  constructor(props) {
    super(props);
    
    this.state = {      
      "entry.101390416": "",  //NAME
      "entry.233152642": "", //EMAIL
      "entry.1284976770": "", //PHONE NUMBER
      "entry.841183273": todayDate, //EVENT DATE
      "entry.138366603": "", //PHOTOGRAPHER / PLANNER / STYLIST DETAILS
      "entry.440717690":"", //FLORAL BUDGET
      "entry.186585142" :"", //IF YOU WERE A COCKTAIL
      "entry.1014733185":"", //HOW DID YOU HEAR ABOUT US
      isSent: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

  }


  render() {return (
    <div className="requests">
       <div className="jumbotron jumbotron-fluid p-0" style={{"backgroundColor":"#f2eae7"}}>
     <div className="container text-center">
      <p className="tab-heading">
       Planning an event?
      </p>
      <p style={{"fontFamily": "Libre Baskerville",  "color":"#254F5E", "fontSize": "14px"}}>
       Let's make magic
      </p>
     </div>
     <div className="container">
      <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSekeTGDn3HlDHcXdmqvXAFoEcTU0uXchGpq6GxKo9f5n86FxA/formResponse?embedded=true" className="form" onSubmit={this.handleSubmit} style={{"fontFamily": "Josefin Sans", "color":"#254F5E"}}>
       <div className="form-group row justify-content-center">
        <div className="col-lg-4 col-sm-12 d-flex justify-content-center mb-3">
         <input name="entry.101390416" placeholder="NAME" style={entryStyle} type="text" onChange={this.handleInputChange} value={this.state["entry.101390416"]}/>
        </div>
        <div className="col-lg-4 col-sm-12 d-flex justify-content-center mb-3">
         <input name="entry.233152642" placeholder="EMAIL" required style={entryStyle} onChange={this.handleInputChange} value={this.state["entry.233152642"]} type="email"/>
        </div>
        <div className="col-lg-4 col-sm-12 d-flex justify-content-center mb-3">
         <input name="entry.1284976770" placeholder="PHONE NUMBER" style={entryStyle} type="tel" onChange={this.handleInputChange} value={this.state["entry.1284976770"]} />
        </div>
       </div>
       <div className="form-group row justify-content-center">
         <p style={{"textTransform": "uppercase", "alignSelf":"center","marginBottom":"0"}}>
          Event Date: <br/>
         </p>
         <div>
         <Form.Control type="date" name="entry.841183273" onChange={this.handleInputChange} value={this.state["entry.841183273"]} style={entryStyle} min={todayDate} />
         </div>
       </div>
       <div className="row justify-content-center">
        <div className="form-group col-lg-8 col-sm-12 justify-content-center">
         <input name="entry.194650238" placeholder="EVENT LOCATION & VENUE" style={entryStyle} type="text" onChange={this.handleInputChange} value={this.state["entry.194650238"]} />
        </div>
       </div>
       <div className="row justify-content-center">
        <div className="form-group col-lg-8 col-sm-12 justify-content-center">
         <textarea className="form-control" name="entry.137004864" placeholder="EVENT DETAILS - vision... style... aesthetic... guest count..." required rows="4" style={entryStyle} onChange={this.handleInputChange} value={this.state["entry.137004864"]} ></textarea>
        </div>
       </div>
       <div className="row justify-content-center">
        <div className="form-group col-lg-8 col-sm-12 justify-content-center">
         <input name="entry.138366603" placeholder="PHOTOGRAPHER / PLANNER / STYLIST DETAILS" style={entryStyle} type="text" onChange={this.handleInputChange} value={this.state["entry.138366603"]}/>
        </div>
       </div>
       <div className="row justify-content-center">
        <div className="form-group col-lg-8 col-sm-12 justify-content-center">
         <input name="entry.440717690" placeholder="FLORAL BUDGET" style={entryStyle} type="text" onChange={this.handleInputChange} value={this.state["entry.440717690"]} />
        </div>
       </div>
       <div className="row justify-content-center">
        <div className="form-group col-lg-8 col-sm-12 justify-content-center">
         <input name="entry.186585142" placeholder="IF YOU WERE A COCKTAIL... WHAT WOULD YOU BE?... Libby would be an Elderflower Sour." style={entryStyle} type="text" onChange={this.handleInputChange} value={this.state["entry.186585142"]}/>
        </div>
       </div>
       <div className="row justify-content-center">
        <div className="form-group col-lg-8 col-sm-12 justify-content-center">
         <input name="entry.1014733185" placeholder="HOW DID YOU HEAR ABOUT US" style={entryStyle} type="text" onChange={this.handleInputChange} value={this.state["entry.1014733185"]} />
        </div>
       </div>
       <div className="form-group row justify-content-center">
        <input style={{"backgroundColor": "#f2eae7", "border":"2px", "paddingTop": "20px", "color": "#254F5E"}} type="SUBMIT" readOnly disabled={this.state.isSent} value={this.state.isSent ? "Sent Succesfully": "Send"}/>
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

  var formAction =  "https://docs.google.com/forms/u/0/d/e/1FAIpQLSekeTGDn3HlDHcXdmqvXAFoEcTU0uXchGpq6GxKo9f5n86FxA/formResponse?embedded=true/formResponse"
  var data = new URLSearchParams(this.state).toString()
  var xhr = new XMLHttpRequest();
  xhr.open('POST', formAction , true);
  xhr.setRequestHeader('Accept',
      'application/xml, text/xml, */*; q=0.01');
      xhr.setRequestHeader('Content-type',
      'application/x-www-form-urlencoded; charset=UTF-8');
      xhr.send(data);
  debugger;
  form.preventDefault();
  this.setState({isSent: true});
} catch(e) {}
return false;
}
}

export default Requests;
