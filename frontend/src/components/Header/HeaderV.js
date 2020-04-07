import React, {useState} from 'react';
import {Collapse, Navbar, Nav,NavItem,NavLink,DropdownToggle, NavbarBrand,NavbarToggler } from 'reactstrap'
import logoFurg from '../../assets/logo3.png'
import logoC3 from '../../assets/C3.png'
import './styles.css';

const HeaderV = (props)=>{
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div className="ContainerNav">

        <Navbar light expand="md" className="HeaderContainer">

          <Collapse navbar>

            <Nav  className="mr-auto" navbar> 
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

            <Nav  className="mr-auto" navbar> 

            </Nav>

          </Collapse>
            
          <NavbarBrand href="/" className=" mr-auto logo-title">            
            ITeCCorona
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen}  navbar>          
            <Nav className="mr-auto" navbar>
            </Nav>
            <DropdownToggle nav >
            <Nav>
                <NavItem>
                    <NavLink className="LinkTitle" href="#">
                        <p>Sobre</p>
                    </NavLink>
                </NavItem>
                
                <NavItem>
                  <NavLink className="LinkTitle"  href="#">
                    <p>Quem Somos</p>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="LinkTitle"  href="#">
                    <p>Github</p>
                  </NavLink>
                </NavItem>
            </Nav>
            </DropdownToggle>
          </Collapse>

        </Navbar>

      </div>
    );
}
export default HeaderV;