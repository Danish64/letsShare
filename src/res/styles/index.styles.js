import {StyleSheet, Platform} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, ms} from 'react-native-size-matters';

export default StyleSheet.create({
  heading: {
    fontSize: ms(20),
    color: Colors.Black,
    fontFamily: 'AirbnbCereal-Bold',
    letterSpacing: ms(0.15),
  },
  headingGrey: {
    fontSize: ms(20),
    color: Colors.DarkGrey,
    fontFamily: 'AirbnbCereal-Bold',
    letterSpacing: ms(0.15),
  },

  headingLrg: {
    fontSize: ms(24),
    color: Colors.Black,
    fontFamily: 'AirbnbCereal-Bold',
    letterSpacing: ms(0.15),
  },
  headingLrgGrey: {
    fontSize: ms(24),
    color: Colors.DarkGrey,
    fontFamily: 'AirbnbCereal-Bold',
    letterSpacing: ms(0.15),
  },

  subTitle: {
    fontSize: ms(18),
    color: Colors.DarkGrey,
    fontFamily: 'AirbnbCereal-Medium',
    letterSpacing: ms(0.15),
  },
  subTitleBlack: {
    fontSize: ms(18),
    color: Colors.Black,
    fontFamily: 'AirbnbCereal-Medium',
    letterSpacing: ms(0.15),
  },
  subTitleWhite: {
    fontSize: ms(18),
    color: Colors.White,
    fontFamily: 'AirbnbCereal-Medium',
    letterSpacing: ms(0.15),
  },
  subTitleBold: {
    fontSize: ms(18),
    color: Colors.DarkGrey,
    fontFamily: 'AirbnbCereal-Black',
    letterSpacing: ms(0.1),
  },
  groupLabel: {
    fontSize: ms(16),
    color: Colors.LightGrey,
    fontFamily: 'AirbnbCereal-Book',
    letterSpacing: ms(0.15),
    textTransform: 'uppercase',
  },
  body: {
    fontSize: ms(16),
    color: Colors.LightGrey,
    fontFamily: 'AirbnbCereal-Light',
    letterSpacing: ms(0.5),
  },
  bodyWhite: {
    fontSize: ms(16),
    color: Colors.White,
    fontFamily: 'AirbnbCereal-Light',
    letterSpacing: ms(0.5),
  },
  bodyBlack: {
    fontSize: ms(16),
    color: Colors.Black,
    fontFamily: 'AirbnbCereal-Light',
    letterSpacing: ms(0.5),
  },
  bodyLight: {
    fontSize: ms(14),
    color: Colors.LightGrey,
    fontFamily: 'AirbnbCereal-Light',
    letterSpacing: ms(0.5),
  },
  buttonTextBlack: {
    fontSize: ms(14),
    color: Colors.Black,
    fontFamily: 'AirbnbCereal-Medium',
    letterSpacing: ms(1.25),
  },
  buttonTextWhite: {
    fontSize: ms(14),
    color: Colors.White,
    fontFamily: 'AirbnbCereal-Medium',
    letterSpacing: ms(1.25),
  },
  textButtonText: {
    fontSize: ms(14),
    color: Colors.Primary,
    fontFamily: 'AirbnbCereal-Medium',
    letterSpacing: ms(1.25),
  },
  captionText: {
    fontSize: ms(12),
    color: Colors.LightGrey,
    fontFamily: 'AirbnbCereal-Medium',
    letterSpacing: ms(0.4),
  },
  overlineText: {
    fontSize: ms(10),
    color: Colors.Black,
    fontFamily: 'AirbnbCereal-Black',
    letterSpacing: ms(1.5),
    textTransform: 'uppercase',
  },
});
