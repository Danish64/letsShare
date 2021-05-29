import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, ms, mvs} from 'react-native-size-matters';

export default StyleSheet.create({
  mainContainer: {
    width: '94%',
    // height: mvs(220, 0.7),
    backgroundColor: Colors.White,
    marginTop: mvs(10, 0.6),
    marginBottom: mvs(10, 0.6),
    marginHorizontal: ms(10, 0.6),
    borderRadius: ms(10, 0.7),
    elevation: ms(3),
    flexDirection: 'column',
  },
  subContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  rideCategoryView: {
    width: '80%',
    alignItems: 'center',
    paddingTop: 10,
  },
  alignCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  rideDetails: {
    width: '30%',
    // height: mvs(100, 0.7),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  image: {
    width: 100,
    height: 70,
    borderRadius: 35,
  },

  locationDetails: {
    width: '50%',
    // height: mvs(120, 0.7),
    justifyContent: 'center',
    paddingHorizontal: ms(10, 0.6),
    alignItems: 'center',
    marginVertical: mvs(5, 0.5),
  },

  otherDetail: {
    width: '20%',
    // height: mvs(100, 0.7),
    justifyContent: 'center',
    alignItems: 'center',
  },
  circlePrimary: {
    width: 15,
    height: 15,
    borderRadius: 15,
    backgroundColor: Colors.Primary,
  },
  circleRed: {
    width: 15,
    height: 15,
    borderRadius: 15,
    backgroundColor: Colors.Failure,
  },
  statusDetail: {
    width: '100%',
    marginVertical: mvs(10, 0.6),
    // height: mvs(60, 0.5),
    flexDirection: 'row',
  },
  acceptedRequestsView: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pendingRequestsView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  acceptedStatusView: {
    marginTop: mvs(5, 0.5),
    height: mvs(30, 0.5),
    width: ms(130, 0.5),
    borderWidth: 1,
    borderRadius: ms(10, 0.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  notAcceptedStatusView: {
    marginTop: mvs(5, 0.5),
    height: mvs(30, 0.5),
    width: ms(230, 0.5),
    borderWidth: 1,
    borderRadius: ms(10, 0.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactView: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  verticalSeparator: {
    width: 2,
    height: mvs(20, 0.6),
    backgroundColor: Colors.light,
  },

  horizontalSeparator: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.light,
  },
});
