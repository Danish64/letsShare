import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import AvailRidesList from '../../../GeneralComponents/AvailRidesList';
import {doGet, doPost, doPostWithoutBody} from '../../../../utils/AxiosMethods';
import {useSelector} from 'react-redux';

const Component = ({navigation}) => {
  const userId = useSelector((state) => state.userInformation.user._id);
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchTourRides();
  }, []);

  const fetchTourRides = async () => {
    let data = {
      userId: userId,
    };
    const result = await doPost('v1/tourRideShares/getAllTourRides', data);
    setData(result.data);
  };
  return (
    <AvailRidesList
      listFor="AvailTourRide"
      data={data}
      navigation={navigation}
      //screen="RecentlySharedRideScreen"
    />
  );
};
export default Component;
