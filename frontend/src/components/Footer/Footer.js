import React from 'react';
import './styles.css';
import { Col, Row} from 'reactstrap';
import { Link } from 'react-router-dom' ;
import logoFurgf from '../../assets/logo3.png';
import logoC3f from '../../assets/C3.png';

export default class Footer extends React.Component {
  render(){
    return (
        
      <div className="container">          
          <Row >
              <Col md="12" py="5">
                  <div className="text-center py-3 ">
                                
                  <p class="mr-md-5 mr-3 fa-2x font-weight-bold" >Dashboard desenvolvida pelo time C3 Analytics,
                   grupo pertencente a frente tecnologica ItecCorona, uma iniciativa da FURG em parceria 
                   com outras instituições para ajudar no combate e prevenção do Covid-19.                          
                  </p>

                  </div>
              </Col>
          </Row>
          
          <Col  Col md="12" py="5">
            <div class="text-center py-3 font-weight-bold">© 2020 
                <a href="https://www.furg.br/" class="mr-md-5 mr-3 fa-2x LinkTitle"> ITeCCorona
                </a>
                <a href="https://www.furg.br/"  class="mr-md-5 mr-3 fa-2x LinkTitle" >Portal                            
                </a>
                <Link to="/about"  class="mr-md-5 mr-3 fa-2x LinkTitle" >Sobre nós                            
                </Link>
                <a href="https://github.com/Gabriellavoura/coronaDash"  class="mr-md-5 mr-3 fa-2x LinkTitle" >Github                            
                </a>
            </div>
          </Col>

        {/* Logos*/}
         {/* <Col md="12" py="5">
         <div className="text-center py-3">          
          <a class = "furgh" href="https://www.furg.br/">
            <img src={logoFurgf} alt="Logo Furg"/></a>
          <a class = "c3h" href="http://www.c3.furg.br/">
            <img src={logoC3f} alt="Logo C3"/></a>  
            </div>
          </Col> */}
      </div>
    );
  }
}
