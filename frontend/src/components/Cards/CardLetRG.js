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

class CardLet extends React.Component{
   
  componentDidMount(){
    axios.get("https://brasil.io/api/dataset/covid19/caso/data/?is_last=True&state=RS&place_type=city&city=Rio%20Grande")
    .then(res => {
      this.setState({results: res.data.results});    
      let num = parseFloat((100)*(this.state.results[0].death_rate.toFixed(4))) ;
      document.getElementById("death_raterg").innerHTML = num.toPrecision(3) +"%";
      document.getElementById("death_rate_atualizarg").innerHTML = "Última atualização em: "+ formatDate(this.state.results[0].date); 

    });
  }

  render(){
    return(
      <div className="CardContainer">
        <Card className="LetCard">
          <CardBody >

            <CardTitle id="death_raterg" tag="h4" className=" mb-2 mb-xl-2 LetTitle">
              
            </CardTitle> 
            
            <span className="h8 mb-2 font-weight-bold mb-xl-2">
               Letalidade em Rio Grande
            </span><br></br>
            <span id="death_rate_atualizarg" className="small font-weight-light" >               
            </span>                          
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default CardLet;