import React from 'react';

import { Table } from 'reactstrap';

import './styles.css';
import axios from 'axios';
class TableCovid extends React.Component{
  
  state = {
    results: []
  };
    componentDidMount(){
      axios.get("https://brasil.io/api/dataset/covid19/caso/data?is_last=True&state=RS")
      .then(res => {
        this.setState({results: res.data.results});
        console.log(this.state.results[1])
      });
  
    }
  render(){
    var i = 1;
    return(
      <div className="infoContainer">
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
      </div>
    );
  }
}

export default TableCovid;