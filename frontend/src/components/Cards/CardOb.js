import React from 'react';
import './Cardstyles.css';
import axios from 'axios';

import { Card, CardBody, CardTitle } from 'reactstrap';
function formatDate (input) {
  var datePart = input.match(/\d+/g),
  year = datePart[0], // get only two digits
  month = datePart[1], day = datePart[2];

  return day+'/'+month+'/'+year;
}

class CardOb extends React.Component{
  

  componentDidMount(){
    axios.get("https://brasil.io/api/dataset/covid19/caso/data?is_last=True&state=RS&place_type=state")
    .then(res => {
      this.setState({results: res.data.results});     
      document.getElementById("deaths").innerHTML = this.state.results[0].deaths;
      document.getElementById("deaths_atualiza").innerHTML = "Última atualização em: "+ formatDate(this.state.results[0].date); 
 
    });
  }

  render(){
    return(
      <div className="CardContainer">
        <Card className="ObCard">
          <CardBody>

            <CardTitle id="deaths" tag="h4" className=" mb-2 mb-xl-2 ObTitle">
              
            </CardTitle>  

            <span className="h8 mb-2 font-weight-bold mb-xl-2">
               Óbitos no RS
            </span><br></br>
            <span id="deaths_atualiza" className="small font-weight-light" >               
            </span>
                                      
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default CardOb;