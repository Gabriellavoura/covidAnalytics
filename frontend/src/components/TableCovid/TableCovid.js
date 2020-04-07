import React from 'react';
import './styles.css';


import { Card, CardBody,  CardTitle, Table } from 'reactstrap';
import axios from 'axios';

var hash = {};

function dynamicsort(property,order) {
  var sort_order = 1;
  var c = 0;
  var d = 0;

  if(order === "desc"){
      sort_order = -1;
  }
  return function (a, b){
      // a should come before b in the sorted order
      if (a[property] === "N/D") {
        c = -1;
      } else {
        c = a[property];
      }

      if (b[property] === "N/D") {
        d = -1;
      } else {
        d = b[property];
      }

      if(c < d){
              return -1 * sort_order;
      // a should come after b in the sorted order
      }else if(c > d){
              return 1 * sort_order;
      // a and b are the same
      }else{
              return 0 * sort_order;
      }
  }
}


class TableCovid extends React.Component{ 
  state = {
    results: []
  };

  componentDidMount(){

    axios.get("https://brasil.io/api/dataset/covid19/caso/data?is_last=True&state=RS")
    .then(res => {

      var i = 0;

      hash['4315602'] = {city: "Rio Grande", confirmed: "N/D", deaths: "N/D"};
      hash['4314407'] = {city: "Pelotas", confirmed: "N/D", deaths: "N/D"};
      hash['4318507'] = {city: "São José do Norte", confirmed: "N/D", deaths: "N/D"};
      hash['4301305'] = {city: "Arroio Grande", confirmed: "N/D", deaths: "N/D"};
      hash['4304663'] = {city: "Capão do Leão", confirmed: "N/D", deaths: "N/D"};
      hash['4317301'] = {city: "Santa Vitória do Palmar", confirmed: "N/D", deaths: "N/D"};
      hash['4305439'] = {city: "Chuí", confirmed: "N/D", deaths: "N/D"};
      hash['4317608'] = {city: "Santo Antônio da Patrulha", confirmed: "N/D", deaths: "N/D"};
      hash['4316006'] = {city: "Rolante", confirmed: "N/D", deaths: "N/D"};
      hash['4315750'] = {city: "Riozinho", confirmed: "N/D", deaths: "N/D"};
      hash['4323002'] = {city: "Viamão", confirmed: "N/D", deaths: "N/D"};
      hash['4304671'] = {city: "Capivari do Sul", confirmed: "N/D", deaths: "N/D"};
      hash['4313508'] = {city: "Osório", confirmed: "N/D", deaths: "N/D"};
      hash['4304713'] = {city: "Caraá", confirmed: "N/D", deaths: "N/D"};
      hash['4321204'] = {city: "Taquara", confirmed: "N/D", deaths: "N/D"};
      hash['4309050'] = {city: "Glorinha", confirmed: "N/D", deaths: "N/D"};
      hash['4318804'] = {city: "São Lourenço do Sul", confirmed: "N/D", deaths: "N/D"};
      hash['4306056'] = {city: "Cristal", confirmed: "N/D", deaths: "N/D"};
      hash['4303509'] = {city: "Camaquã", confirmed: "N/D", deaths: "N/D"};
      hash['4322327'] = {city: "Turuçu", confirmed: "N/D", deaths: "N/D"};
      hash['4304507'] = {city: "Canguçu", confirmed: "N/D", deaths: "N/D"};

      for (i = 0; i < res.data.results.length; i++) {
        if (hash.hasOwnProperty(res.data.results[i].city_ibge_code)) {
          hash[res.data.results[i].city_ibge_code].confirmed = res.data.results[i].confirmed;
          hash[res.data.results[i].city_ibge_code].deaths = res.data.results[i].deaths;

        }
      }
      var keys = Object.keys(hash);
      var values = keys.map(function(v) { return hash[v]; });
      values = values.sort(dynamicsort("confirmed", "desc"))
      this.setState({results: values});



    });

  }

  render(){

    //Enumera linhas tabela
    var i = 1;

    return(

      <div className="TabContainer">
        <Card>
          <CardBody>
            <CardTitle  className="TabTitle mb-2 mb-xl-2 font-weight-bold">
            Cidades da Mesorregião do Sudeste Rio-Grandense
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
              {/* Renderiza as linhas da tabela conforme o numero de itens dentro do objeto */}
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
export default TableCovid;