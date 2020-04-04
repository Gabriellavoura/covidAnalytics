import React from 'react';

import { Card,
         CardBody,
         CardTitle } from 'reactstrap';


import './styles.css';
import Chart from "chart.js";




class GraphicCovid extends React.Component{
  chartRef = React.createRef();
  componentDidMount() {

    const myLineChart = this.chartRef.current.getContext("2d");

    new Chart(myLineChart, {

      type: 'line',
      data: {
            labels:["Jan", "Feb", "March","Apil"],
            datasets: [
              {
                label: "Sales",
                data: [86,98,77,20],
                fill: false,
                borderColor: "#673AB7"
              }
            ]
      },
      options: { }
      });

  }


  render(){

    return(
      <div className="infoContainer">
        <Card>
          <CardBody>
            <CardTitle>
              Graaficos
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

export default GraphicCovid;