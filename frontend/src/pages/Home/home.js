import React from 'react';

import './styles.css';
import '../../database/db';

// Import dependencies
import { Container, Col, Row} from '../../../node_modules/reactstrap/lib';

// Import Components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Maps from '../../components/Maps/Maps';
import CardConf from '../../components/Cards/CardConf';
import CardOb from '../../components/Cards/CardOb';
import CardLet from '../../components/Cards/CardLet';
import CardNote from '../../components/Cards/CardNote';
import CardAviso from '../../components/Cards/CardAviso';
import GraphicCovid from '../../components/GraphicCovid/GraphicCovid';
import GraphicCovidBr from '../../components/GraphicCovid/GraphicCovidBr';
import TableCovid from '../../components/TableCovid/TableCovid';
import TableCovidRS from '../../components/TableCovid/TableCovidRS';

export default function Home() {
  return(
    <div className="teste">
    <Header/>
    <div className="container-principal">
    <Container fluid={true} >

      <Row noGutters={false}>

        <Col xs="12" sm="12" md="12" xl={{ size: 8, offset: 2 }}>
          {/* Card de Aviso */}
          <CardAviso/>
           {/* Card de Informações */}
          <CardNote/>          

        </Col>

        {/* Cards  */}      
        <Col xs="12" sm="12" md="12" xl="12" >
          <Row >
            {/* Card Casos Confirmados */}
            <Col xs="12" sm="12" md="4">
                  <CardConf/>
            </Col>

            {/* Card Obitos */}
            <Col xs="12" sm="12" md="4">
                <CardOb/>
            </Col>

            {/* Card Letalidade */}
            <Col xs="12" sm="12" md="4">
                <CardLet/>
            </Col>
          </Row>
        </Col>

        {/* Coluna do mapa Mapa */}
        <Col xs="12" sm="12" md="12" xl="6" >
          <Maps/>
        </Col>

        {/* Coluna dos Graficos */}
        <Col xs="12" sm="12" md="12" xl="6" >

          {/* Grafico 1 */}
          <Row>
            <Col xs="12" sm="12" md="12">
                <GraphicCovid/>
            </Col>
          </Row>

          {/* Grafico 2 */}
          <Row>
            <Col xs="12" sm="12" md="12">                  
                <GraphicCovidBr/>
            </Col>
          </Row>

        </Col>

        {/* Coluna da Tabela 1 */}
        <Col xs="12" sm="12" md="12" xl="6" >          
        <TableCovid/>
        </Col>

        {/* Coluna da Tabela 2 */}
        <Col xs="12" sm="12" md="12" xl="6" >          
          <TableCovidRS/>
        </Col>  

      </Row>
    </Container>
    </div>
    {/* Rodapé */}
    <Footer/>
  </div>
  );
}