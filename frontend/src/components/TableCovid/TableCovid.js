import React from 'react';
import './styles.css';


import { Card, CardBody,  CardTitle, Table } from 'reactstrap';
import axios from 'axios';

var hash = {};

const dynamic_sort = function dynamicsort(property,order) {
  var sort_order = 1;
  //var c = 0;
  //var d = 0;

  if(order === "desc"){
      sort_order = -1;
  }
  return function (a, b){
      // a should come before b in the sorted order
/*       if (a[property] === 0) {
        c = -1;
      } else {
        c = a[property];
      }

      if (b[property] === 0) {
        d = -1;
      } else {
        d = b[property];
      } */
      if(a[property] < b[property]){
        return -1 * sort_order;
      // a should come after b in the sorted order
      }else if(a[property] > b[property]){
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

      hash['4315602'] = {city: "Rio Grande", confirmed: 0, deaths: 0};
      hash['4314407'] = {city: "Pelotas", confirmed: 0, deaths: 0};
      hash['4318507'] = {city: "São José do Norte", confirmed: 0, deaths: 0};
      hash['4301305'] = {city: "Arroio Grande", confirmed: 0, deaths: 0};
      hash['4304663'] = {city: "Capão do Leão", confirmed: 0, deaths: 0};
      hash['4317301'] = {city: "Santa Vitória do Palmar", confirmed: 0, deaths: 0};
      hash['4305439'] = {city: "Chuí", confirmed: 0, deaths: 0};
      hash['4317608'] = {city: "Santo Antônio da Patrulha", confirmed: 0, deaths: 0};
      hash['4316006'] = {city: "Rolante", confirmed: 0, deaths: 0};
      hash['4315750'] = {city: "Riozinho", confirmed: 0, deaths: 0};
      hash['4323002'] = {city: "Viamão", confirmed: 0, deaths: 0};
      hash['4304671'] = {city: "Capivari do Sul", confirmed: 0, deaths: 0};
      hash['4313508'] = {city: "Osório", confirmed: 0, deaths: 0};
      hash['4304713'] = {city: "Caraá", confirmed: 0, deaths: 0};
      hash['4321204'] = {city: "Taquara", confirmed: 0, deaths: 0};
      hash['4309050'] = {city: "Glorinha", confirmed: 0, deaths: 0};
      hash['4318804'] = {city: "São Lourenço do Sul", confirmed: 0, deaths: 0};
      hash['4306056'] = {city: "Cristal", confirmed: 0, deaths: 0};
      hash['4303509'] = {city: "Camaquã", confirmed: 0, deaths: 0};
      hash['4322327'] = {city: "Turuçu", confirmed: 0, deaths: 0};
      hash['4304507'] = {city: "Canguçu", confirmed: 0, deaths: 0};

      for (i = 0; i < res.data.results.length; i++) {
        if (hash.hasOwnProperty(res.data.results[i].city_ibge_code)) {
          hash[res.data.results[i].city_ibge_code].confirmed = res.data.results[i].confirmed;
          hash[res.data.results[i].city_ibge_code].deaths = res.data.results[i].deaths;

        }
      }
      var keys = Object.keys(hash);
      var values = keys.map(function(v) { return hash[v]; });
      values = values.sort(dynamic_sort("confirmed", "desc"))
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
export {dynamic_sort}