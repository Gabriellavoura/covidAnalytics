import React from 'react';

import { Card,
         CardBody,
         CardTitle } from 'reactstrap';


import './styles.css';
import Chart from "chart.js";




class GraphicCovidBr extends React.Component{
  chartRef = React.createRef();
  componentDidMount() {

    const myLineChart = this.chartRef.current.getContext("2d");

    new Chart(myLineChart, {

      type: 'line',
      data: {
            labels:["Jan", "Feb", "March","Apil"],
            datasets: [
              {
                label: "Casos Confirmados",
                data: [46,98,177,220],
                fill: false,
                borderColor: "#eb4d4b"
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
          <CardTitle tag="h5"
                  className=" mb-2 mb-xl-2 font-weight-bold">
                  Casos Confirmados no Brasil 
                    </CardTitle> 
            <div >
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default GraphicCovidBr;