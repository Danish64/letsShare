import React, {useEffect, useState} from 'react';
import {FlatList, View, Text} from 'react-native';
import styles from './styles';
import {useIsFocused} from '@react-navigation/native';
import {doPost} from '../../../../../utils/AxiosMethods';
import {useSelector} from 'react-redux';
import IllustrationContainer from '../../../../../components/GeneralComponents/IllustrationContainer';
import Illustration from 'res/images/ModulesImages/GeneralImages/empty.png';
import {ButtonTextLightGrey} from 'res/UniversalComponents/Text.js';
import LoadingIndicator from '../../../../../components/GeneralComponents/LoadingIndicator';
import EventsItem from './EventsItem';
import ListItemDeleteAction from '../../../../../components/GeneralComponents/ListItemDeleteAction';
const Component = ({navigation}) => {
  const state = useSelector((state) => state);
  const userId = state.userInformation.user._id;

  const isFocused = useIsFocused();

  useEffect(() => {
    getEvents();
  }, [isFocused]);

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  const getEvents = async () => {
    setLoading(true);
    const data = {
      userId: userId,
    };
    const result = await doPost('v1/events/getAllEvents', data);
    const allEvents = result.data.map((item, index) => {
      item.key = index;
      return item;
    });
    setTimeout(() => {
      setLoading(false);
      setEvents(allEvents);
    }, 2000);
  };

  const listEmptyComponent = () => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 100,
        }}>
        <IllustrationContainer
          style={{width: 300, height: 300}}
          illustration={Illustration}
        />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 60,
          }}>
          <ButtonTextLightGrey>No ongoing events.</ButtonTextLightGrey>
        </View>
      </View>
    );
  };

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <LoadingIndicator />
      </View>
    );
  }

  return (
    <View style={{width: '100%', height: '100%'}}>
      <FlatList
        data={events}
        ListEmptyComponent={listEmptyComponent}
        renderItem={({item}) => (
          <EventsItem
            item={item}
            onPress={() => {
              console.log('To Events Details');
              // navigation.navigate('BookingRequestsScreen', {item: item});
            }}
            renderRightAction={() => (
              <ListItemDeleteAction onPress={() => console.log('Delete')} />
            )}
          />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={styles.FlatListStyle}
      />
    </View>
  );
};

export default Component;
