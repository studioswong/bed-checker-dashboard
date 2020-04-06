import React, { useState } from 'react'
import { Marker, InfoWindow } from 'react-google-maps'

const HospitalMarker = props => {
    const [openWindow, setOpenWindow] = useState(false);
    const { latitude, longitude, name, availableBeds } = props.hospital
    return (
        <Marker
            position={{
                lat: parseFloat(latitude),
                lng: parseFloat(longitude)
            }}
            onMouseOver={() => setOpenWindow(true)}
            onMouseOut={() => setOpenWindow(false)}
        >
            {openWindow && (
                <InfoWindow>
                    <div>
                        <h3>{name}</h3>
                        <p>{availableBeds} available Beds</p>
                    </div>
                </InfoWindow>
            )}
        </Marker>
    )
}

export default HospitalMarker