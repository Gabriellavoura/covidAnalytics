import React from 'react';
import './styles.css';

import { Card, CardBody, CardTitle, Table } from 'reactstrap';
import axios from 'axios';
import {dynamic_sort} from './TableCovid';

class TableCovidRS extends React.Component{
  state = {
    results: []
  };

  componentDidMount(){
    axios.get("https://brasil.io/api/dataset/covid19/caso/data?is_last=True&state=RS")
    .then(res => {
      var i = 0;
      var top10 = [];


      for (i = 0; i < res.data.results.length; i++) {
        top10.push(res.data.results[i])
      }

      top10 = top10.sort(dynamic_sort("confirmed", "desc"));
      top10.shift();
      top10.length = 10;

      // console.log(top10);
      

      this.setState({results: top10});
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

            <CardTitle tag="h4" className="TabTitle mb-2 mb-xl-2 font-weight-bold">
              Cidades com maior número de casos confirmados no RS
            </CardTitle> 

          </CardBody> 

          <Table striped>

            <thead>
              <tr>
                <th>#</th>
                <th>Cidade</th>
                <th>Casos Confirmados</th>
                <th>Óbitos</th>
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