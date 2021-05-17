import React from 'react';
import Container from 'res/UniversalComponents/Container.js';
import Header from '../../../../components/GeneralComponents/Header';
import {ScrollView, View, Text} from 'react-native';
import CreateRideContainer from '../../../../components/ContainersComponent/RideShareContainer/CreateRideContainer';
import {useNavigation, useRoute} from '@react-navigation/native';
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer.js';
import CreateSpaceShareAction from '../../../../components/ScreensMainComponents/SpaceShareComponents/ShareSpaceActionArea/CreateSpaceShare';
const Component = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Header navigation={navigation} hasBackIcon title="Share Space" />
      <ScrollViewContainer>
        <CreateSpaceShareAction navigation={navigation} />
      </ScrollViewContainer>
    </Container>
  );
};

export default Component;
