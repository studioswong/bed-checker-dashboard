import React, { useState, useEffect } from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  GoogleMapLoader,
  Marker
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

const hospitals = [{
    name: 'St Thomas Hospital',
    latitude: 51.498016, 
    longitude: -0.118011,
    avaliableBeds: 10,
    totalBeds: 100
},{
    name: 'Homerton Hospital',
    latitude: 51.5500, 
    longitude: -0.0460,
    avaliableBeds: 20,
    totalBeds: 100
},{
    name: 'Heart Hospital',
    latitude: 51.5359167, 
    longitude: -0.1191931,
    avaliableBeds: 40,
    totalBeds: 100
},{
    name: 'London Bridge Hospital',
    latitude: 51.498729, 
    longitude: -0.1295554,
    avaliableBeds: 50,
    totalBeds: 100
},{
    name: 'Royal Free Hospital',
    latitude: 51.5350857, 
    longitude: -0.1404352,
    avaliableBeds: 70,
    totalBeds: 100
},{
    name: 'St Marys Hospital',
    latitude: 51.5211303, 
    longitude: -0.1543007,
    avaliableBeds: 35,
    totalBeds: 100
}]

// Heart Hospital	        51,5359167	-0,1191931	
// London Bridge Hospital	51,498729	-0,1295554
// Royal Free Hospital	    51,5350857	-0,1404352
// St. Thomas Hospital	    51,4965211	-0,1269322
// St Mary's Hospital	    51,5211303	-0,1543007

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
        console.log('hospital', hospital);
        return (
            <MarkerWithLabel
                position={{lat: hospital.latitude, lng: hospital.longitude}}
                // position={hospital.position}
                labelAnchor={new window.google.maps.Point(0, 0)}
                labelStyle={{backgroundColor: "white", fontSize: "12px", padding: "16px"}}
                >
                <div>{hospital.name} - {hospital.avaliableBeds} beds</div>
            </MarkerWithLabel>
        )
    })}
    </GoogleMap>
  ))
);

export const Maps = () => {
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

    const { loading, error, data } = useQuery(gql`
        query getHospitals {
        getHospitals {
            hospitals{
            totalBeds
            availableBeds
            unavailableBeds
            name
            latitude
            longitude
            }
            }
        }
    `);
    let hospitalsData = [];

    console.log('data:', data);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    if (data) {
        hospitalsData = data.getHospitals.hospitals
    }

    return (
      <>
        <Header />
        {/* Page content */}
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
                  hospitals={hospitalsData}
                />
              </Card>
            </div>
          </Row>
          <HospitalTable hospitals={hospitalsData}/>
        </Container>
      </>
    );
};

// export default Maps;
