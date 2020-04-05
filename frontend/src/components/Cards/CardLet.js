import React from 'react';
import './Cardstyles.css';

import { Card, CardBody, CardTitle } from 'reactstrap';

class CardLet extends React.Component{
   
  render(){
    return(
      <div className="CardContainer">
        <Card className="LetCard">
          <CardBody >

            <CardTitle tag="h4" className=" mb-2 mb-xl-2 LetTitle">
              4,2%
            </CardTitle> 

            <span className="h8 mb-2 font-weight-bold mb-xl-2">
               Letalidade
            </span>
                                      
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default CardLet;