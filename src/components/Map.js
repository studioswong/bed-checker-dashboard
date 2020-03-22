import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, withScriptjs } from 'react-google-maps'
import { PlaceMarker } from './Placemarker'

const AirbnbMap = withScriptjs(withGoogleMap(props => (
  <GoogleMap
    defaultCenter={props.center}
    defaultZoom={props.zoom} />
)));

export class Map extends Component {
  constructor(props) {
    super(props)

    this.zoom = 7

    this.state = {
      lat: 50.0515918,
      lng: 19.9357531
    };
  }

  render() {
    const {lat, lng} = this.state;

    return(
      <div style={{width: `750px`, height: `750px`}}>
        <AirbnbMap
          center={{
            lat: lat,
            lng: lng
          }}
          zoom={this.zoom}
          containerElement={
            <div style={{ height: `100%` }} />
          }
          mapElement={
            <div style={{ height: `100%` }} />
          }
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}