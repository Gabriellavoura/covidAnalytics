import React from 'react';
import { Container, Col, Row} from 'reactstrap';

// Import Components
import Header from './components/Header/Header';
import Maps from './components/Maps/Maps';
import CardInfo from './components/Card/CardInfo';
import GraphicCovid from './components/GraphicCovid/GraphicCovid';
import TableCovid from './components/TableCovid/TableCovid';
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

        <Col xs="12" sm="12" md="12" xl="6" >
          {/* Mapa aqui */}
          <Maps/>
        </Col>

        {/* Coluna dos Cards */}
        <Col xs="12" sm="12" md="12" xl="6" >
          <Row >

              {/* Card 1 */}
              <Col xs="12" sm="12" md="4">
                    <CardInfo/>
              </Col>

              {/* Card 2 */}
              <Col xs="12" sm="12" md="4">
                  <CardInfo/>
              </Col>

              {/* Card 3 */}
              <Col xs="12" sm="12" md="4">
                  <CardInfo/>
              </Col>

            </Row>

            {/* Grafico 1 */}
            <Row>
              <Col xs="12" sm="12" md="12">
                  <GraphicCovid/>
              </Col>
            </Row>

            {/* Tabela 2 */}
            <Row>
              <Col xs="12" sm="12" md="12">
                  <TableCovid/>
                  {/* <ReadApi/> */}
              </Col>
            </Row>

          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default App;
