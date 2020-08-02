import React from 'react';
import './styles.css';


import { Card, CardBody, CardTitle } from 'reactstrap';
import Chart from "chart.js";
import axios from 'axios';
var numero = [];
var data = [];
var i = 0;
function formatDate (input) {
  var datePart = input.match(/\d+/g),  
  month = datePart[1], day = datePart[2];
  return day + '/' + month;
}

class GraphicCovid extends React.Component{

  chartRef = React.createRef();

  componentDidMount() {

    
    axios.get("https://brasil.io/api/dataset/covid19/caso/data?state=RS&place_type=state")
    .then(res => {
      this.setState({results: res.data.results});
      for(i=0; i<30; i++){
        numero[i] = this.state.results[i].confirmed;
        data[i] = formatDate(this.state.results[i].date);
      }      

      numero.reverse()
      data.reverse()
      
      

    const myLineChart = this.chartRef.current.getContext("2d");
    
    new Chart(myLineChart, {

      type: 'line',
      data: {
            labels: data,
            datasets: [
              {
                label: "Casos Confirmados",
                data: numero,
                fill: false,
                borderColor: "#f0932b"
              }
            ]
      },
      options: {
        elements: {
          line: {
            tension: 0.2
          },
        },
        legend: {
          onClick: (e) => e.stopPropagation()
        }
       }
      });
    });

  }

  render(){
    return(

      <div className="GraphContainer">
        <Card>
          <CardBody>

            <CardTitle tag="h5" className=" mb-2 mb-xl-2 font-weight-bold">
              Casos Confirmados no RS
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
export default GraphicCovid;