// import React from 'react';
// import {
//   HeadingText,
//   ShareActionAreaHeadingText,
// } from 'res/UniversalComponents/Text.js';
// import TextImageContainer from '../../../GeneralComponents/TextImageContainer';
// import styles from './style';
// import {View, TouchableOpacity, Text} from 'react-native';
// import DonateGoods from 'res/images/DummyImages/DonateGoods.jpeg';
// import SellGoods from 'res/images/DummyImages/SellGoods.jpeg';

// //Native Exports Ends Here
// //Third Party Exports Starts

// //Third Party Exports Ends

// const Component = ({navigation}) => {
//   //to use styles -> {styles.propertyName}
//   return (
//     <View style={styles.availRideComponentArea}>
//       {/* <View style={styles.availRideTitleText}>
//         <ShareActionAreaHeadingText>Avail Goods</ShareActionAreaHeadingText>
//       </View> */}
//       <TextImageContainer 
//       text="Share Goods" 
//       image={DonateGoods} 
//       onPress={() => navigation.navigate('GoodsShareStack')}/>

//       <TextImageContainer
//         text="Share Food"
//         image={SellGoods}
//         onPress={() => navigation.navigate('FoodShareStack')}/>

//     </View>
//   );
// };

// export default Component;






import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {
  HeadingText,
  GroupLabelText,
  BodyTextBlack,
  BodyTextBold,
  SectionHeadingText,
} from 'res/UniversalComponents/Text.js';
import styles from './style';
import HomeMenuIcon from '../../../Icons/HomeMenuIcon';
//Native Exports Ends Here

const Component = ({navigation}) => {

  
  const CardTitle = ({title}) => {
    return (
      <View style={styles.cardTitle}>
        <BodyTextBold>{title}</BodyTextBold>
      </View>
    );
  };
  const ShareAssetCard = ({iconName, cardTitle, onPress}) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={styles.shareAssetCardContainer}>
        <HomeMenuIcon name={iconName} />
        <CardTitle title={cardTitle} />
      </TouchableOpacity>
    );
  };
  const ShareAssetRow = ({
    firstCardIconName,
    secondCardIconName,
    firstCardTitle,
    secondCardTitle,
  }) => {
    return (
      <View style={styles.shareAssetRowContainer}>
        <ShareAssetCard
          iconName={firstCardIconName}
          cardTitle={firstCardTitle}
          onPress={() => navigation.navigate('GoodsShareStack')}
        />
        <ShareAssetCard
          iconName={secondCardIconName}
          cardTitle={secondCardTitle}
          onPress={() => navigation.navigate('FoodShareStack')}
        />
      </View>
    );
  };
  //to use styles -> {styles.propertyName}
  return (
    <View style={styles.shareAssetComponentArea}>
      {/* <View style={styles.shareAssetTitleText}>
        <SectionHeadingText>Share Utilities</SectionHeadingText>
      </View> */}
      <ShareAssetRow
        firstCardTitle="Share Goods"
        firstCardIconName="cart-outline"
        secondCardTitle="Share Food"
        secondCardIconName="fast-food-outline"
      />
    </View>
  );
};

export default Component;
