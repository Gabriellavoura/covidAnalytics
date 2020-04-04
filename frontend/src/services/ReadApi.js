import React from 'react';

import axios from 'axios';

export default class ReadApi extends React.Component{
    state={
        casos:[],
    };

    componentDidMount(){
        axios.get("https://brasil.io/dataset/covid19/caso?search=&date=&state=RS&city=Rio+Grande&place_type=city&is_last=&city_ibge_code=&order_for_place=").then(res =>{
            console.log(res);
            this.setState({ casos: res.data });
        });
    }

    render(){

        return(

            <ul>
            {this.state.casos.map(casos => <li key={casos.data}></li>)}
            </ul>

        );
    }
}