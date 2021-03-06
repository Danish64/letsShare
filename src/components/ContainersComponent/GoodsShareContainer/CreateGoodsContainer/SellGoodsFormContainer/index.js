import React from 'react';
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer.js';
import SellGoodsFormArea from '../../../../ScreensMainComponents/GoodsShareComponents/SellGoodsFormArea';

const Component = ({navigation, data}) => {
  //console.log('RideShareContainer', navigation);
  return (
    <ScrollViewContainer>
        <SellGoodsFormArea navigation={navigation} Data={data}/>
    </ScrollViewContainer>
  );
};

export default Component;
