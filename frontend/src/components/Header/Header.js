import React, {useState} from 'react';
import './styles.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Row, Col
} from 'reactstrap';

import logoFurg from '../../assets/logo3.png';
import logoC3 from '../../assets/C3.png';

const Header = (props)=>{
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (

    <Row>
          <div>
      <Col className="coluna-header" >





      <Navbar color="light" light expand="md">
        <Nav className="HeaderContainer mr-auto" navbar>
          <Nav>

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

            <NavItem>
              <NavLink href="http://www.c3.furg.br/">
                <p class="logo-title"> ITeCCorona</p>
              </NavLink>
            </NavItem>

          </Nav>
        </Nav>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav>
            <DropdownToggle nav >
              <Nav>

                <NavItem>
                  <NavLink href="#">
                    <p>Sobre</p>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="#">
                    <p>Quem Somos</p>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="#">
                    <p>Github</p>
                  </NavLink>
                </NavItem>

              </Nav>
            </DropdownToggle>
          </Nav>
        </Collapse>
      </Navbar>

    </Col>
    </div>
    </Row>
    );
}
export default Header;