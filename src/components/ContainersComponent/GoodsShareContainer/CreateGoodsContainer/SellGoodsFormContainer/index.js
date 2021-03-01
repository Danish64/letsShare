import React from 'react';
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer.js';
import SellGoodsFormArea from '../../../../ScreensMainComponents/GoodsShareComponents/SellGoodsFormArea';

const Component = ({navigation}) => {
  //console.log('RideShareContainer', navigation);
  return (
    <ScrollViewContainer>
        <SellGoodsFormArea navigation={navigation}/>
    </ScrollViewContainer>
  );
};

export default Component;
