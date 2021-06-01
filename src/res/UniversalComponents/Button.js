import React from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import styles from 'res/styles/index.styles.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  ButtonTextBlack,
  ButtonTextWhite,
  ButtonTextLightGrey,
  TextButton as ButtonText,
} from 'res/UniversalComponents/Text.js';
import {Colors} from 'res/constants/Colors.js';
import {Text} from 'react-native';
import {BodyTextLight} from './Text';
import style from '../../screens/ModulesScreens/EventsScreens/EventDetails/style';
export const PrimaryButton = (props) => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={styles.buttonPrimary}>
      <ButtonTextWhite>{props.children}</ButtonTextWhite>
    </View>
  </TouchableOpacity>
);
export const PrimaryButtonWhite = (props) => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={styles.buttonPrimaryWhite}>
      <ButtonTextBlack>{props.children}</ButtonTextBlack>
    </View>
  </TouchableOpacity>
);
export const PrimaryButtonDarkGrey = (props) => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={styles.buttonPrimaryDarkGrey}>
      <ButtonTextWhite>{props.children}</ButtonTextWhite>
    </View>
  </TouchableOpacity>
);

export const LandscapeButtonBlack = (props) => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={styles.buttonLandscapeBlack}>
      <ButtonTextWhite>{props.children}</ButtonTextWhite>
    </View>
  </TouchableOpacity>
);
export const LandscapeButtonPrimary = (props) => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={styles.buttonLandscapePrimary}>
      <ButtonTextWhite>{props.children}</ButtonTextWhite>
    </View>
  </TouchableOpacity>
);
export const LandscapeImageButtonWhite = ({icon, ...props}) => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={styles.buttonLandscapeImageWhite}>
      <Image source={icon} style={styles.socialIconStyle} />
      <ButtonTextBlack>{props.children}</ButtonTextBlack>
    </View>
  </TouchableOpacity>
);

export const OutlinedButton = (props) => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={styles.buttonOutlined}>
      <TextButton>{props.children}</TextButton>
    </View>
  </TouchableOpacity>
);
export const CategoryOutlinedButton = (props) => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={styles.categoryButtonOutlined}>
      <ButtonTextBlack>{props.children}</ButtonTextBlack>
      <Ionicons name={props.iconName} color={Colors.Black} size={30} />
    </View>
  </TouchableOpacity>
);

export const TextButton = (props) => (
  <TouchableOpacity onPress={props.onPress}>
    <ButtonText>{props.children}</ButtonText>
  </TouchableOpacity>
);

export const PrimaryIconButton = (props) => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={styles.buttonIconPrimary}>
      <Ionicons name={props.iconName} color={Colors.White} size={30} />
      <ButtonTextWhite>{props.children}</ButtonTextWhite>
    </View>
  </TouchableOpacity>
);

export const OutlinedActionIconButton = (props) => (
  <TouchableOpacity
    style={styles.buttonActionIconOutlined}
    onPress={props.onPress}>
    <Ionicons
      name={props.iconName}
      color={Colors.Black}
      size={30}
      style={styles.buttonIconMargin}
    />
    <ButtonTextBlack>{props.children}</ButtonTextBlack>
  </TouchableOpacity>
);

export const SelectRideButton = ({
  iconName,
  assetName,
  onPress,
  selected,
  addButton,
}) => (
  <TouchableOpacity onPress={onPress}>
    <View
      style={selected ? styles.addAssetButtonActive : styles.addAssetButton}>
      <View style={styles.addAssetButtonCheckMark}>
        {addButton ? null : (
          <Ionicons
            name={selected ? 'checkmark-circle' : 'ellipse-outline'}
            size={25}
            color={selected ? Colors.Primary : Colors.BackGroundGrey}
          />
        )}
      </View>
      <MaterialCommunityIcon
        name={iconName === 'Bike' ? 'motorbike' : 'car'}
        color={selected ? Colors.Black : Colors.LightGrey}
        size={40}
      />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        {selected ? (
          <ButtonTextBlack>{assetName}</ButtonTextBlack>
        ) : (
          <ButtonTextLightGrey>{assetName}</ButtonTextLightGrey>
        )}
      </View>
    </View>
  </TouchableOpacity>
);

export const AssetButtonEvent = ({
  iconName,
  assetName,
  onPress,
  selected,
  addButton,
  MaterialIcon,
  rideTitle,
  spaceTitle,
  goodsTitle,
  foodTitle,
  title,
  item,
  assetType,
}) => (
  <TouchableOpacity onPress={onPress}>
    <View
      style={selected ? styles.addAssetButtonActive : styles.addAssetButton}>
      <View style={styles.addAssetButtonCheckMark}>
        {addButton ? null : (
          <Ionicons
            name={selected ? 'checkmark-circle' : 'ellipse-outline'}
            size={25}
            color={selected ? Colors.Primary : Colors.BackGroundGrey}
          />
        )}
      </View>
      <MaterialCommunityIcon
        name={iconName}
        color={selected ? Colors.Black : Colors.LightGrey}
        size={40}
      />

      {assetName && selected ? (
        <ButtonTextBlack>{assetName}</ButtonTextBlack>
      ) : (
        <ButtonTextLightGrey>{assetName}</ButtonTextLightGrey>
      )}

      {rideTitle && selected ? (
        <ButtonTextBlack>{rideTitle}</ButtonTextBlack>
      ) : (
        <ButtonTextLightGrey>{rideTitle}</ButtonTextLightGrey>
      )}

      {spaceTitle && selected ? (
        <ButtonTextBlack>{spaceTitle}</ButtonTextBlack>
      ) : (
        <ButtonTextLightGrey>{spaceTitle}</ButtonTextLightGrey>
      )}
    </View>
  </TouchableOpacity>
);

export const SelectSpaceButton = ({
  iconName,
  assetName,
  onPress,
  selected,
  addButton,
}) => (
  <TouchableOpacity onPress={onPress}>
    <View
      style={selected ? styles.addAssetButtonActive : styles.addAssetButton}>
      <View style={styles.addAssetButtonCheckMark}>
        {addButton ? null : (
          <Ionicons
            name={selected ? 'checkmark-circle' : 'ellipse-outline'}
            size={25}
            color={selected ? Colors.Primary : Colors.BackGroundGrey}
          />
        )}
      </View>
      <MaterialCommunityIcon
        name="home-modern"
        color={selected ? Colors.Black : Colors.LightGrey}
        size={40}
      />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        {selected ? (
          <ButtonTextBlack>{assetName}</ButtonTextBlack>
        ) : (
          <ButtonTextLightGrey>{assetName}</ButtonTextLightGrey>
        )}
      </View>
    </View>
  </TouchableOpacity>
);

export const AddAssetButton = ({
  iconName,
  assetName,
  onPress,
  selected,
  addButton,
  MaterialIcon,
}) => (
  <TouchableOpacity onPress={onPress}>
    <View
      style={selected ? styles.addAssetButtonActive : styles.addAssetButton}>
      <View style={styles.addAssetButtonCheckMark}>
        {addButton ? null : (
          <Ionicons
            name={selected ? 'checkmark-circle' : 'ellipse-outline'}
            size={25}
            color={selected ? Colors.Primary : Colors.BackGroundGrey}
          />
        )}
      </View>
      <Ionicons
        name={iconName}
        color={selected ? Colors.Black : Colors.LightGrey}
        size={40}
      />
      {selected ? (
        <ButtonTextBlack>{assetName}</ButtonTextBlack>
      ) : (
        <ButtonTextLightGrey>{assetName}</ButtonTextLightGrey>
      )}
    </View>
  </TouchableOpacity>
);

export const GoodsIconButton = (props) => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={styles.addAssetButton}>
      <View style={styles.addAssetIconArea}>
        <Ionicons name={props.iconName} color={Colors.Black} size={40} />
      </View>
      <View style={styles.addAssetTextArea}>
        <ButtonTextBlack>{props.children}</ButtonTextBlack>
      </View>
      <Ionicons
        name={iconName}
        color={selected ? Colors.Black : Colors.LightGrey}
        size={40}
      />
      {selected ? (
        <ButtonTextBlack>{assetName}</ButtonTextBlack>
      ) : (
        <ButtonTextLightGrey>{assetName}</ButtonTextLightGrey>
      )}
    </View>
  </TouchableOpacity>
);

export const StepperButton = (props) => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={styles.stepperButton}>
      <View style={styles.stepperIconArea}>
        <Ionicons name={props.iconName} color={Colors.Black} size={15} />
      </View>
    </View>
  </TouchableOpacity>
);

export const AddImageButton = (props) => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={styles.addImageButton}>
      <View style={styles.addImageIconArea}>
        <Ionicons name={props.iconName} color={Colors.Primary} size={50} />
        {/* <Ionicons name='add-outline' color={Colors.Primary} size={20} /> */}
      </View>
    </View>
  </TouchableOpacity>
);

export const ShareButton = (props) => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={styles.shareButton}>
      <View style={styles.shareIconArea}>
        <Ionicons name={props.iconName} color={props.color} size={25} />
      </View>
    </View>
  </TouchableOpacity>
);
