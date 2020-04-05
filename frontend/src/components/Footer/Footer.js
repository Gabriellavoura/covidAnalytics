import React from 'react';
import './styles.css';


import { NavItem, NavLink, Nav, Navbar } from "reactstrap";

const Footer = (props) => {

  return (

    <div className="navContainer FooterContainer"> 
      <Navbar light expand="md">          
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink >
                © 2020{" "}
                <a className="font-weight-bold ml-1 LinkTitle" href="https://www.furg.br/">
                  iTeCorona
                </a>
            </NavLink>                
          </NavItem>              
        </Nav>
        <Nav >
            <NavItem>
                <NavLink className="LinkTitle font-weight-bold" href="https://www.furg.br/">
                Sobre nós
                </NavLink>  
            </NavItem>
        </Nav>    
        <Nav >
          <NavItem>        
            <NavLink className="LinkTitle font-weight-bold" href="https://www.furg.br/">
              Portal
            </NavLink>
          </NavItem>                  
        </Nav>
        <Nav navbar>
          <NavItem>
            <NavLink > Powered by: {" "} 
              <a className="font-weight-bold ml-1 LinkTitle" href="http://www.c3.furg.br/">
                Centro de Ciências Computacionais 
              </a>
              <a> e</a>
              <a className="font-weight-bold ml-1 LinkTitle"href="https://www.furg.br/">
                Furg
              </a>
            </NavLink>   
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}
export default Footer;