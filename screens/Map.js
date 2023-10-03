import React, { useEffect, useState } from 'react';
import MapView, { Marker, showMarker } from 'react-native-maps';
import { StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import MapApplicationBar from '../components/MapApplicationBar';

//const ICON_LOCATION ='my-location'
//const ICON_LOCATION_SEARCHING ='location-searching'

const icons = {
    location: 'my-location',
    location_searching: 'location-searching'
}

export default function Map({...props}) {
    const [location, setLocation] = useState({
        latitude: 65.0800,
        longitude: 25.4800,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    })

    const [searchIcon, setSearchIcon] = useState(icons.location)
    const [marker,setMarker] = useState(null)

   /* useEffect(() => {
        (async() => {
            getUserPosition()
        })()
    }, []) */

const getUserPosition = async () => {
    setSearchIcon(icons.location_searching)
    let { status } = await Location.requestForegroundPermissionsAsync()
    try {
        if (status !== 'granted') {
            console.log("Not granted")
            return
        }

        const position = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.High})
        setLocation({...location,"latitude": position.coords.latitude,"longitude":position.coords.longitude})
        setSearchIcon(icons.location)
        setMarker(position.coords)
    }   catch (error) {
        console.log(error + 'Something went wrong...')
    }
}

  return ( 
    <>
        <MapApplicationBar {...props} locationIcon={searchIcon} getUserPosition={getUserPosition}/>
            <MapView
                style={styles.map}
                region={location}
                mapType={props.mapType}
                onLongPress={showMarker}
            >
                {
                    marker && 
                    <Marker title="My position" coordinate={{latitude: marker.latitude, longitude: marker.longitude}} />
                }
            </MapView>
      </>
  );
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
});
