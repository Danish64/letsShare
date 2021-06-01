import React, {useState, useEffect} from 'react';
import {View, KeyboardAvoidingView, ScrollView, Text} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import styles from './style';
import {
  FormByFormik as Form,
  BaselineFormField as FormField,
  FormPicker,
  SubmitButton as SubmitForm,
  FormImagePicker,
} from 'res/UniversalComponents/Forms';
import {
  HeadingText,
  GroupLabelText,
  TextButton,
  ShareActionAreaHeadingText,
  SectionHeadingText,
  ButtonTextLightGrey,
} from 'res/UniversalComponents/Text.js';

import {
  AddAssetButton,
  SelectRideButton,
  AssetButtonEvent,
} from 'res/UniversalComponents/Button.js';
import {useSelector} from 'react-redux';
import {doPost} from '../../../../utils/AxiosMethods';
import Header from '../../../../components/GeneralComponents/Header';
import Container from 'res/UniversalComponents/Container';
import {useIsFocused} from '@react-navigation/native';
import HorizontalScrollViewContainer from '../../../../res/UniversalComponents/HorizontalScrollViewContainer';
import UserActivityClass from '../../../../utils/UserActivity';

//Third Party Exports Ends

const Component = ({navigation}) => {
  let UserActivity = new UserActivityClass();

  const isFocused = useIsFocused();
  const route = useRoute();

  const {data} = route.params;
  const shareId = data._id;

  const state = useSelector((state) => state);
  const user = state.userInformation.user;
  const ownerId = user._id;

  const [assetsData, setAssetsData] = useState();
  const [assetItem, setAssetItem] = useState({});
  const [assetTitle, setAssetTitle] = useState({});
  const [assetName, setAssetName] = useState({});

  const [view, setView] = useState(false);

  const [isLoading, setLoading] = useState(false);
  const [assetType, setAssetType] = useState('');

  useEffect(() => {
    UserActivity.mixpanel.identify(user.email);
    const eventInfo = {
      screen: 'Event Sharings',
      email: user.email,
    };
    UserActivity.mixpanel.track('Create Event Sharings', eventInfo);
    UserActivity.mixpanel.flush();
  }, []);

  const handleAssetSelection = (name) => {
    setAssetType(name);
  };

  const categories = [
    {label: 'Space', name: 'space', value: 1},
    {label: 'Ride', name: 'ride', value: 2},
    {label: 'Food', name: 'food', value: 3},
    {label: 'Goods', name: 'goods', value: 4},
  ];

  const updateAssetData = () => {
    if (assetType == 'space') {
      setAssetsData(spaceAssets);
    }
    if (assetType == 'ride') {
      setAssetsData(rideAssets);
    }
    if (assetType == 'goods') {
      setAssetsData(goodsAssets);
    }
    if (assetType == 'food') {
      setAssetsData(foodAssets);
    }
  };

  const getAssetName = () => {
    const assetNames = assetsData?.map(({title}) => title);
  };

  const renderItems = () => {
    if (assetsData?.length <= 0) {
      return (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 5,
          }}>
          <ButtonTextLightGrey>
            No Shareable Asset Available
          </ButtonTextLightGrey>
        </View>
      );
    }
    return assetsData?.map((item, index) => {
      return (
        <View key={index}>
          <AssetButtonEvent
            item={item}
            onPress={() => selectItem(item._id, item.selected)}
            selected={item.selected}
            iconName="hand-heart"
            spaceTitle={item.spaceTitle}
            rideTitle={item.rideName}
            assetName={item.title}
            assetType={assetType}
          />
        </View>
      );
    });
  };

  const selectItem = (selectedId, selection) => {
    const newData = [
      ...assetsData.map((item) => {
        if (selectedId === item._id) {
          if (selection === true) {
            setView(false);
            return {
              ...item,
              selected: false,
            };
          } else {
            setView(true);
            setAssetItem(item);
            {
              item.rideName && setAssetTitle(item.rideName);
            }
            {
              item.spaceTitle && setAssetTitle(item.spaceTitle);
            }
            {
              item.title && setAssetTitle(item.title);
            }

            return {
              ...item,
              selected: true,
            };
          }
        } else {
          return {
            ...item,
            selected: false,
          };
        }
      }),
    ];
    setAssetsData(newData);
  };

  //=======================assets States=============//

  const [rideAssets, setRideAssets] = useState();
  const [spaceAssets, setSpaceAssets] = useState();
  const [goodsAssets, setGoodsAssets] = useState();
  const [foodAssets, setFoodAssets] = useState();

  const getGoods = async () => {
    const data = {
      ownerId: ownerId,
    };
    const result = await doPost('v1/userGoods/getUserGoods', data);
    const goods = result.data.map((item, index) => {
      item.key = index;
      item.selected = false;
      return item;
    });
    setGoodsAssets(goods);
  };

  const getFood = async () => {
    const data = {
      ownerId: ownerId,
    };
    const result = await doPost('v1/userFoods/getUserFoods', data);
    const food = result.data.map((item, index) => {
      item.key = index;
      item.selected = false;
      return item;
    });
    setFoodAssets(food);
  };

  const getRides = async () => {
    const data = {
      ownerId: ownerId,
    };
    const result = await doPost('v1/userRides/getUserRides', data);
    const rides = result.data.map((item, index) => {
      item.key = index;
      item.selected = false;
      return item;
    });
    setRideAssets(rides);
  };

  const getSpaces = async () => {
    const data = {
      ownerId: ownerId,
    };
    const result = await doPost('v1/userSpaces/getUserSpaces', data);
    const spaces = result.data.map((item, index) => {
      item.key = index;
      item.selected = false;
      return item;
    });
    setSpaceAssets(spaces);
  };

  useEffect(() => {
    getGoods();
    getRides();
    getSpaces();
    getFood();
    updateAssetData();
    renderItems();
  }, [isFocused, assetType]);

  //==================================================//

  const submitForm = (values) => {
    const newData = {
      sharerName: user.name,
      sharerContact: user.phone,
      shareType: assetType,
      shareTitle: assetTitle,
      shareDescription: values.shareDescription,
      shareCapacityDescription: values.shareCapacityDescription,
    };
    createEventAsset(newData);
  };

  const createEventAsset = async (newData) => {
    setLoading(true);
    let shareData = newData;
    const result = await doPost(
      `v1/events/createEventSharings/${shareId}`,
      shareData,
    );
    // console.log('Booking Ride Api Call', result);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('EventDetails');
    }, 2000);
  };

  return (
    <Container>
      <KeyboardAvoidingView>
        <Header title="Event Sharings" hasBackIcon navigation={navigation} />
        <ScrollView>
          <View style={styles.ComponentArea}>
            <Form
              initialValues={{
                assetType: '',
                shareDescription: '',
                shareCapacityDescription: '',
              }}
              onSubmit={(values) => {
                console.log('values', values);
                submitForm(values);
              }}>
              <FormPicker
                heading="Choose Asset Type"
                name="assetType"
                icon="keypad-outline"
                items={categories}
                placeholder="Choose Asset Type"
                setState={handleAssetSelection}
              />
              <View style={styles.myAssetsListArea}>
                <View style={styles.mainContainer}>
                  <HorizontalScrollViewContainer>
                    <View style={styles.itemContainer}>{renderItems()}</View>
                  </HorizontalScrollViewContainer>
                </View>
              </View>
              {view == true ? (
                <View>
                  <FormField
                    title="Share Description "
                    maxLength={100}
                    name="shareDescription"
                    placeholder="Enter share description"
                    // keyboardType="numeric"
                  />

                  <FormField
                    title="Capacity Description "
                    maxLength={100}
                    name="shareCapacityDescription"
                    placeholder="Enter restraints for your share e.g no smoking in car"
                    // keyboardType="numeric"
                  />
                </View>
              ) : null}

              {/* Submit Form */}
              <View style={styles.buttonAreaStyle}>
                <SubmitForm
                  title="Share for this event"
                  loading={isLoading}></SubmitForm>
              </View>
            </Form>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default Component;
