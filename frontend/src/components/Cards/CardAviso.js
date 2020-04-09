import React from 'react';
import './Cardstyles.css';
import axios from 'axios';
import { Card, CardBody, CardTitle } from 'reactstrap';
import { UncontrolledAlert } from 'reactstrap';


class CardAviso extends React.Component{

 
  render(){
    return(
      <div className="CardContainer" >
    <UncontrolledAlert color="light" className="AvisoCard">
      Os dados utilizados nesta plataforma são fornecidos pelos boletins epidemiológicos
      divulgados pelos Ministérios da Saúde Estaduais, disponíveis no site <a href="#" className="alert-link">Brasil.io</a>. Esses dados são atualizados
       diariamente quando os boletins são divulgados às  (horário aqui).
    </UncontrolledAlert>
      </div>
    );
  }
}

export default CardAviso;