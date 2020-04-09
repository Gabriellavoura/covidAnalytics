import React from 'react'
import './styles.css';

import municipios from '../../assets/csvjson.json';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Card, CardBody, CardTitle } from 'reactstrap';
import MarkerClusterGroup from "react-leaflet-markercluster";
import axios from 'axios';

const center = [-32.0332, -52.0986]
// const cidades = ["São josè do Norte", "Pelotas", "Rio Grande"];

var cidade = {};

function plota(geodata){
  
  return function(){

    for(let municipio in municipios){
      
      <Marker position={[municipio.latitude, geodata.longitude]}>
        <Popup
        minWidth={200}
        closeButton={false}
        onClose={popup => console.warn('popup-close', popup)}>
          <div>
            <b>{geodata.type}</b>
            <br/>
            <b>{geodata.lat}</b>
            <br/>
            <b>{geodata.lon}</b>
            <br/>
            <b>{geodata.importance}</b>
            
            <p>I am a lonely popup.</p>
          </div>
        </Popup>
      </Marker>}     
    }
}

class Maps extends React.Component{
  state={
    geodata: [],
    dadosBrutos: []
  }
  
  componentDidMount() {
    
    axios.get('https://brasil.io/api/dataset/covid19/caso/data?state=RS')
    .then( res => {
        const dadosBrutos = res.data;
        this.setState({ dadosBrutos }); 
    })
    // var cidades = this.state.dadosBrutos[0];

    // axios.get('https://nominatim.openstreetmap.org/search?&state=Rio+grande+do+Sul&city='+ cidades +'&limit=1&format=json')
    //   .then( res => {
    //     const geodata = res.data;
    //     this.setState({ geodata });
    //   })
    
  }
  
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
                
                {plota(this.state.geodata)}


                <MarkerClusterGroup>

                  {/* {this.state.geodata.map( geodata =>  */}

                   

                  // )}
                </MarkerClusterGroup> 

              </Map>
          </Card> 
        </div>
    );
  }
}
export default Maps;