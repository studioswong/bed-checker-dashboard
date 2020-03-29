import React, { useState, useEffect } from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  GoogleMapLoader,
  Marker,
  InfoWindow
} from "react-google-maps";
import { MarkerWithLabel } from "react-google-maps/lib/components/addons/MarkerWithLabel";
// import { MarkerClusterer } from "react-google-maps/lib/components/addons/MarkerClusterer";
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";

// reactstrap components
import { Card, Container, Row } from "reactstrap";

// core components
import Header from "./Header";
import HospitalTable from "./HospitalTable"
import AddWardPage from "./AddWardPage"

// const hospitals = [{
//     name: 'St Thomas Hospital',
//     latitude: 51.498016, 
//     longitude: -0.118011,
//     avaliableBeds: 10,
//     totalBeds: 100
// },{
//     name: 'Homerton Hospital',
//     latitude: 51.5500, 
//     longitude: -0.0460,
//     avaliableBeds: 20,
//     totalBeds: 100
// },{
//     name: 'Heart Hospital',
//     latitude: 51.5359167, 
//     longitude: -0.1191931,
//     avaliableBeds: 40,
//     totalBeds: 100
// },{
//     name: 'London Bridge Hospital',
//     latitude: 51.498729, 
//     longitude: -0.1295554,
//     avaliableBeds: 50,
//     totalBeds: 100
// },{
//     name: 'Royal Free Hospital',
//     latitude: 51.5350857, 
//     longitude: -0.1404352,
//     avaliableBeds: 70,
//     totalBeds: 100
// },{
//     name: 'St Marys Hospital',
//     latitude: 51.5211303, 
//     longitude: -0.1543007,
//     avaliableBeds: 35,
//     totalBeds: 100
// }]

const MapWrapper = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 51.509865, lng: -0.118092 }}
    defaultOptions={{
        scrollwheel: false,
        styles: [
        {
            featureType: "administrative",
            elementType: "labels.text.fill",
            stylers: [{ color: "#444444" }]
        },
        {
            featureType: "landscape",
            elementType: "all",
            stylers: [{ color: "#f2f2f2" }]
        },
        {
            featureType: "poi",
            elementType: "all",
            stylers: [{ visibility: "off" }]
        },
        {
            featureType: "road",
            elementType: "all",
            stylers: [{ saturation: -100 }, { lightness: 45 }]
        },
        {
            featureType: "road.highway",
            elementType: "all",
            stylers: [{ visibility: "simplified" }]
        },
        {
            featureType: "road.arterial",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }]
        },
        {
            featureType: "transit",
            elementType: "all",
            stylers: [{ visibility: "off" }]
        },
        {
            featureType: "water",
            elementType: "all",
            stylers: [{ color: "#5e72e4" }, { visibility: "on" }]
        }
        ]
    }}
    >
    { props.hospitals.map(hospital => {
        return (
            <MarkerWithLabel
                position={{lat: hospital.latitude, lng: hospital.longitude}}
                // position={hospital.position}
                labelAnchor={new window.google.maps.Point(0, 0)}
                labelStyle={{backgroundColor: "white", fontSize: "12px", padding: "16px"}}
                >
                <div>{hospital.name} - {hospital.availableBeds} beds</div>
            </MarkerWithLabel>
            // <HospitalMarker hospital={hospital} />
        )
    })}
    </GoogleMap>
  ))
);

const HospitalMarker = (props) => {
    const [ showInfoWindow, setShowInfoWindow ] = useState(false);
    const { latitude, longitude, availableBeds, name } = props.hospital
    useEffect(() => {
        setShowInfoWindow(showInfoWindow);
      }, [showInfoWindow]);

    return(
        <Marker position={{lat: latitude, lng: longitude}} 
        onMouseOver={setShowInfoWindow(true)} onMouseOut={setShowInfoWindow(false)}>
            {showInfoWindow && (
                <InfoWindow>
                    <h4>{name}</h4>
                    <h4>{availableBeds}</h4>
                </InfoWindow>)}
        </Marker>
    )
}

export const Maps = (props) => {
    //***** */
    // const [ hospitals, setHospitals ] = useState([]);
    // const [ getHospitals, { data, loading, error  }] = useLazyQuery(gql`
    //     query getHospitals {
    //     getHospitals {
    //         hospitals{
    //         totalBeds
    //         availableBeds
    //         unavailableBeds
    //         }
    //         }
    //     }
    // `);
    // useEffect(() => {
    //     getHospitals()
    // }, [])

    // useEffect(() => {
    //     if(data) {setHospitals(data.getHospitals.hospitals)};
    // }, [ data ])
    //******* */

    return (
      <>
        <Container className="mt--7" fluid>
          <Row>
            <div className="col">
              <Card className="shadow border-0">
                <MapWrapper
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAdCiFw2sgi_r39_oLVOlv5UlkMMvD_tWc"
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={
                    <div
                      style={{ height: `600px` }}
                      className="map-canvas"
                      id="map-canvas"
                    />
                  }
                  mapElement={
                    <div style={{ height: `100%`, borderRadius: "inherit" }} />
                  }
                  hospitals={props.hospitals}
                />
              </Card>
            </div>
          </Row>
          <HospitalTable hospitals={props.hospitals}/>
        </Container>
      </>
    );
};

// export default Maps;
