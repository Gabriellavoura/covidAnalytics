import React from 'react';
import './styles.css';
import { Container, Col, Row} from 'reactstrap';

import { Collapse, Navbar, Nav,NavItem,NavLink } from 'reactstrap'
import logoFurg from '../../assets/logo3.png'
import logoC3 from '../../assets/C3.png'

export default class Footer2 extends React.Component {
  render(){
    return (
        
      <div className="container">          
          <Row >
              <Col md="12" py="5">
                  <div className="text-center py-3 ">
                                
                  <a class="mr-md-5 mr-3 fa-2x font-weight-bold" >Dashboard desenvolvida pelo time C3 Analytics,
                   grupo pertencente a frente tecnologica ItecCorona, uma iniciativa da FURG em parceria 
                   com outras instituições para ajudar no combate e prevenção do Covid-19.                          
                  </a>

                  </div>
              </Col>
          </Row>
          
          <Col  Col md="12" py="5">
            <div class="text-center py-3 font-weight-bold">© 2020 
                <a href="https://www.furg.br/" class="mr-md-5 mr-3 fa-2x LinkTitle"> ItecCorona
                </a>
                <a href="https://www.furg.br/"  class="mr-md-5 mr-3 fa-2x LinkTitle" >Portal                            
                </a>
                <a href="https://www.furg.br/"  class="mr-md-5 mr-3 fa-2x LinkTitle" >Sobre nós                            
                </a>
                <a href="https://github.com/Gabriellavoura/coronaDash"  class="mr-md-5 mr-3 fa-2x LinkTitle" >Github                            
                </a>
            </div>
          </Col>

        {/* Logos*/}
         <Col md="12" py="5">
         <div className="text-center py-3">          
          <a href="https://www.furg.br/">
            <img src={logoFurg} alt="Logo Furg"/></a>
          <a href="http://www.c3.furg.br/">
            <img src={logoC3} alt="Logo C3"/></a>  
            </div>
          </Col>
      </div>
    );
  }
}
