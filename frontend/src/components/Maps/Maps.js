import React from 'react'
import './styles.css';

import { Map, TileLayer, Marker, Popup,icon } from 'react-leaflet';
import { Card, CardBody, CardTitle } from 'reactstrap';
import L from 'leaflet';
import MarkerClusterGroup from "react-leaflet-markercluster";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faVirus, faUser, faCalendar}  from "@fortawesome/free-solid-svg-icons";
import redFilledMarker from '../../assets/icon.png';
import axios from 'axios';




var json = require('../../database/municipios_RS.json');
//var obj = {};
var obj_confirmed ={};
//var array_obj = [];
var array_obj_confirmed = [];
var hash = {};

const myIcon = L.icon({
  iconUrl: redFilledMarker ,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const center = [-32.0332, -52.0986]
//var cidade = {};

class Maps extends React.Component{
  state={
    geodata: [],
    dadosBrutos:[]
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
          hash[res.data.results[j].city_ibge_code] = {confirmed: res.data.results[j].confirmed, pop_estimada: res.data.results[j].estimated_population_2019, data: res.data.results[j].date};
    
        }
        
        // Imprime todas cidades
    /*    for (i = 0; i < json.length; i++) {
             obj = {nome: json[i].name, lat: json[i].lat, lng: json[i].lon, confirmed: hash[json[i].codigo_ibge], codigo_ibge: json[i].codigo_ibge, pop_estimada: json[i].estimated_population_2019}
             array_obj.push(obj)
             
     
         } */

        // Imprime o numero de cidades com casos confirmados.
         for (i = 0; i < json.length; i++) {
          var casos = hash[json[i].codigo_ibge];

          if(casos) {
            // console.log("entrou") 
            obj_confirmed = {nome: json[i].name, 
                             lat: json[i].lat, 
                             lng: json[i].lon, 
                             confirmed: hash[json[i].codigo_ibge].confirmed,
                             pop_estimada: hash[json[i].codigo_ibge].pop_estimada,
                             data: hash[json[i].codigo_ibge].data,
                             codigo_ibge: json[i].codigo_ibge }

            array_obj_confirmed.push(obj_confirmed)

            console.log(obj_confirmed)    
          }       
      }
        this.setState({ dadosBrutos }); 
    })

    // console.log(hash)

    // console.log(obj)
    
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

            <MarkerClusterGroup>
                  {array_obj_confirmed.map(({lat, lng, nome, confirmed, pop_estimada, data}, index) => (
                      
                        <Marker position={[lat, lng]} key={index} attribution="confirmed">
                            <Popup minWidth={250}>
                              <div className="popUp-container">
                                <div className="popUp-title">{nome}</div>
                                <div className="popUp-body">
                                  <ul>
                                    <li><FontAwesomeIcon icon={faVirus}/> Casos confirmados: {confirmed}</li>
                                    <li><FontAwesomeIcon icon={faUser}/> População Estimada 2019: {pop_estimada}</li>
                                    <li><FontAwesomeIcon icon={faCalendar}/> Data da ultima atualização: {data}</li>  
                                  </ul> 
                                </div>
                              </div>
                            </Popup>
                        </Marker>

                      
                      ))}  
                      </MarkerClusterGroup> 
              </Map>
          </Card> 
        </div>
    );
  }
}
export default Maps;