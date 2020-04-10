import React, {useState} from 'react';
import {Collapse, Navbar, Nav,NavItem,NavLink,DropdownToggle, NavbarBrand,NavbarToggler } from 'reactstrap'
import logoFurg from '../../assets/logo3.png'
import logoC3 from '../../assets/C3.png'
import { Link } from 'react-router-dom' ;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVirus } from "@fortawesome/free-solid-svg-icons";
import './styles.css';

const Header = (props)=>{
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div className="ContainerNav">
        <Navbar light expand="md" className="md-5 portalImg">
          <Collapse navbar>
            <Nav navbar> 
            <NavItem>
                <NavLink href="https://www.furg.br/">
                  <img class="furg" src={logoFurg} alt="Logo Furg"/>
                </NavLink>              
              </NavItem>
            <NavItem>
              <NavLink href="http://www.c3.furg.br/">
                <img class="c3" src={logoC3} alt="Logo C3"/>
              </NavLink>   
            </NavItem>  
            </Nav>
          </Collapse>
            
          <NavbarBrand className=" mx-auto logo-title">
            <Link to="/" className="Headerlinks"><FontAwesomeIcon  icon={faVirus} />             
            ITeCCorona  
            </Link> 
          </NavbarBrand>

          <NavbarToggler onClick={toggle} className="mr-2"/>
            <Collapse isOpen={isOpen} navbar>    

              <Nav className="navPortal ml-auto"> 
                <NavItem className="portal">
                    <NavLink className="LinkTitle" href="http://www.riogrande.rs.gov.br/corona/">
                        Portal
                    </NavLink>
                </NavItem>
                
                <NavItem className="portal">
                  <NavLink className="LinkTitle" >
                    <Link to="/about" className="LinkTitle " >
                      Sobre nós                            
                    </Link>
                  </NavLink>
                </NavItem>

                <NavItem className="portal">
                  <NavLink className="LinkTitle"  href="https://github.com/Gabriellavoura/coronaDash">
                    Github
                  </NavLink>
                </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

      </div>
    );
}
export default Header;