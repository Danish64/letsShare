import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, ms, mvs} from 'react-native-size-matters';

export default StyleSheet.create({
  mainContainer: {
    width: '100%',
    backgroundColor: Colors.White,
    marginTop: mvs(5, 0.6),
    marginBottom: mvs(5, 0.6),
    borderRadius: ms(10, 0.7),
    marginHorizontal: ms(1),
    elevation: ms(3),
    paddingVertical: mvs(15, 0.9),
    paddingHorizontal: ms(5),
  },

  rideDetails: {
    width: '30%',
    height: mvs(100, 0.7),
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
    width: '45%',
    height: mvs(100, 0.7),
    justifyContent: 'center',
    paddingHorizontal: ms(10, 0.6),
    alignItems: 'center',
  },

  otherDetail: {
    width: '25%',
    height: mvs(100, 0.7),
    justifyContent: 'center',
    alignItems: 'center',
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
  contactView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
