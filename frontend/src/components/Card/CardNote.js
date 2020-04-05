import React from 'react';

import { Card,
         CardBody,
         CardTitle,
         CardText } from 'reactstrap';

import './Cardstyles.css';
import axios from 'axios';

class CardNote extends React.Component{
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
      <div className="CardContainer" >
        <Card className="NoteCard" >
          <CardBody >          
            <CardTitle tag="h6"
              className=" mb-2 mb-xl-4 ">
              Dashboard desenvolvida para visualização dos casos de covid-19 no estado do Rio Grande do sul
            </CardTitle>           
            <span className="font-weight-bold" >
               Ultima atualização em: 04/04/2020 às 22:10
             </span>
                                      
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default CardNote;