import React from 'react';
import './Cardstyles.css';
import axios from 'axios';

import { Card, CardBody,CardTitle } from 'reactstrap';


class CardConf extends React.Component{

  componentDidMount(){
    axios.get("https://brasil.io/api/dataset/covid19/caso/data?is_last=True&state=RS&place_type=state")
    .then(res => {
      this.setState({results: res.data.results});     
      document.getElementById("confirmed").innerHTML = this.state.results[0].confirmed; 
    });
  }

  render(){
    return(
      <div className="CardContainer">
        <Card className="ConfCard">
          <CardBody>

            <CardTitle id="confirmed" tag="h4" className=" mb-2 mb-xl-2 ConfTitle">
              
            </CardTitle>   

            <span className="h8 mb-2 font-weight-bold mb-xl-2 " >
               Casos Confirmados
            </span>
                                      
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default CardConf;


