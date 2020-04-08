import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {Container,Row,Col,Card,CardBody, CardTitle,CardFooter,Button, CardImg } from 'reactstrap';
import eduardo from '../../assets/eduardo.png'
import vanessa from '../../assets/vanessa.png'
import gabriel from '../../assets/gabriel.jpeg'
import lucas from '../../assets/lucas.jpg'
import willian from '../../assets/willian.jpg'
import augusto from '../../assets/augusto.jpg'

export default function About(){

  return(

    <div className="teste conteudoCardAbout">
      <Header/>
      <div className="container-principal">
        <Container fluid={true} >
          <Row noGutters={false}>
            <Col xs="12" sm="12" md="12" xl="12">
            <Card>
              <CardBody>
                <CardTitle>
                  <h1 className="display-6">Quem somos</h1>              
                  <hr className="my-2 mb-5" />
                </CardTitle>    
                <p className="my-2 mb-5">Dori me Interimo, adapare Dori me Ameno Ameno Latire
                  Latiremo Dori me Ameno Omenare imperavi ameno Dimere, dimere matiro Matiremo
                  Ameno Omenare imperavi emulari, ameno Omenare imperavi emulari, ameno</p>
                <h1 className="display-6 mb-2  ">Equipe</h1>              
                  <hr className="my-2 mb-5" />      
              </CardBody>
           
           {/* Começo das fotos */}

          {/* <div className="conteudoCardAbout text-center">
            <Container className="cardConteudoAbout" >            
              <Row >
                <Col md="3" sm="3" xl="3"xs="6" py="5" >                 
                    <div className="text-center py-3">
                      <CardImg top className="rounded-circle " src={eduardo} alt="Foto eduardo">                    
                      
                      </CardImg>                      
                    </div>
                    <CardBody>                    
                      <div className="author">
                        <CardTitle tag="h4">Eduardo Borges</CardTitle>                        
                      </div>                   
                      <p className="card-description text-center">
                       Dr. em Computação pela UFRGS
                      </p>
                      <Button className="Headerlinks"                
                        color="link"
                        href="http://lattes.cnpq.br/5851601274050374"                   
                      >
                        1
                    </Button> 
                    <Button className="Headerlinks"                
                        color="link"
                        href="http://www.eduardo.c3.furg.br/"                   
                      >
                        2
                    </Button> 
                     
                    </CardBody>                             
                </Col>
                <Col md="3" sm="3" xs="6" py="5"  >                 
                    <div className="text-center py-3">
                      <CardImg top className="rounded-circle height: auto;" src={gabriel} alt="Foto gabriel">                    
                      
                      </CardImg>                      
                    </div>
                    <CardBody>                    
                      <div className="author">
                        <CardTitle tag="h4">Gabriel Lavoura</CardTitle>                        
                      </div>                   
                      <p className="card-description text-center">
                       Mestrando em Engenharia da Computação
                      </p>
                      <Button className="Headerlinks"                
                        color="link"
                        href="http://lattes.cnpq.br/5851601274050374"                   
                      >
                        1
                    </Button> 
                    <Button className="Headerlinks"                
                        color="link"
                        href="http://www.eduardo.c3.furg.br/"                   
                      >
                        2
                    </Button>                      
                    </CardBody>  
                                               
                </Col>
                <Col md="3" sm="3" xs="6" py="5"  >                 
                    <div className="text-center py-3">
                      <CardImg top className="rounded-circle" src={vanessa} alt="Foto vanessa">                    
                      
                      </CardImg>                      
                    </div>
                    <CardBody>                    
                      <div className="author">
                        <CardTitle tag="h4">Vanessa Telles</CardTitle>                        
                      </div>                   
                      <p className="card-description text-center">
                       Mestranda em Engenharia da Computação
                      </p>
                      <Button className="Headerlinks"                
                        color="link"
                        href="http://lattes.cnpq.br/5851601274050374"                   
                      >
                        1
                    </Button> 
                    <Button className="Headerlinks"                
                        color="link"
                        href="http://www.eduardo.c3.furg.br/"                   
                      >
                        2
                    </Button>                      
                    </CardBody>  
                                               
                </Col>
                <Col md="3" sm="3" xs="6" py="5"  >                 
                    <div className="text-center py-3">
                      <CardImg top className="rounded-circle" src={lucas} alt="Foto lucas">                    
                      
                      </CardImg>                      
                    </div>
                    <CardBody>                    
                      <div className="author">
                        <CardTitle tag="h4">Lucas Ribeiro</CardTitle>                        
                      </div>                   
                      <p className="card-description text-center">
                       Graduando em Engenharia de Computação
                      </p>
                      <Button className="Headerlinks"                
                        color="link"
                        href="http://lattes.cnpq.br/5851601274050374"                   
                      >
                        1
                    </Button> 
                    <Button className="Headerlinks"                
                        color="link"
                        href="http://www.eduardo.c3.furg.br/"                   
                      >
                        2
                    </Button>                      
                    </CardBody>                                                 
                </Col>
              </Row>
            </Container>
          </div>

          <div className=" text-center">
            <Container >            
              <Row >
                <Col md="3" sm="3" xs="6" py="5"  >                 
                      <div className="text-center py-3">
                        <CardImg top className="rounded-circle" src={willian} alt="Foto willian">                    
                        
                        </CardImg>                      
                      </div>
                      <CardBody>                    
                        <div className="author">
                          <CardTitle tag="h4">Willian Lemos</CardTitle>                        
                        </div>                   
                        <p className="card-description text-center">
                        Graduando em Engenharia de Computação
                        </p>
                        <Button className="Headerlinks"                
                          color="link"
                          href="http://lattes.cnpq.br/5851601274050374"                   
                        >
                          1
                      </Button> 
                      <Button className="Headerlinks"                
                          color="link"
                          href="http://www.eduardo.c3.furg.br/"                   
                        >
                          2
                      </Button>                      
                      </CardBody>                                                 
                  </Col>
                  <Col md="3" sm="3" xs="6" py="5"  >                 
                    <div className="text-center py-3">
                      <CardImg top className="rounded-circle" src={augusto} alt="Foto augusto">                    
                      
                      </CardImg>                      
                    </div>
                    <CardBody>                    
                      <div className="author">
                        <CardTitle tag="h4">Augusto Lamim</CardTitle>                        
                      </div>                   
                      <p className="card-description text-center">
                       Graduando em Engenharia de Computação
                      </p>
                      <Button className="Headerlinks"                
                        color="link"
                        href="http://lattes.cnpq.br/5851601274050374"                   
                      >
                        1
                    </Button> 
                    <Button className="Headerlinks"                
                        color="link"
                        href="http://www.eduardo.c3.furg.br/"                   
                      >
                        2
                    </Button>                      
                    </CardBody>                                                 
                </Col>
                <Col md="3" sm="3" xs="6" py="5"  >                 
                    <div className="text-center py-3">
                      <CardImg top className="rounded-circle" src={augusto} alt="Foto augusto">                    
                      
                      </CardImg>                      
                    </div>
                    <CardBody>                    
                      <div className="author">
                        <CardTitle tag="h4">Augusto Lamim</CardTitle>                        
                      </div>                   
                      <p className="card-description text-center">
                       Graduando em Engenharia de Computação
                      </p>
                      <Button className="Headerlinks"                
                        color="link"
                        href="http://lattes.cnpq.br/5851601274050374"                   
                      >
                        1
                    </Button> 
                    <Button className="Headerlinks"                
                        color="link"
                        href="http://www.eduardo.c3.furg.br/"                   
                      >
                        2
                    </Button>                      
                    </CardBody>                                                 
                </Col>

              </Row>
            </Container>
          </div> */}


        </Card>
          </Col>

        </Row>

       </Container>

      </div>
      <Footer/>

    </div>

  );
}