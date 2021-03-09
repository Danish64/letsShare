import React, {useState} from 'react';
import styles from './style';

import {View, TouchableWithoutFeedback, Text, Modal, TouchableOpacity, Button, Image} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {TextInputTitleText, BodyTextLight} from '../../../res/UniversalComponents/Text';

import GOOGLE_API_KEY from '../../../res/constants/maps';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import {ShareButton} from '../../../res/UniversalComponents/Button';
import { ScrollView } from 'react-native-gesture-handler';
import { KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native';
import shareGoods from '../../../res/images/ModulesImages/GoodsSharingImages/shareGoods.png'

import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from 'res/constants/Colors.js';

const Component = ({onSelectItem, title}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [pickupLocation, setPickupLocation] = useState(null);
  const [viewMarker, setViewMarker] = useState(true);

  const [region, setRegion] = useState({ latitude: 48.8152937, longitude: 2.4597668});

  const homePlace = {
    data:{
      description: 'Home',
    },
    details:{
      geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }, 
    }
  };
  const workPlace = {
    data:{
      description: 'Home',
    },
    details:{
      geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }, 
    }

  };

  const setLocation = () => {

    if(pickupLocation === null){
      console.warn('Please Select Location')
    }
    else{

      setViewMarker(false);
      setModalVisible(false);
      onSelectItem(pickupLocation);
    }
  };

    
    return(
      <KeyboardAvoidingView keyboardShouldPersistTaps="handled">
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
          <View style={styles.container}>
            <TextInputTitleText>{title}</TextInputTitleText>
            {pickupLocation && (
              <View style={{height: 20}}>
                <BodyTextLight>{pickupLocation.data.description}</BodyTextLight>
              </View>
            )}
              <View style={styles.locationContainer}>
                <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                  latitude: region.latitude,
                  longitude: region.longitude,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121,
                }}               
              >
              {viewMarker ?
                <Marker
                coordinate={{ 
                  latitude: region.latitude,
                  longitude: region.longitude,
                }}>

                  <Ionicons name="ellipse-outline" color={Colors.Primary} size={50} />
                </Marker>
              :
              <Marker
                  coordinate={{ 
                    latitude : pickupLocation.details.geometry.location.lat, 
                    longitude :  pickupLocation.details.geometry.location.lng 
                  }}
                />
              }
              </MapView>
              
              
            </View>

          </View>
      </TouchableWithoutFeedback>
      <Modal
        visible={modalVisible}
        animationType="slide"
        keyboardShouldPersistTaps="handled">
        <View
          style={styles.setLocationContainer}
          keyboardShouldPersistTaps="handled">
          <GooglePlacesAutocomplete
            placeholder="Where From?"
            onPress={(data, details = null) => {
              setPickupLocation({data, details});
              setRegion({latitude: details.geometry.location.lat, longitude: details.geometry.location.lng});

            }
            }

            keyboardShouldPersistTaps="always"
            fetchDetails
            enablePoweredByContainer={true}
            query={{
              key: 'AIzaSyAIzLQ2mPeFCSvf4qMTZwN5KyIUBpAexuc',
              language: 'en',
              // components: 'country:pakistan',
            }}
            // predefinedPlaces={[homePlace, workPlace]}
            styles={{
              textInput: styles.textInput,
            }}
          />
          <View style={styles.buttonStyles}>
            <Button title="Set Location" onPress={() => setLocation()}></Button>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>

  );
};
export default Component;
