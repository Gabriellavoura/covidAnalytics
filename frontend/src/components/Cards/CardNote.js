import React from 'react';
import './Cardstyles.css';
import axios from 'axios';
import { Card, CardBody, CardTitle } from 'reactstrap';
function formatDate (input) {
  var datePart = input.match(/\d+/g),
  year = datePart[0], // get only two digits
  month = datePart[1], day = datePart[2];

  return day+'/'+month+'/'+year;
}

class CardNote extends React.Component{

  componentDidMount(){
    axios.get("https://brasil.io/api/dataset/covid19/caso/data?is_last=True&state=RS&place_type=state")
    .then(res => {
      this.setState({results: res.data.results});     
      document.getElementById("date").innerHTML = "Ultima atualização em: "+ formatDate(this.state.results[0].date); 
    });
  }

  render(){
    return(
      <div className="CardContainer">
        <Card className="NoteCard">
          <CardBody >  
          <CardTitle className="NoteCardTitle mb-2 mb-xl-3">
                ITeCCorona - Rio Grande do Sul
              </CardTitle> 

            <p className="NoteCardConteudo mb-2 mb-xl-3">
              Dashboard desenvolvida para visualização dos casos de covid-19 no estado do Rio Grande do Sul
            </p>    

            <span id="date" className="NoteCardAtt">
               
            </span>                              
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default CardNote;