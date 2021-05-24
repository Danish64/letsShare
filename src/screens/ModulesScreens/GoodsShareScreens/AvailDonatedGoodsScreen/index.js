import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import Container from '../../../../res/UniversalComponents/Container';
import Header from '../../../../components/GeneralComponents/Header';
import AvailDonatedGoodsList from '../../../../components/ScreensMainComponents/GoodsShareComponents/AvailDonatedGoodsList';
import {doGet, doPost, doPostWithoutBody} from '../../../../utils/AxiosMethods';
import {useSelector} from 'react-redux';

const Component = ({navigation, route}) => {
  const userId = useSelector((state) => state.userInformation.user._id);
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchDonatedGoods();
  }, []);

  const fetchDonatedGoods = async () => {
    let data = {
      userId: userId,
    };
    const result = await doPost('v1/goodShares/getAllGoodShares', data);
    filteredData = result.data.filter((item) => item.shareType == 'donate');
    setData(filteredData);
  };

  return (
    <Container>
      <Header title="Avail Donated Goods" hasBackIcon navigation={navigation} />
      <AvailDonatedGoodsList navigation={navigation} data={data} />
    </Container>
  );
};

export default Component;
