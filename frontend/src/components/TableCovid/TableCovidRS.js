import React from 'react';
import './styles.css';


import { Card, CardBody, CardTitle, Table } from 'reactstrap';
import axios from 'axios';

class TableCovidRS extends React.Component{
  state = {
    results: []
  };

  componentDidMount(){
    axios.get("https://brasil.io/api/dataset/covid19/caso/data?is_last=True&state=RS")
    .then(res => {
      this.setState({results: res.data.results});
      // console.log(this.state.results[1])
    });
  }

  render(){
    //Incrementa contador de lihas
    var i = 1;

    return(
      <div className="TabRSContainer">
        <Card>

          <CardBody>

            <CardTitle tag="h4" className=" mb-2 mb-xl-2 font-weight-bold">
              Cidades do Rio Grande do Sul
            </CardTitle> 

          </CardBody> 

          <Table striped>

            <thead>
              <tr>
                <th>#</th>
                <th>Cidade</th>
                <th>Casos Confirmados</th>
                <th>Mortes</th>
              </tr>
            </thead>

            <tbody>

               {this.state.results.map(results => 
                <tr>
                  <th scope="row">{i++}</th>
                  <td>{results.city}</td>
                  <td>{results.confirmed}</td>
                  <td>{results.deaths}</td>
                </tr>
                )}        
            </tbody>
          </Table>
        </Card>
      </div>
    );
  }
}
export default TableCovidRS;