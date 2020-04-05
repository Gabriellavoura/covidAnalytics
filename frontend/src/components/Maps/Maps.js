import React from 'react'
import './styles.css';

import { Map, TileLayer,Marker } from 'react-leaflet';
import { Card, CardBody, CardTitle } from 'reactstrap';
import MarkerClusterGroup from "react-leaflet-markercluster";

const center = [-32.0332, -52.0986]

class Maps extends React.Component{

  render() {
    return (

        <div className="cardContainer">
          <Card>
            <CardBody>

              <CardTitle tag="h4" className=" mb-2 mb-xl-2 font-weight-bold">
                Mapa Rio Grande do Sul
              </CardTitle> 

              </CardBody>

              <Map center={center} zoom={10}>

                <TileLayer
                  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <MarkerClusterGroup>
                  <Marker position={[-32.03214, -52.11038]} />
                  <Marker position={[-32.00319, -52.12058]} />
                  <Marker position={[-32.00325, -52.12046]} />
                  <Marker position={[-32.03211, -52.10033]} />
                  <Marker position={[-32.03214, -52.09075]} />
                  <Marker position={[-32.03214, -52.11038]} />
                </MarkerClusterGroup>

              </Map>
          </Card> 
        </div>
    );
  }
}
export default Maps;