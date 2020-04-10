import React from 'react';
import './styles.css';


import { Card, CardBody, CardTitle } from 'reactstrap';
import Chart from "chart.js";
import axios from 'axios';
var uf_hash = {};

function formatDate (input) {
    var data = input,
        dia  = data.getDate().toString(),
        diaF = (dia.length === 1) ? '0'+dia : dia,
        mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length === 1) ? '0'+mes : mes;

    return (diaF+"/"+mesF);
}

function toDate(input) {
  var aux = input.split('-');
  
  var date = new Date(aux[0], aux[1] - 1, aux[2]);


  return date;
}

class GraphicCovidBr extends React.Component{

  chartRef = React.createRef();

  componentDidMount() {
    var confirmed_hash = {};
    var i = 0;
    var j = 0;
    var k = 0;
    var dates = [];
    const myLineChart = this.chartRef.current.getContext("2d");
    
    axios.get("https://brasil.io/api/dataset/covid19/caso/data?place_type=state")
    .then(res => {
      this.setState({results: res.data.results});

      console.log(confirmed_hash)

      var estados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"]

      for (i = 0; i < res.data.results.length; i++) {
        if (uf_hash.hasOwnProperty(res.data.results[i].state)) {
          uf_hash[res.data.results[i].state].push({data: toDate(res.data.results[i].date), confirmados: res.data.results[i].confirmed})
        
        } else {
          uf_hash[res.data.results[i].state] = []
          uf_hash[res.data.results[i].state].push({data: toDate(res.data.results[i].date), confirmados: res.data.results[i].confirmed})

        }
        if (dates.indexOf(res.data.results[i].date) === -1) {
          dates.push(res.data.results[i].date)

        }
      }


      var current_date = toDate(dates.sort().reverse()[0])
      
      for (k = 0; k < 10; k++) {
        for (i = 0; i < estados.length; i++) {
          var uf_set = uf_hash[estados[i]];
          var date_aux = new Date (current_date.getTime())
          var formated_date = formatDate(date_aux);

        loop1:
          while (true) {

            for (j = 0; j < uf_set.length; j++) {

              if (uf_set[j].data.getTime() === date_aux.getTime()) {

                if (confirmed_hash.hasOwnProperty(formated_date)) {
                  confirmed_hash[formated_date] += uf_set[j].confirmados;
                
                } else {
                  confirmed_hash[formated_date] = 0;
                  confirmed_hash[formated_date] += uf_set[j].confirmados;
      
                }
                break loop1;
                
              }
            }
            date_aux.setDate(date_aux.getDate() - 1);
            
          }


          } 

        current_date.setDate(current_date.getDate() - 1);
      }

      var keys = Object.keys(confirmed_hash);

      var values = keys.map(function(v) { return confirmed_hash[v]; })

      keys.reverse()
      values.reverse()
      
      

    const myLineChart = this.chartRef.current.getContext("2d");
    
    new Chart(myLineChart, {

      type: 'line',
      data: {
            labels: keys,
            datasets: [
              {
                label: "Casos Confirmados",
                data: values,
                fill: false,
                borderColor: "#eb4d4b"
              }
            ]
      },
      options: { }
      });
    });

  }

  render(){
    return(

      <div className="GraphContainer">
        <Card>
          <CardBody>

            <CardTitle tag="h5" className=" mb-2 mb-xl-2 font-weight-bold">
              Casos Confirmados no Brasil
            </CardTitle> 

            <div>
                <canvas id="myChart" ref={this.chartRef}/>
            </div>

          </CardBody>
        </Card>
      </div>
    );
  }
}
export default GraphicCovidBr;