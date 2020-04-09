import React from 'react'
import './styles.css';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Card, CardBody, CardTitle } from 'reactstrap';
import axios from 'axios';

var json = require('../../database/municipios_RS.json');
var obj = {};
var array_obj = [];
var hash = {};

const center = [-32.0332, -52.0986]
//var cidade = {};

class Maps extends React.Component{
  state={
    geodata: [],
    dadosBrutos: []
  }
  
  componentDidMount() {
    var i = 0;
    var j = 0;
    var k = 0;
    
    axios.get('https://brasil.io/api/dataset/covid19/caso/data?date=&state=RS&city=&place_type=city&is_last=True&city_ibge_code=&order_for_place=')
    .then( res => {
        const dadosBrutos = res.data;

        for (k= 0; k < json.length; k++) {
          hash[json[k].codigo_ibge] = 0;

        }

        for (j = 0; j < res.data.results.length; j++) {
          hash[res.data.results[j].city_ibge_code] = res.data.results[j].confirmed;
    
        }

        for (i = 0; i < json.length; i++) {
             obj = {nome: json[i].name, lat: json[i].lat, lng: json[i].lon, confirmed: hash[json[i].codigo_ibge], codigo_ibge: json[i].codigo_ibge}
             array_obj.push(obj)
     
         }
     

        this.setState({ dadosBrutos }); 

    })

    console.log(hash)

    console.log(array_obj)

    //console.log(obj)


    var cidades = this.state.dadosBrutos[0];

    axios.get('https://nominatim.openstreetmap.org/search?&state=Rio+grande+do+Sul&city='+ cidades +'&limit=1&format=json')
      .then( res => {
        const geodata = res.data;
        this.setState({ geodata });
      })
    
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

               
                {array_obj.map(({lat, lng, nome, confirmed}, index) => (
                      <Marker position={[lat, lng]} key={index}>
                          <Popup>
                            {nome} | Casos confirmados: {confirmed}
                          </Popup>
                      </Marker>
                    ))}                

         {/*       <MarkerClusterGroup>

                  {this.state.geodata.map( geodata => 
                    <Marker position={[geodata.lat, geodata.lon]}>
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
                    </Marker>
                  )}
                </MarkerClusterGroup> */}

              </Map>
          </Card> 
        </div>
    );
  }
}
export default Maps;