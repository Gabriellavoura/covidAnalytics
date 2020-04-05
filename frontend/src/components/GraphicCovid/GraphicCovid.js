import React from 'react';
import './styles.css';


import { Card, CardBody, CardTitle } from 'reactstrap';
import Chart from "chart.js";

class GraphicCovid extends React.Component{

  chartRef = React.createRef();

  componentDidMount() {

    const myLineChart = this.chartRef.current.getContext("2d");

    new Chart(myLineChart, {

      type: 'line',
      data: {
            labels:["29/03", "31/03","01/04","02/04", "03/04","04/04"],
            datasets: [
              {
                label: "Casos confirmados",
                data: [86,87,98 ,198 ,277 ,359],
                fill: false,
                borderColor: "#f0932b"
              }
            ]
      },
      options: { }
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