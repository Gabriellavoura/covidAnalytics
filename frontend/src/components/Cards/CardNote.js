import React from 'react';
import './Cardstyles.css';

import { Card, CardBody, CardTitle } from 'reactstrap';

class CardNote extends React.Component{

  render(){
    return(
      <div className="CardContainer" >
        <Card className="NoteCard" >
          <CardBody >  

            <CardTitle tag="h6"className=" mb-2 mb-xl-4">
              Dashboard desenvolvida para visualização dos casos de covid-19 no estado do Rio Grande do Sul
            </CardTitle>    

            <span className="font-weight-bold">
               Ultima atualização em: 04/04/2020 às 22:10
            </span>
                                      
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default CardNote;