// Example of Image Picker in React Native
// https://aboutreact.com/example-of-image-picker-in-react-native/

// Import React
import React, {useState} from 'react';
// Import required components
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
  PermissionsAndroid,
  Modal
} from 'react-native';

// Import Image Picker
// import ImagePicker from 'react-native-image-picker';
import {
  launchCamera,
  launchImageLibrary
} from 'react-native-image-picker';
import styles from './style';
import {AddImageButton} from '../../../res/UniversalComponents/Button';
import {SubtitleTextBlack} from '../../../res/UniversalComponents/Text';

const Component = ({onSelectItem, navigation, ...otherProps}) => {
    const [filePath, setFilePath] = useState({});
    const [busy, setbusy] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);

    const requestCameraPermission = async () => {
      if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: 'Camera Permission',
              message: 'App needs camera permission',
            },
          );
          // If CAMERA Permission is granted
          return granted === PermissionsAndroid.RESULTS.GRANTED;
        } catch (err) {
          console.warn(err);
          return false;
        }
      } else return true;
    };
  
    const requestExternalWritePermission = async () => {
      if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
              title: 'External Storage Write Permission',
              message: 'App needs write permission',
            },
          );
          // If WRITE_EXTERNAL_STORAGE Permission is granted
          return granted === PermissionsAndroid.RESULTS.GRANTED;
        } catch (err) {
          console.warn(err);
          alert('Write permission err', err);
        }
        return false;
      } else return true;
    };
  
    const captureImage = async (type) => {
      let options = {
        mediaType: type,
        maxWidth: 500,
        maxHeight: 500,
        quality: 1,
        // videoQuality: 'low',
        // durationLimit: 30, //Video max duration in seconds
        saveToPhotos: true,
      };
      let isCameraPermitted = await requestCameraPermission();
      let isStoragePermitted = await requestExternalWritePermission();
      if (isCameraPermitted && isStoragePermitted) {
        launchCamera(options, (response) => {
          console.log('Response = ', response);
  
          if (response.didCancel) {
            alert('User cancelled camera picker');
            return;
          } else if (response.errorCode == 'camera_unavailable') {
            alert('Camera not available on device');
            return;
          } else if (response.errorCode == 'permission') {
            alert('Permission not satisfied');
            return;
          } else if (response.errorCode == 'others') {
            alert(response.errorMessage);
            return;
          }
          console.log('base64 -> ', response.base64);
          console.log('uri -> ', response.uri);
          console.log('width -> ', response.width);
          console.log('height -> ', response.height);
          console.log('fileSize -> ', response.fileSize);
          console.log('type -> ', response.type);
          console.log('fileName -> ', response.fileName);
          setFilePath(response);
          onSelectItem(response);
          console.log(response);
          setbusy(false);
        });
      }
    };
  
    const chooseFile = (type) => {
      let options = {
        mediaType: type,
        maxWidth: 500,
        maxHeight: 550,
        quality: 1,
      };
      launchImageLibrary(options, (response) => {
        console.log('Response = ', response);
  
        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        console.log('base64 -> ', response.base64);
        console.log('uri -> ', response.uri);
        console.log('width -> ', response.width);
        console.log('height -> ', response.height);
        console.log('fileSize -> ', response.fileSize);
        console.log('type -> ', response.type);
        console.log('fileName -> ', response.fileName);
        setFilePath(response);
        onSelectItem(response);
        setbusy(false);
      });
    };
  
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          {
            busy ?
            <View>
            <AddImageButton 
              iconName='camera-outline'
              onPress={() => setModalVisible(true)} />
            </View>
            : 
            <Image
            source={{uri: filePath.uri}}
            style={styles.imageStyle}
          />
          }
        </View>
        <Modal visible={modalVisible} animationType="slide">
          <View style={styles.container}>
            <TouchableOpacity
              // activeOpacity={0.5}
              style={styles.buttonStyle}
              onPress={() => {
                  captureImage('photo');
                  setModalVisible(false);
                  
                  // onSelectItem({uri: filePath.uri});
                  }}>
              <SubtitleTextBlack>Open Camera</SubtitleTextBlack>
            </TouchableOpacity>
            <TouchableOpacity
              // activeOpacity={0.5}
              style={styles.buttonStyle}
              onPress={() => {
                  chooseFile('photo');
                  setModalVisible(false);
                  // onSelectItem(filePath.uri);
                  // onSelectItem({uri: filePath.uri});
                  }}>
              <SubtitleTextBlack>Choose from Gallary</SubtitleTextBlack>
            </TouchableOpacity>
            </View>
        </Modal>
        </View>
    );
};
export default Component;