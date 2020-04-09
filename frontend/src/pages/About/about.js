import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {Container,Row,Col,Card,CardBody, CardTitle,CardFooter, Button } from 'reactstrap';
import './styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobeAmericas} from "@fortawesome/free-solid-svg-icons";
import eduardo from '../../assets/eduardo.jpeg'
import gabriel from '../../assets/gabriel.jpeg'
import vanessa from '../../assets/vanessa.png'
import lucas from '../../assets/lucas.jpg'
import willian from '../../assets/willian.jpg'
import augusto from '../../assets/augusto.jpg'
import bruna from '../../assets/bruna.jpg'


export default function About(){

  return(

    <div className="teste">
      <Header/>
      <div className="conteudoCardAbout">
       <Container fluid={true} >
        <Row noGutters={false}>
          <Col xs="12" sm="12" md="12" xl="12">
            <Card>
              <CardBody>
                <CardTitle className="titulosAbout">
                  Quem somos              
                  <hr className="my-2 mb-5" />
                </CardTitle>    
                <p className="my-2 mb-2 aboutexto"> C3 Analytcis é um grupo de pesquisa e desenvolvimento o qual
                tem como objetivo realizar a manipulação, análise e visualização de dados sobre a Covid-19.</p>
                <p className="my-2 mb-2 aboutexto">Esse grupo faz parte da frente tecnologia ITeCCorona, uma iniciativa da FURG em parceria
                com outras instituições para ajudar no combate e prevenção do Covid-19. </p>
                <p className="my-2 mb-5 aboutexto">O time C3 Analytics é composto por docentes e discentes do Centro de Ciências Computacionais da 
                Universidade Federal do Rio Grande - FURG.</p>
                <CardTitle className="titulosAbout mb-2">
                  Equipe
                  <hr className="my-2 mb-5" />  
                </CardTitle>          
                              
              <div className=" text-center ">
              <Container>
                <Row>
                  <Col md="12" sm="12" xl="4"xs="12" py="5" mx="2" >
                    <img class="fotos" src={eduardo} alt="foto1"/>
                    <CardTitle className="TituloTime mt-3">Eduardo Borges</CardTitle>
                    <p className="graduacaoTime my-2 mb-2 text-center ">Dr. em Computação. </p> 
                    <p className="my-2  resumoTime">Professor do Centro de Ciências Computacionais e 
                    coordenador do Grupo de Pesquisa em Gerenciamento de Informações
                    </p>
                    <div className="mb-5">
                    <Button className="Headerlinks" color="link" href="http://lattes.cnpq.br/5851601274050374">
                      <FontAwesomeIcon icon={faGlobeAmericas} />
                    </Button>
                    <Button className="Headerlinks" color="link" href="https://www.linkedin.com/in/enborges/">
                    <FontAwesomeIcon icon={faLinkedin} />
                    </Button> 
                    <Button className="Headerlinks"  color="link" href="https://github.com/enborges">
                      <FontAwesomeIcon icon={faGithub} />
                    </Button>
                    </div>
                                   
                  </Col>
                  <Col md="12" sm="12" xl="4"xs="12" py="5" mx="2" >
                    <img class="fotos" src={eduardo} alt="foto9"/>
                    <CardTitle className="TituloTime mt-3">Glauber Gonçalves</CardTitle>
                    <p className="graduacaoTime my-2 mb-2 text-center ">Dr. em Ciências Geodésicas  </p> 
                    <p className="my-2  resumoTime">Professor do Centro de Ciências Computacionais 
                    coordenador do Grupo de Pesquisa em Gerenciamento de Informações
                    </p>
                    <div className="mb-5">
                    <Button className="Headerlinks" color="link" href="http://lattes.cnpq.br/2814370196736373">
                      <FontAwesomeIcon icon={faGlobeAmericas} />
                    </Button>
                    <Button className="Headerlinks" color="link" href="https://www.linkedin.com/in/enborges/">
                    <FontAwesomeIcon icon={faLinkedin} />
                    </Button> 
                    <Button className="Headerlinks"  color="link" href="https://github.com/enborges">
                      <FontAwesomeIcon icon={faGithub} />
                    </Button>
                    </div>
                                   
                  </Col>
                  <Col md="12" sm="12" xl="4"xs="12" py="5" mx="5"  >
                  <img class="fotos" src={gabriel} alt="foto2"/>
                    <CardTitle className="TituloTime mt-3">Gabriel Lavoura</CardTitle>
                    <p className="graduacaoTime my-2 mb-2 text-center ">Mestrando em Eng.Comp. </p>
                    <p className="my-2 resumoTime">Empreendedor, trabalha com desenvolvimento há mais de 7 anos,
                     sendo entusiasta em hardware, desenvolvimento Web e Mobile.
                    </p>
                    <div className="mb-5">
                    <Button className="Headerlinks" color="link" href="http://lattes.cnpq.br/5616548040095346">
                      <FontAwesomeIcon icon={faGlobeAmericas} />
                    </Button>
                    <Button className="Headerlinks" color="link" href="https://www.linkedin.com/in/gabriellavoura/">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </Button> 
                    <Button className="Headerlinks"  color="link" href="https://github.com/Gabriellavoura">
                      <FontAwesomeIcon icon={faGithub} />
                    </Button>
                    </div>                   
                  </Col>
                  <Col md="12" sm="12" xl="4"xs="12" py="5" mx="2">
                  <img class="fotos" src={vanessa} alt="foto3"/>
                    <CardTitle className="TituloTime mt-3">Vanessa Telles</CardTitle>
                    <p className="graduacaoTime my-2 mb-2 text-center ">Mestranda em Eng.Comp. </p>
                    <p className="my-2 resumoTime">Entusiasta em 
                    Design Digital, empreendedora e desenvolvedora desde 2014, atuando nas áreas de Data Science,
                     Web e Mobile.
                    </p>
                    <div className="mb-5">
                    <Button className="Headerlinks" color="link" href="http://lattes.cnpq.br/3565116360523950">
                      <FontAwesomeIcon icon={faGlobeAmericas} />
                    </Button>
                    <Button className="Headerlinks" color="link" href="https://www.linkedin.com/in/vanessa-telles-da-silva-8ab4b614a/">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </Button> 
                    <Button className="Headerlinks"  color="link" href="https://github.com/vanessatelles">
                      <FontAwesomeIcon icon={faGithub} />
                    </Button>
                    </div>
                
                  </Col> 
                  <Col md="12" sm="12" xl="4"xs="12" py="5" mx="2">
                  <img class="fotos" src={bruna} alt="foto4"/>
                    <CardTitle className="TituloTime mt-3">Bruna Guterres</CardTitle>
                    <p className="graduacaoTime my-2 mb-2 text-center ">Mestranda em Eng.Comp. </p>
                    <p className="my-2 resumoTime">Professora substituta do Centro de Ciências Computacionais - C3. Entusiasta em Visão Computacional e Aprendizado de Máquina. Membro do grupo NAUTEC desde 2015
                    </p>
                    <div className="mb-5">
                    <Button className="Headerlinks" color="link" href="http://lattes.cnpq.br/2197909913930437">
                      <FontAwesomeIcon icon={faGlobeAmericas} />
                    </Button>
                    <Button className="Headerlinks" color="link" href="https://www.linkedin.com/in/bruna-de-vargas-guterres-07888b129/">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </Button> 
                    {/* <Button className="Headerlinks"  color="link" href="https://github.com/luucasrb">
                      <FontAwesomeIcon icon={faGithub} />
                    </Button> */}
                    </div>                   
                  </Col>
                  <Col md="12" sm="12" xl="4"xs="12" py="5" mx="2">
                  <img class="fotos" src={lucas} alt="foto5"/>
                    <CardTitle className="TituloTime mt-3">Lucas Ribeiro</CardTitle>
                    <p className="graduacaoTime my-2 mb-2 text-center ">Graduando em Eng.Comp. </p>
                    <p className="my-2 resumoTime">Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Integer dapibus purus id enim imperdiet, sed finibus nunc 
                    accumsan. 
                    </p>
                    <div className="mb-5">
                    <Button className="Headerlinks" color="link" href="http://lattes.cnpq.br/5851601274050374">
                      <FontAwesomeIcon icon={faGlobeAmericas} />
                    </Button>
                    <Button className="Headerlinks" color="link" href="https://www.linkedin.com/in/luucasrb/">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </Button> 
                    <Button className="Headerlinks"  color="link" href="https://github.com/luucasrb">
                      <FontAwesomeIcon icon={faGithub} />
                    </Button>
                    </div>                   
                  </Col>
                  <Col md="12" sm="12" xl="4"xs="12" py="5" mx="2">
                  <img class="fotos" src={willian} alt="foto6"/>
                    <CardTitle className="TituloTime mt-3">Willian Lemos</CardTitle>
                    <p className="graduacaoTime my-2 mb-2 text-center ">Graduando em Eng.Comp. </p>
                    <p className="my-2 resumoTime">Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Integer dapibus purus id enim imperdiet, sed finibus nunc 
                    accumsan. 
                    </p>
                    <div className="mb-5">
                    <Button className="Headerlinks" color="link" href="http://lattes.cnpq.br/5429651614061510">
                      <FontAwesomeIcon icon={faGlobeAmericas} />
                    </Button>
                    <Button className="Headerlinks" color="link" href="https://www.linkedin.com/in/willian-lemos-4b9121136/">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </Button> 
                    <Button className="Headerlinks"  color="link" href="https://github.com/Willblemos">
                      <FontAwesomeIcon icon={faGithub} />
                    </Button>
                    </div>                   
                  </Col>
                  <Col md="12" sm="12" xl="4"xs="12" py="5" mx="2">
                  <img class="fotos" src={augusto} alt="foto7"/>
                    <CardTitle  className="TituloTime mt-3">Augusto Lamim</CardTitle>
                    <p className="graduacaoTime my-2 mb-2 text-center ">Graduando em Eng.Comp. </p>
                    <p className="my-2 resumoTime">Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Integer dapibus purus id enim imperdiet, sed finibus nunc 
                    accumsan. 
                    </p>
                    <div className="mb-5">
                    <Button className="Headerlinks" color="link" href="http://lattes.cnpq.br/1925430387887371">
                      <FontAwesomeIcon icon={faGlobeAmericas} />
                    </Button>
                    <Button className="Headerlinks" color="link" href="https://www.linkedin.com/in/augusto-c%C3%A9sar-lamim-martins-de-oliveira-6b93a5168/">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </Button> 
                    <Button className="Headerlinks"  color="link" href="https://github.com/Lastopsop">
                      <FontAwesomeIcon icon={faGithub} />
                    </Button>
                    </div>                   
                  </Col>
                  <Col md="12" sm="12" xl="4"xs="12" py="5" mx="2">
                  <img class="fotos" src={eduardo} alt="foto8"/>
                    <CardTitle  className="TituloTime mt-3">Felipe Marques</CardTitle>
                    <p className="graduacaoTime my-2 mb-2 text-center ">Graduando em Eng.Comp. </p>
                    <p className="my-2 resumoTime">Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Integer dapibus purus id enim imperdiet, sed finibus nunc 
                    accumsan. 
                    </p>
                    <div className="mb-5">
                    <Button className="Headerlinks" color="link" href="http://lattes.cnpq.br/5851601274050374">
                      <FontAwesomeIcon icon={faGlobeAmericas} />
                    </Button>
                    <Button className="Headerlinks" color="link" href="http://lattes.cnpq.br/5851601274050374">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </Button> 
                    <Button className="Headerlinks"  color="link" href="https://github.com/FelpsZMS">
                      <FontAwesomeIcon icon={faGithub} />
                    </Button>
                    </div>                   
                  </Col>                        
                </Row>
              </Container>
            </div> 

            </CardBody> 
            </Card>

          </Col>
        </Row>
       </Container>
      </div>
      <Footer/>

    </div>

  );
}