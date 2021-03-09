import React, {useEffect} from 'react';
import Container from 'res/UniversalComponents/Container.js';
import KeyBoardAvoidingContainer from 'res/UniversalComponents/KeyBoardAvoidingContainer.js';
import {HeadingText, GroupLabelText} from 'res/UniversalComponents/Text.js';
import SearchBar from '../../components/GeneralComponents/SearchBar';
import Header from '../../components/GeneralComponents/Header';
import HomeComponents from '../../components/ContainersComponent/HomeContainer';
//For Redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loginRequest} from '../../ducks/actions';
import {StyleSheet, Text, SafeAreaView, ScrollView} from 'react-native';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({loginRequest, userInfo, navigation}) => {
  useEffect(() => {
    console.log('UserInfo on Home Screen ', userInfo.user);
  }, [userInfo.user]);
  return (
    <Container>
      <Header
        title="let's share"
        isSearchAble
        navigation={navigation}
        navigateTo="HomeSearchScreen"
      />
      <HomeComponents navigation={navigation} />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});

function mapStatesToProps(state) {
  return {
    userInfo: state.userInformation,
  };
}

const mapDispatchToProps = (dispatch) => ({
  loginRequest: bindActionCreators(loginRequest, dispatch),
});

export default connect(mapStatesToProps, mapDispatchToProps)(Component);
