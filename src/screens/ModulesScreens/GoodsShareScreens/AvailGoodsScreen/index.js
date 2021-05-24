import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import Container from '../../../../res/UniversalComponents/Container';
import Header from '../../../../components/GeneralComponents/Header';
import AvailGoodsList from '../../../../components/ScreensMainComponents/GoodsShareComponents/AvailGoodsList';
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
    filteredData = result.data.filter((item) => item.shareType == 'sell');
    setData(filteredData);
  };
  return (
    <Container>
      <Header title="Avail Goods" hasBackIcon navigation={navigation} />
      <AvailGoodsList navigation={navigation} data={data} />
    </Container>
  );
};

export default Component;
