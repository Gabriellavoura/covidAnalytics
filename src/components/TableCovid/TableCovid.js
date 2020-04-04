import React from 'react';

import { Table } from 'reactstrap';

import './styles.css';

class TableCovid extends React.Component{
    
  render(){

    return(
      <div className="infoContainer">
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Cidade</th>
              <th>Casos Confirmados</th>
              <th>Mortes</th>
              <th>Recuperados</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Rio Grande</td>
              <td>2</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Pelotas</td>
              <td>13</td>
              <td>0</td>
              <td>3</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>São José do Norte</td>
              <td>6</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Santa Vitória do Palmar</td>
              <td>6</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Arroio Grande</td>
              <td>3</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
          </Table>
      </div>
    );
  }
}

export default TableCovid;