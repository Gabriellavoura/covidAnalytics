import React from 'react';

import { Card,
         CardBody,
         CardTitle,
         CardText } from 'reactstrap';

import './Cardstyles.css';
import axios from 'axios';

class CardOb extends React.Component{
state = {
  results: []
};
  componentDidMount(){
    axios.get("https://brasil.io/api/dataset/covid19/caso/data?is_last=True&state=RS")
    .then(res => {
      this.setState({results: res.data.results});
      console.log(this.state.results[1])
    });

  }


    
  render(){

    return(
      <div className="CardContainer">
        <Card className="ObCard">
          <CardBody >          
            <CardTitle tag="h4"
              className=" mb-2 mb-xl-2 ObTitle">
              432
            </CardTitle>           
            <span className="h8 mb-2 font-weight-bold mb-xl-2 " >
               Óbitos
             </span>
                                      
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default CardOb;