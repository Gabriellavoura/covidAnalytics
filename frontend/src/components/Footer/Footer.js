import React, {useState} from 'react';
import { NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
    NavbarText,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand
    } from "reactstrap";

const Footer = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
    return (
      <div className="navContainer">
        
        <Navbar light expand="md">          
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink >        © 2020{" "}
                    <a
                    className="font-weight-bold ml-1 text-warning"
                    href="https://www.furg.br/"          
                    >
                    iTeCorona
                    </a>
                </NavLink>                
              </NavItem>              
            </Nav>
            <Nav >
                <NavItem>
                    <NavLink className="text-warning font-weight-bold" href="https://www.furg.br/">
                    Sobre nós
                    </NavLink>  
                </NavItem>
            </Nav>    
            <Nav >
                <NavItem>        
                    <NavLink className="text-warning font-weight-bold" href="https://www.furg.br/">
                        Portal
                    </NavLink>
                </NavItem>                  
            </Nav>
            <Nav navbar>
                <NavItem>
                    <NavLink > Powered by: {" "}
                        <a
                        className="font-weight-bold ml-1 text-warning"
                        href="http://www.c3.furg.br/"          
                        >
                        Centro de Ciências Computacionais
                        </a>
                    </NavLink>   
                </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
}
export default Footer;



     
/* <Footer >
<Container>
  <Row >
    <Col xl="6">
      <div className="copyright text-center text-xl-left text-muted">
        © 2018{" "}
        <a
          className="font-weight-bold ml-1"
          href="https://www.furg.br/"
          
        >
          iTeCorona
        </a>
      </div>
    </Col>
    <Col xl="6">
      <Nav className="nav-footer justify-content-center justify-content-xl-end">
        <NavItem>
          <NavLink
            href="https://www.furg.br/"                      
          >
            iTeCorona
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="https://www.furg.br/"                      
          >
            Sobre nós
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="https://www.furg.br/"                     
          >
            Portal
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="https://github.com/Gabriellavoura"                      
          >
            GitHub
          </NavLink>
        </NavItem>
      </Nav>
    </Col>
  </Row>
</Container>
</Footer>
</div>*/