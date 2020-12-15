import React from 'react';
import {
    SelectCategoryArea
} from '../../ScreensMainComponents/UtilitiesShareComponents';
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer.js';

const Component = ({navigation}) => {
  return (
    <ScrollViewContainer>
      <SelectCategoryArea navigation={navigation}/>
    </ScrollViewContainer>
  );
};

export default Component;
