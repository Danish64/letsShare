import React from 'react';
import styles from './style';
import {View} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import GOOGLE_API_KEY from '../../../res/constants/maps';
import MapView , {Marker} from 'react-native-maps';

const homePlace = {
  description: 'Home',
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
  description: 'Work',
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};

const Component = () => {
    return(
      // <View>
      //   <MapView
      //   style={{height: 400}}
      //   initialRegion={{
      //       latitude: 37.78825,
      //       longitude: -122.4324,
      //       latitudeDelta: 0.0922,
      //       longitudeDelta: 0.0421,
      //     }}>
      //         <Marker
      //         coordinate={{
      //           latitude: 37.78825,
      //           longitude: -122.4324,
      //         }}
      //         />
      //    </MapView>
      //    <GooglePlacesAutocomplete
      //    placeholder='Search'
      //    onPress={(data, details = null) => {
      //      // 'details' is provided when fetchDetails = true
      //      console.log(data, details);
      //    }}
      //    query={{
      //      key: GOOGLE_API_KEY,
      //      language: 'en',
      //    }}
      //  />
      // </View>      
      <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: GOOGLE_API_KEY,
        language: 'en',
      }}
      minLength={2}
    />
    
    );
};
export default Component;