import React from 'react';

import { Card,
         CardBody,
         CardTitle,
         CardText } from 'reactstrap';

import './styles.css';
import axios from 'axios';

class CardInfo extends React.Component{
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
      <div className="infoContainer">
        <Card body inverse style={{backgroundColor: '#E74C3C'}}>
          <CardBody>
            <CardTitle>
              Casos Confirmados
            </CardTitle>
            <CardText>
              Dados aqui
            </CardText>
            
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default CardInfo;