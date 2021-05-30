import React, {useState, useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {View, Text} from 'react-native';
import Container from 'res/UniversalComponents/Container.js';
import Header from '../../../../components/GeneralComponents/Header';
import {useIsFocused} from '@react-navigation/native';
import {doPost} from '../../../../utils/AxiosMethods';
import {useSelector} from 'react-redux';
import SharedSpacesList from '../../../../components/GeneralComponents/SpaceListComponents/SharedSpacesList';

const Component = ({navigation}) => {
  const state = useSelector((state) => state);
  const sharerId = state.userInformation.user._id;

  const isFocused = useIsFocused();
  const route = useRoute();

  useEffect(() => {
    getUserAllSpaces();
  }, [isFocused]);

  const [userAllSpaces, setUserAllSpaces] = useState();
  const getUserAllSpaces = async () => {
    const data = {
      sharerId: sharerId,
    };
    const result = await doPost(
      'v1/residenceSpaceShares/getUserResidenceSpaceShares',
      data,
    );
    const allSharedSpaces = result.data.map((item, index) => {
      item.key = index;
      return item;
    });
    setUserAllSpaces(allSharedSpaces);
  };

  return (
    <Container>
      <Header title="My Shared Spaces" navigation={navigation} hasBackIcon />
      <SharedSpacesList navigation={navigation} data={userAllSpaces} />
    </Container>
  );
};

export default Component;
