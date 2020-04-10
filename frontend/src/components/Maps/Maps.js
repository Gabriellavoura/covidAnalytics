import React from 'react'
import './styles.css';

import { Map, TileLayer, Marker, Popup,icon } from 'react-leaflet';
import { Card, CardBody, CardTitle } from 'reactstrap';
import L from 'leaflet';
import MarkerClusterGroup from "react-leaflet-markercluster";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faVirus, faUser, faCalendar}  from "@fortawesome/free-solid-svg-icons";
import redFilledMarker from '../../assets/icon.png';
import pinMarker from '../../assets/pin.png';
import axios from 'axios';

L.NumberedDivIcon = L.Icon.extend({
	options: {
    iconUrl: pinMarker,
    number: '',
    shadowUrl: null,
    iconSize: new L.Point(50, 50),
		iconAnchor: new L.Point(25, 25),
    popupAnchor: new L.Point(-25, 20),
    customWeight: 0,
		/*
		iconAnchor: (Point)
		popupAnchor: (Point)
		*/
    className: 'leaflet-div-icon'    
  },
  
	createIcon: function () {
		var div = document.createElement('div');
		var img = this._createImg(this.options['iconUrl']);
		var numdiv = document.createElement('div');
		numdiv.setAttribute ( "class", "number" );
		numdiv.innerHTML = this.options['number'] || '';
		div.appendChild ( img );
		div.appendChild ( numdiv );
		this._setIconStyles(div, 'icon');
		return div;
	},

	//you could change this to add a shadow like in the normal marker if you really wanted
	createShadow: function () {
		return null;
	}
});

var json = require('../../database/municipios_RS.json');
var array_obj_confirmed = [];


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
    var obj_confirmed = {};
    var array_obj_confirmed2 = [];
    var hash = {};

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

            array_obj_confirmed2.push(obj_confirmed)

            array_obj_confirmed = [].concat(array_obj_confirmed2)

          }       
      }
        this.setState({ dadosBrutos }); 
        console.log(array_obj_confirmed)    
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
                      for( let i in confirmed)
                        <Marker position={[lat, lng]} key={index} icon={new L.NumberedDivIcon({number: confirmed})} attribution="confirmed" >
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