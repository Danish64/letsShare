import React, {useEffect} from 'react';
import Container from 'res/UniversalComponents/Container.js';
import {View} from 'react-native';
import {s, vs, ms, mvs} from 'react-native-size-matters';
import {HeadingText, SectionHeadingText} from 'res/UniversalComponents/Text.js';
import Header from '../../../components/GeneralComponents/Header';
import ScrollViewContainer from 'res/UniversalComponents/ScrollViewContainer.js';
import CreateEventActionArea from './Components/ActionArea';
import EventsList from './Components/RecentlyEvents';
import {connect} from 'react-redux';
import UserActivityClass from '../../../utils/UserActivity';

const Component = ({navigation, userInfo}) => {
  let UserActivity = new UserActivityClass();

  useEffect(() => {
    // console.log('User Info ', userInfo.user);
    UserActivity.mixpanel.identify(userInfo.user.email);
    const eventInfo = {
      screen: 'Event Home',
      email: userInfo.user.email,
    };
    UserActivity.mixpanel.track('Events Opened', eventInfo);
    UserActivity.mixpanel.flush();
  }, []);
  return (
    <Container>
      <Header title="events" navigation={navigation} />
      <ScrollViewContainer>
        <CreateEventActionArea navigation={navigation} />
        <View
          style={{
            width: '100%',
            marginTop: mvs(5, 0.6),
            marginBottom: mvs(15, 0.6),
            alignItems: 'flex-start',
            marginHorizontal: ms(20, 0.6),
          }}>
          <SectionHeadingText>Events</SectionHeadingText>
          <EventsList navigation={navigation} />
        </View>
      </ScrollViewContainer>
    </Container>
  );
};

function mapStatesToProps(state) {
  return {
    userInfo: state.userInformation,
  };
}

const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStatesToProps, mapDispatchToProps)(Component);
