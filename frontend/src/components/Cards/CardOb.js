import React from 'react';
import './Cardstyles.css';


import { Card, CardBody, CardTitle } from 'reactstrap';

class CardOb extends React.Component{

  render(){
    return(
      <div className="CardContainer">
        <Card className="ObCard">
          <CardBody>

            <CardTitle tag="h4" className=" mb-2 mb-xl-2 ObTitle">
              432
            </CardTitle>  

            <span className="h8 mb-2 font-weight-bold mb-xl-2">
               Óbitos
            </span>
                                      
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default CardOb;