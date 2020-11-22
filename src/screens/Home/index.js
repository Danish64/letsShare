import React, {useEffect} from 'react';
import Container from 'res/UniversalComponents/Container.js';
import {HeadingText} from 'res/UniversalComponents/Text.js';
//For Redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loginRequest} from '../../ducks/actions';
//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({loginRequest, userInfo}) => {
  useEffect(() => {
    loginRequest();
  }, []);
  useEffect(() => {
    console.log('UserInfo on home screen', userInfo);
  }, [userInfo]);
  return (
    <Container>
      <HeadingText>Home</HeadingText>
    </Container>
  );
};

function mapStatesToProps(state) {
  return {
    userInfo: state.userInformation,
  };
}

const mapDispatchToProps = (dispatch) => ({
  loginRequest: bindActionCreators(loginRequest, dispatch),
});

export default connect(mapStatesToProps, mapDispatchToProps)(Component);
