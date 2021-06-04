import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Container from 'res/UniversalComponents/Container.js';
import Header from '../../../../components/GeneralComponents/Header';
import AvailSpacesList from '../../../../components/GeneralComponents/SpaceListComponents/AvailSpacesList';

import {doGet, doPost, doPostWithoutBody} from '../../../../utils/AxiosMethods';
import {useSelector} from 'react-redux';

const Component = ({navigation}) => {
  useEffect(() => {
    fetchRecentlySharedSpaces();
  }, []);

  const userId = useSelector((state) => state.userInformation.user._id);
  const [availableResidenceSpaces, setAvailableResidenceSpaces] = useState(
    null,
  );

  const fetchRecentlySharedSpaces = async () => {
    let data = {
      userId: userId,
    };
    const result = await doPost(
      'v1/residenceSpaceShares/getAllResidenceSpaces',
      data,
    );
    setAvailableResidenceSpaces(result.data);
  };

  return (
    <Container>
      <Header
        title="Avail Residence Space"
        navigation={navigation}
        hasBackIcon
      />
      <AvailSpacesList
        navigation={navigation}
        data={availableResidenceSpaces}
      />
    </Container>
  );
};

export default Component;
