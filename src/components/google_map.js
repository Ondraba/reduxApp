import React, { Component } from 'react';

class GoogleMap extends Component {

  componentDidMount(){
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
    //didMount se provede ihned po renderu
  }

  render(){
    return <div ref="map" />; //ref system reactu this.refs.map
  }
}

export default GoogleMap;
