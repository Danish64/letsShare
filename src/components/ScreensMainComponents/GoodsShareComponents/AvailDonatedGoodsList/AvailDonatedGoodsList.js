import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import VerticalFlatList from '../../../GeneralComponents/VerticalFlatList';
import {Goods} from '../../../../res/constants/dummyData';
import {doGet, doPost, doPostWithoutBody} from '../../../../utils/AxiosMethods';
import {useSelector} from 'react-redux';
import AvailGoodsList from '../../../GeneralComponents/AvailGoodsList';

const Component = ({navigation}) => {
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
        setData(result.data);
    };
        return(
            // <View>
            //     <VerticalFlatList data={Goods} navigation={navigation} screen='RecentlySharedScreen'/>
            // </View>
            // <Text>{JSON.stringify(data)}</Text>
            // console.log(JSON.stringify(data))
            <AvailGoodsList
            listFor="AvailNearbyRide"
            data={data}
            navigation={navigation}
            // screen="RecentlySharedRideScreen"
          />
        )
}
export default Component;