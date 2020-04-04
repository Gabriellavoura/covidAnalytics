import React from 'react';

import { Card,
         CardBody,
         CardTitle,
         CardText } from 'reactstrap';

import './styles.css';

class CardInfo extends React.Component{
    
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