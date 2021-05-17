import React, {useEffect, useRef, useState} from 'react';
import {View, Image, TouchableOpacity, Text, Button} from 'react-native';

//Native Exports Ends Here
//Third Party Exports Starts
import {
  ShareActionAreaHeadingText,
  SectionHeadingText,
  ButtonTextLightGrey,
} from 'res/UniversalComponents/Text.js';

import HorizontalScrollViewContainer from 'res/UniversalComponents/HorizontalScrollViewContainer';
import LoadingIndicator from '../../../../GeneralComponents/LoadingIndicator';

import {
  CategoryOutlinedButton,
  PrimaryButton,
  AddAssetButton,
  SelectSpaceButton,
  OutlinedActionIconButton,
} from 'res/UniversalComponents/Button.js';

import styles from './styles';
import ShareRide from 'res/images/ModulesImages/RideSharingImages/ShareRide.png';
import Choose from 'res/images/ModulesImages/GeneralImages/noData.png';
import {useIsFocused} from '@react-navigation/native';
import {
  doGet,
  doGetCustom,
  doGetWithTokenInHeader,
  doPost,
} from '../../../../../utils/AxiosMethods';

import {useSelector} from 'react-redux';

//Third Party Exports Ends

const Component = ({navigation}) => {
  const state = useSelector((state) => state);
  const ownerId = state.userInformation.user._id;

  const [data, setData] = useState();
  const [view, setView] = useState(false);
  const [item, setItem] = useState({});

  const isFocused = useIsFocused();

  useEffect(() => {
    const getSpaces = async () => {
      const data = {
        ownerId: ownerId,
      };
      const result = await doPost('v1/userSpaces/getUserSpaces', data);

      const spaces = result.data.map((item, index) => {
        item.key = index;
        item.selected = false;
        return item;
      });
      setData(spaces);
    };
    getSpaces();
    renderItems();
    setView(false);
  }, [isFocused]);

  const renderItems = () => {
    return data?.map((item, index) => {
      return (
        <View key={index}>
          <SelectSpaceButton
            onPress={() => selectItem(item._id, item.selected)}
            selected={item.selected}
            title={item.spaceTitle}
            assetName={item.spaceTitle}
          />
        </View>
      );
    });
  };

  const selectItem = (selectedId, selection) => {
    const newData = [
      ...data.map((item) => {
        if (selectedId === item._id) {
          if (selection === true) {
            setView(false);
            return {
              ...item,
              selected: false,
            };
          } else {
            setView(true);
            setItem(item);
            return {
              ...item,
              selected: true,
            };
          }
        } else {
          return {
            ...item,
            selected: false,
          };
        }
      }),
    ];
    setData(newData);
  };

  const addButton = () => {
    return (
      <AddAssetButton
        onPress={(DATA) => navigation.navigate('AddSpace')}
        iconName="add-circle-outline"
        addButton
        assetName="Add"></AddAssetButton>
    );
  };

  if (!data) {
    return <LoadingIndicator />;
  }
  return (
    <>
      {view ? (
        <View style={styles.selectRideArea}>
          <View style={styles.selectRideTitleText}>
            <ShareActionAreaHeadingText>
              Select Space
            </ShareActionAreaHeadingText>
          </View>
          <View style={styles.mainContainer}>
            <HorizontalScrollViewContainer>
              <View style={styles.itemContainer}>
                {renderItems()}
                {addButton()}
              </View>
            </HorizontalScrollViewContainer>
          </View>

          <View style={styles.selectRideTypeArea}>
            <View style={styles.selectRideTypeText}>
              <SectionHeadingText>Select Space Type</SectionHeadingText>
            </View>
            <CategoryOutlinedButton
              iconName="arrow-forward-outline"
              onPress={
                () => console.log('Residence Space')
                // navigation.navigate('NearbyRideScreen', {item: item})
              }>
              Share Residence Space
            </CategoryOutlinedButton>
            <CategoryOutlinedButton
              iconName="arrow-forward-outline"
              onPress={() => console.log('Working Space')}>
              Share Working Space
            </CategoryOutlinedButton>
            <CategoryOutlinedButton
              iconName="arrow-forward-outline"
              onPress={() => console.log('Parking Space')}>
              Share Parking Space
            </CategoryOutlinedButton>
            <CategoryOutlinedButton
              iconName="arrow-forward-outline"
              onPress={() => console.log('Storage Space')}>
              Share Storage Space
            </CategoryOutlinedButton>
            <CategoryOutlinedButton
              iconName="arrow-forward-outline"
              onPress={() => console.log('Event Space')}>
              Share Event Space
            </CategoryOutlinedButton>
          </View>
        </View>
      ) : (
        <View style={styles.selectRideArea}>
          <View style={styles.mySharedRides}>
            <OutlinedActionIconButton
              iconName="md-pencil"
              onPress={() => console.log('My Spaces')}>
              My Shared Spaces
            </OutlinedActionIconButton>
          </View>

          <View style={styles.selectRideTitleText}>
            <ShareActionAreaHeadingText>Select Ride</ShareActionAreaHeadingText>
          </View>
          <View style={styles.scrollViewContainer}>
            <HorizontalScrollViewContainer>
              <View style={styles.itemContainer}>
                {renderItems()}
                {addButton()}
              </View>
            </HorizontalScrollViewContainer>
          </View>

          <View style={styles.pngImageArea}>
            <Image
              resizeMode="contain"
              source={Choose}
              style={styles.imageContainer}
            />
          </View>
          <View style={styles.rideNotSelectedText}>
            <ButtonTextLightGrey>
              You have not selected any space
            </ButtonTextLightGrey>
          </View>
        </View>
      )}
    </>
  );
};

export default Component;
