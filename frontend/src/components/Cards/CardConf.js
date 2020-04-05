import React from 'react';
import './Cardstyles.css';


import { Card, CardBody,CardTitle } from 'reactstrap';


class CardConf extends React.Component{

  render(){
    return(
      <div className="CardContainer">
        <Card className="ConfCard">
          <CardBody>

            <CardTitle tag="h4" className=" mb-2 mb-xl-2 ConfTitle">
              10.278
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