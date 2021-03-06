import React, {useState} from 'react';
import styles from './style';
import {View, TouchableWithoutFeedback, Text, Modal, TouchableOpacity, Button, Image} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {TextInputTitleText} from '../../../res/UniversalComponents/Text';
import GOOGLE_API_KEY from '../../../res/constants/maps';
import MapView , {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {SubmitButton} from '../../../res/UniversalComponents/Forms';
import {ShareButton} from '../../../res/UniversalComponents/Button';
import { ScrollView } from 'react-native-gesture-handler';
import { KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native';

const Component = ({onSelectItem, title}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [pickupLocation, setPickupLocation] = useState(null); 
  const [viewMarker, setViewMarker] = useState(true);

  const homePlace = {
    description: 'Home',
    geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
  };
  const workPlace = {
    description: 'Work',
    geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
  };
  
  const setLocation = () => {
      setViewMarker(false);
      setModalVisible(false);
      onSelectItem(pickupLocation);
  };
  
  
    return(
      <KeyboardAvoidingView keyboardShouldPersistTaps="handled">
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
          <View style={styles.container}>
            <TextInputTitleText>{title}</TextInputTitleText>
              <View style={styles.locationContainer}>
                <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                  latitude: 33.738045,
                  longitude: 73.084488,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121,
                }}               
              >
              {viewMarker ?
                <Marker
                coordinate={{ 
                  latitude: 33.738045,
                  longitude: 73.084488,
                }}
              />
              :
              <Marker
                  coordinate={{ 
                    latitude : pickupLocation.details.geometry.location.lat, 
                    longitude :  pickupLocation.details.geometry.location.lng 
                  }}
                />
              }
              </MapView>
              {/* <Text>{JSON.stringify(pickupLocation)}</Text> */}
              
              
            </View>
          </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType="slide" keyboardShouldPersistTaps="handled">
          <View style={styles.setLocationContainer} keyboardShouldPersistTaps="handled">
          <GooglePlacesAutocomplete
            placeholder='Where From?'
            onPress={(data, details = null) => {
              setPickupLocation({data, details});
            }
            }
            keyboardShouldPersistTaps="always"
            
            fetchDetails
            enablePoweredByContainer= {true}
            query={{
                key: 'AIzaSyAIzLQ2mPeFCSvf4qMTZwN5KyIUBpAexuc',
                language: 'en',
                // components: 'country:pakistan',
            }}
            predefinedPlaces={[homePlace, workPlace]}
            styles={{
                textInput: styles.textInput,
            }}
            />
              <View style={styles.buttonStyles}>
              <Button title="Set Location" onPress={() => setLocation()} ></Button>
            </View>
          </View>
        </Modal>      
    </KeyboardAvoidingView>  
    
    );
};
export default Component;
