import React from 'react';
import './styles.css';


import { Collapse, Navbar, Nav,NavItem,NavLink } from 'reactstrap'
import logoFurg from '../../assets/logo3.png'
import logoC3 from '../../assets/C3.png'

export default class Header extends React.Component {
  render(){
    return (
      <div className="navContainer">

        <Navbar light expand="md">

          <Collapse navbar>

            <Nav  className="mr-auto" navbar> 
              <a href="https://www.furg.br/">
              <img src={logoFurg} alt="Logo Furg"/></a>
              
            </Nav>

            <Nav  className="mr-auto" navbar> 

            </Nav>

          </Collapse>

          <Nav href="/" className=" mr-auto logo-title  font-weight-bold">            
            ItecCorona - Rio Grande do Sul
          </Nav>

          <Collapse navbar>

            <Nav className="mr-auto" navbar>
            </Nav>

            <Nav>
              <a href="http://www.c3.furg.br/">
              <img src={logoC3} alt="Logo C3"/></a>
            </Nav>

          </Collapse>

        </Navbar>

      </div>
    );
  }
}