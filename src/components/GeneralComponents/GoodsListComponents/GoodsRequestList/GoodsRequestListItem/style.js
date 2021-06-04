import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, ms, mvs} from 'react-native-size-matters';

export default StyleSheet.create({
  mainContainer: {
    width: '90%',
    backgroundColor: Colors.White,
    marginTop: mvs(5, 0.6),
    marginBottom: mvs(5, 0.6),
    marginHorizontal: ms(10, 0.6),
    borderRadius: ms(10, 0.7),
    elevation: ms(3),
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },

  rideDetails: {
    width: '30%',
    height: mvs(100, 0.7),
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
    height: mvs(100, 0.7),
    justifyContent: 'center',
    paddingHorizontal: ms(10, 0.6),
  },

  otherDetail: {
    width: '20%',
    height: mvs(100, 0.7),
    justifyContent: 'center',
    alignItems: 'center',
  },

  acceptButton: {
    width: '50%',
    marginHorizontal: ms(10, 0.3),
  },
  contactIconsView: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    width: '40%',
  },
  verticalSeparator: {
    width: 2,
    height: mvs(20, 0.6),
    backgroundColor: Colors.light,
  },

  horizontalSeparator: {
    width: '50%',
    height: 1,
    backgroundColor: Colors.light,
    marginVertical: mvs(5, 0.2),
  },

  ContactContainer: {
    marginVertical: mvs(10, 0.6),
    //height: 50,
    width: '100%',
    flexDirection: 'row',
    marginHorizontal: ms(5, 0.3),
  },
  contactIconsView: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },

  respondRequest: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  bookingStatus: {
    marginTop: mvs(5, 0.5),
    height: mvs(30, 0.5),
    width: ms(230, 0.5),
    borderWidth: 1,
    borderRadius: ms(10, 0.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
