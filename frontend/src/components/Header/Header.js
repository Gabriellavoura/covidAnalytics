import React, {useState} from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap'

import logoFurg from '../../assets/logo.png'
import logoC3 from '../../assets/C3.png'

import './styles.css';
// import logo from '../../assets/logo.png';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
    return (
      <div className="navContainer">
        <Navbar light expand="md">
          <NavbarBrand href="/" className="logo-title">
            <img src={logoFurg} alt="Logo Furg"/>
            <img src={logoC3} alt="Logo C3"/>
            Portal - iTeCorona</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              {/* <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink href="https://github.com/Gabriellavoura">GitHub</NavLink>
              </NavItem>
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Opções
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
            <NavbarText>Ultima Atualização: 04/03/20 - 00:00 </NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
}
export default Header;