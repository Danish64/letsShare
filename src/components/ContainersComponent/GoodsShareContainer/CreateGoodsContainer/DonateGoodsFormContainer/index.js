import React from 'react';
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer.js';
import DonateGoodsFormArea from '../../../../ScreensMainComponents/GoodsShareComponents/DonateGoodsFormArea';

const Component = ({navigation, data}) => {
  //console.log('RideShareContainer', navigation);
  return (
    <ScrollViewContainer>
      <DonateGoodsFormArea navigation={navigation} Data={data}/>
    </ScrollViewContainer>
  );
};

export default Component;
