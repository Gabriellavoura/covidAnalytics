import React from 'react';

import { Card,
         CardBody,
         CardTitle,
         CardText } from 'reactstrap';

import './styles.css';
import axios from 'axios';

class CardConf extends React.Component{
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
        <Card className="ConfCard">
          <CardBody >          
            <CardTitle tag="h4"
              className=" mb-2 mb-xl-2 ConfTitle">
              285,754
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