import React, {useState} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';
import {Colors} from 'res/constants/Colors';
import {
  SectionHeadingText,
  TextInputTitleText,
  AvailCategoryTextGrey,
} from 'res/UniversalComponents/Text.js';

import {LandscapeButtonBlack} from 'res/UniversalComponents/Button.js';
import PickerItem from '../Picker/PickerItem';
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer.js';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({
  navigation,
  heading,
  icon,
  item,
  onSelectItem,
  selectedItem,
  placeholder,
  ...otherProps
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  //const [selectedCategory, setSelectedCategory] = useState({});
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <Ionicons
              name={icon}
              size={20}
              color={Colors.MediumGrey}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <View style={styles.text}>
              <TextInputTitleText>{selectedItem.label}</TextInputTitleText>
            </View>
          ) : (
            <View style={styles.placeholder}>
              <TextInputTitleText>{placeholder}</TextInputTitleText>
            </View>
          )}
          <Ionicons
            name="chevron-down-outline"
            size={20}
            color={Colors.MediumGrey}
          />
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalHeading}>
          <AvailCategoryTextGrey>{heading}</AvailCategoryTextGrey>
        </View>
        <FlatList
          data={item}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({item}) => (
            <PickerItem
              item={item}
              label={item.label}
              onPress={() => {
                setModalVisible(false);
                onSelectItem(item);
              }}
            />
          )}
        />
      </Modal>
    </>
  );
};

export default Component;
