import React from 'react';
import { Container, Col, Row} from 'reactstrap';

// Import Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Maps from './components/Maps/Maps';
import CardConf from './components/Card/CardConf';
import CardOb from './components/Card/CardOb';
import CardLet from './components/Card/CardLet';
import CardNote from './components/Card/CardNote';
import GraphicCovid from './components/GraphicCovid/GraphicCovid';
import GraphicCovidBr from './components/GraphicCovid/GraphicCovidBr';
import TableCovid from './components/TableCovid/TableCovid';
import TableCovidRS from './components/TableCovid/TableCovidRS';
import ReadApi from './services/ReadApi';


import './App.css';

function App() {
  return (
    <div className="teste">
      <Header/>

      <Container fluid={true} className="container-principal">
      
      <Row noGutters={false}>

      {/* <Col xs="12" sm="12" md="12" className="HeaderBar">

      </Col> */}
       <Col xs="12" sm="12" md="12" xl={{ size: 8, offset: 2 }}>
          {/* Informações aqui */}
          <CardNote/>
        </Col>

        {/* Cards  */}      
        <Col xs="12" sm="12" md="12" xl="12" >
          <Row >
            {/* Card 1 */}
            <Col xs="12" sm="12" md="4">
                  <CardConf/>
            </Col>

            {/* Card 2 */}
            <Col xs="12" sm="12" md="4">
                <CardOb/>
            </Col>

            {/* Card 3 */}
            <Col xs="12" sm="12" md="4">
                <CardLet/>
            </Col>

          </Row>
        </Col>
        
        <Col xs="12" sm="12" md="12" xl="6" >
          {/* Mapa aqui */}
          <Maps/>
        </Col>

        {/* Coluna dos Cards */}
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

          {/* Tabela 1 */}
          <Col xs="12" sm="12" md="12" xl="6" >          
          <TableCovid/>
          </Col>

        {/* Tabela 2 */}
        <Col xs="12" sm="12" md="12" xl="6" >          
          <TableCovidRS/>
        </Col>                    
        </Row>

      </Container>
      <Footer/>
    </div>

  );
}

export default App;
