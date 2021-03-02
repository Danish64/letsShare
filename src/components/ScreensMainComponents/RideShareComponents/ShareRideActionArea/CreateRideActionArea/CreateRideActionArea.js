import React, {useEffect, useState} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
//Native Exports Ends Here
//Third Party Exports Starts
import {
  ShareActionAreaHeadingText,
  SectionHeadingText,
} from 'res/UniversalComponents/Text.js';

import HorizontalScrollViewContainer from 'res/UniversalComponents/HorizontalScrollViewContainer';
import {AddAssetButton} from 'res/UniversalComponents/Button';

import {CategoryOutlinedButton} from 'res/UniversalComponents/Button.js';

import styles from './style';
//import ScrollViewList from '../../../GeneralComponents/ScrollViewList';
import ShareRide from 'res/images/ModulesImages/RideSharingImages/ShareRide.png';
import Choose from 'res/images/ModulesImages/GeneralImages/choose.png';

import {addRideDummyData} from 'res/constants/dummyData';

//Third Party Exports Ends

const Component = ({navigation}) => {
  const [data, setData] = useState(addRideDummyData);
  const [view, setView] = useState(false);
  const [item, setItem] = useState({});

  useEffect(() => {
    renderItems;
  }, [addButton]);

  // Render Goods
  const renderItems = () => {
    return data.map((item, index) => {
      return (
        <View key={index}>
          <AddAssetButton
            onPress={() => selectItem(item.id, item.selected)}
            selected={item.selected}
            iconName="car-outline"
            title={item.assetName}
            assetName={item.assetName}
          />
        </View>
      );
    });
  };

  const selectItem = (selectedId, selection) => {
    const newData = [
      ...data.map((item) => {
        if (selectedId === item.id) {
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
        onPress={(DATA) => navigation.navigate('AddGoodsScreen')}
        iconName="add-circle-outline"
        addButton
        assetName="Add"></AddAssetButton>
    );
  };

  return (
    <>
      {view ? (
        <View style={styles.selectRideArea}>
          {/* Select Goods Area */}

          <View style={styles.selectRideTitleText}>
            <ShareActionAreaHeadingText>Select Ride</ShareActionAreaHeadingText>
          </View>
          <View style={styles.mainContainer}>
            <HorizontalScrollViewContainer>
              <View style={styles.itemContainer}>
                {renderItems()}
                {addButton()}
              </View>
            </HorizontalScrollViewContainer>
          </View>

          {/* Select Share Type */}

          <View style={styles.selectRideTypeArea}>
            <View style={styles.selectRideTypeText}>
              <SectionHeadingText>Select Ride Type</SectionHeadingText>
            </View>
            <CategoryOutlinedButton
              iconName="arrow-forward-outline"
              onPress={
                () => console.log('Nearby Ride ')
                // navigation.navigate('DonateGoodsScreen', {item: item})
              }>
              Nearby Ride
            </CategoryOutlinedButton>
            <CategoryOutlinedButton
              iconName="arrow-forward-outline"
              onPress={
                () => console.log('City to City Ride ')
                // navigation.navigate('SellGoodsScreen', {item: item})
              }>
              City to City
            </CategoryOutlinedButton>
            <CategoryOutlinedButton
              iconName="arrow-forward-outline"
              onPress={
                () => console.log('Tour Ride ')
                // navigation.navigate('SellGoodsScreen', {item: item})
              }>
              Tour Ride
            </CategoryOutlinedButton>
          </View>

          <View style={styles.pngImageArea}>
            <Image
              resizeMode="contain"
              source={ShareRide}
              style={styles.imageContainer}
            />
          </View>
        </View>
      ) : (
        // Select Goods Type

        <View style={styles.selectRideArea}>
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
        </View>
      )}
    </>
  );
};

export default Component;

// Asad's Previous Code

// import React, {useState, useEffect} from 'react';
// import {View, Image, TouchableOpacity, Text} from 'react-native';

// import {
//   HeadingText,
//   GroupLabelText,
//   TextButton,
//   ShareActionAreaHeadingText,
//   SectionHeadingText,
// } from 'res/UniversalComponents/Text.js';
// import {CategoryOutlinedButton} from 'res/UniversalComponents/Button.js';

// import styles from './style';
// import ScrollViewList from '../../../../GeneralComponents/ScrollViewList';
// import ShareRide from 'res/images/ModulesImages/RideSharingImages/ShareRide.png';
// import {addRideDummyData} from 'res/constants/dummyData.js';

// import {AddAssetButton} from 'res/UniversalComponents/Button.js';
// import HorizontalScrollViewContainer from 'res/UniversalComponents/HorizontalScrollViewContainer.js';

// //Native Exports Ends Here
// //Third Party Exports Starts

// //Third Party Exports Ends

// const Component = ({navigation}) => {
//   const [userRides, setUserRides] = useState(addRideDummyData);

//   const [selectedRide, setSelectedRide] = useState('');
//   const [showRideTypeArea, setShowRideTypeArea] = useState(false);

//   const onSelectRide = (rideName) => {
//     setSelectedRide(rideName);
//     setShowRideTypeArea(true);
//     console.log(selectedRide);
//   };

//   return (
//     <View style={styles.createRideComponentArea}>
//       <View style={styles.createdRidesArea}>
//         <View style={styles.myRidesTitleText}>
//           <ShareActionAreaHeadingText>Select Ride</ShareActionAreaHeadingText>
//         </View>

//         <View style={styles.myRidesListArea}>
//           <ScrollViewList
//             icon="car-outline"
//             DATA={userRides}
//             navigation={navigation}
//             onSelectRide={onSelectRide}
//             navigateTo="AddRideScreen"
//           />
//         </View>
//       </View>
//       {showRideTypeArea && (
//         <View style={styles.selectRideTypeArea}>
//           <View style={styles.myRidesTitleText}>
//             <SectionHeadingText>Select Ride Type</SectionHeadingText>
//           </View>
//           <View style={styles.categoryButtonsArea}>
//             <CategoryOutlinedButton iconName="arrow-forward-outline">
//               Nearby Ride
//             </CategoryOutlinedButton>
//             <CategoryOutlinedButton iconName="arrow-forward-outline">
//               City to City Ride
//             </CategoryOutlinedButton>
//             <CategoryOutlinedButton iconName="arrow-forward-outline">
//               Tour Ride
//             </CategoryOutlinedButton>
//           </View>
//           <View style={styles.pngImageArea}>
//             <Image
//               resizeMode="contain"
//               source={ShareRide}
//               style={styles.imageContainer}
//             />
//           </View>
//         </View>
//       )}
//     </View>
//   );
// };

// export default Component;
