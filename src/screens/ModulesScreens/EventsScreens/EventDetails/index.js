import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Linking,
} from 'react-native';
import styles from './style';
import itemStyles from './itemStyles';
import {
  BodyTextBlack,
  BodyTextLightCenter,
  BodyTextBold,
  SubtitleTextBold,
  SubtitleText,
  CaptionText,
  CaptionTextPrimary,
  FormText,
  BodyTextLight,
  BodyText,
  RecentlySharedTitleText,
  RecentlySharedSubtitleText,
} from 'res/UniversalComponents/Text';
import {Colors} from 'res/constants/Colors.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {useNavigation, useRoute} from '@react-navigation/native';
import {PrimaryButton} from '../../../../res/UniversalComponents/Button';
import Container from 'res/UniversalComponents/Container';
import Header from '../../../../components/GeneralComponents/Header';
import {useSelector} from 'react-redux';
import {doPost} from '../../../../utils/AxiosMethods';
import {useIsFocused} from '@react-navigation/native';
import LoadingIndicator from '../../../../components/GeneralComponents/LoadingIndicator';

const Component = ({navigation}) => {
  const route = useRoute();
  const {item} = route.params;
  const imageURL = {uri: item.eventPictures[0]};

  const [eventShares, setEventShares] = useState([]);
  const [loading, setLoading] = useState(false);

  //   console.log('In event detail screen', item);
  const isFocused = useIsFocused();

  useEffect(() => {
    getEventShares();
  }, [isFocused]);

  const getEventShares = async () => {
    setLoading(true);
    let sharings = [];
    const data = {
      id: item._id,
    };
    const result = await doPost('v1/events/getEventShares', data);
    if (result.data && result.data.length > 0) {
      sharings = result.data.map((item, index) => {
        item.key = index;
        return item;
      });
    }

    setTimeout(() => {
      setLoading(false);
      setEventShares(sharings);
    }, 2000);
  };

  const EventSharingItem = ({item}) => {
    const linkingContactPlatform = (linkFor) => {
      let msg = 'From LetsShare:  ';
      let phoneWithCountryCode = item.sharerContact.substr(
        1,
        item.sharerContact.length,
      );

      let mobile = '+92' + phoneWithCountryCode;
      if (mobile) {
        if (linkFor == 'WhatsApp') {
          if (msg) {
            let url = 'whatsapp://send?text=' + msg + '&phone=' + mobile;
            Linking.openURL(url)
              .then((data) => {
                console.log('WhatsApp Opened');
              })
              .catch(() => {
                alert('Make sure WhatsApp installed on your device');
              });
          } else {
            alert('Please insert message to send');
          }
        }
        if (linkFor == 'SMS') {
          const separator = Platform.OS === 'ios' ? '&' : '?';
          let url = `sms:${mobile}${separator}body=${msg}`;
          Linking.openURL(url)
            .then((data) => {
              console.log('Phone Message Opened');
            })
            .catch(() => {
              alert('Failed');
            });
        }
        if (linkFor == 'Call') {
          let url = `tel:${mobile}`;
          Linking.openURL(url)
            .then((data) => {
              console.log('DialPad Opened');
            })
            .catch(() => {
              alert('Failed');
            });
        }
      } else {
        alert('Please insert mobile no');
      }
    };

    return (
      <View style={itemStyles.mainContainer}>
        <View
          style={{
            width: '80%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <BodyTextBold>{item.shareTitle}</BodyTextBold>
          <CaptionTextPrimary>{item.shareType}</CaptionTextPrimary>
        </View>
        <View style={{width: '80%', marginTop: 5}}>
          <CaptionText>{item.shareDescription}</CaptionText>
        </View>
        <View style={{width: '80%', marginTop: 5}}>
          <CaptionText>{item.shareCapacityDescription}</CaptionText>
        </View>

        <View style={{width: '80%', marginTop: 5, flexDirection: 'row'}}>
          <CaptionTextPrimary>Sharer Name: </CaptionTextPrimary>
          <CaptionTextPrimary>{item.sharerName}</CaptionTextPrimary>
        </View>

        <View style={{width: '90%', marginVertical: 5, alignItems: 'center'}}>
          <CaptionText>Contact Sharer</CaptionText>
        </View>
        <View style={itemStyles.contactView}>
          <TouchableOpacity onPress={() => linkingContactPlatform('Call')}>
            <Ionicons name="call" size={30} color={Colors.Primary} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => linkingContactPlatform('SMS')}>
            <Ionicons name="chatbox" size={30} color={Colors.Primary} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => linkingContactPlatform('WhatsApp')}>
            <Ionicons name="logo-whatsapp" size={30} color={Colors.Primary} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <Container>
      <Header title="event detail" hasBackIcon navigation={navigation} />
      <ScrollView>
        <View style={styles.mainContainer}>
          {item.eventPictures.length > 0 && (
            <View style={styles.imageContainer}>
              <Image source={imageURL} style={styles.image} />
            </View>
          )}

          <View style={styles.subContainer2}>
            {item.eventTitle && (
              <View style={styles.categoryTitleText}>
                <RecentlySharedTitleText>
                  {item.eventTitle}
                </RecentlySharedTitleText>
              </View>
            )}
            <View style={styles.rowSeparator} />

            {item.eventDescription && (
              <View style={styles.descriptionView}>
                <BodyTextBlack>{item.eventDescription}</BodyTextBlack>
              </View>
            )}

            {item.eventDuration && (
              <View style={styles.row}>
                <RecentlySharedSubtitleText>
                  Event Duration
                </RecentlySharedSubtitleText>
                <RecentlySharedSubtitleText>
                  {item.eventDuration}
                </RecentlySharedSubtitleText>
              </View>
            )}

            {item.eventStartDate && (
              <View style={styles.row}>
                <RecentlySharedSubtitleText>
                  Start Date
                </RecentlySharedSubtitleText>
                <RecentlySharedSubtitleText>
                  {item.eventStartDate}
                </RecentlySharedSubtitleText>
              </View>
            )}

            {item.eventEndDate && (
              <View style={styles.row}>
                <RecentlySharedSubtitleText>
                  End Date
                </RecentlySharedSubtitleText>

                <RecentlySharedSubtitleText>
                  {item.eventEndDate}
                </RecentlySharedSubtitleText>
              </View>
            )}

            <View style={styles.rowSeparator} />

            {item.eventLocation && (
              <View>
                <View style={styles.locationBody}>
                  <RecentlySharedTitleText>Event Venue</RecentlySharedTitleText>
                  <BodyTextBlack>{item.eventLocation.address}</BodyTextBlack>
                </View>
                <View style={styles.locationContainer}>
                  <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    region={{
                      latitude: parseFloat(item.eventLocation.latitude),
                      longitude: parseFloat(item.eventLocation.longitude),
                      latitudeDelta: 0.0922,
                      longitudeDelta: 0.0421,
                    }}>
                    <Marker
                      coordinate={{
                        latitude: parseFloat(item.eventLocation.latitude),
                        longitude: parseFloat(item.eventLocation.longitude),
                      }}
                    />
                  </MapView>
                </View>
              </View>
            )}
            {item.sharings.length > 0 ? (
              <View>
                <View style={styles.locationBody}>
                  <RecentlySharedTitleText>
                    Event Shares
                  </RecentlySharedTitleText>
                  <View style={{flex: 1, marginBottom: 10}}>
                    <FlatList
                      data={eventShares}
                      renderItem={({item}) => (
                        <EventSharingItem
                          item={item}
                          onPress={() => {
                            console.log('Callings');
                          }}
                        />
                      )}
                      keyExtractor={(item) => item.id}
                      showsVerticalScrollIndicator={false}
                      contentContainerStyle={{
                        width: '100%',
                        marginVertical: 20,
                      }}
                    />
                  </View>
                </View>
              </View>
            ) : (
              <View style={styles.locationBody}>
                <RecentlySharedTitleText>Event Shares</RecentlySharedTitleText>

                <BodyTextLightCenter>
                  Shares will be seen here
                </BodyTextLightCenter>
              </View>
            )}
          </View>
          <View style={styles.bookFoodButtonView}>
            <PrimaryButton
              onPress={() => {
                navigation.navigate('CreateEventSharings', {
                  data: item,
                });
              }}>
              Share for this event
            </PrimaryButton>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default Component;
