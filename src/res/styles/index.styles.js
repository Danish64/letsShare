import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {
  DEFAULT_SCREEN_COLOR,
  DEFAULT_SPLASH_SCREEN_COLOR,
  DEFAULT_HEADING_TEXT_SIZE,
  LARGE_HEADING_TEXT_SIZE,
  MEDIUM_HEADING_TEXT_SIZE,
  SMALL_HEADING_TEXT_SIZE,
  DEFAULT_SUBTITLE_TEXT_SIZE,
  DEFAULT_GROUP_LABEL_TEXT_SIZE,
  DEFAULT_BODY_TEXT_SIZE,
  LIGHT_BODY_TEXT_SIZE,
  DEFAULT_BUTTON_TEXT_SIZE,
  DEFAULT_CAPTION_TEXT_SIZE,
  DEFAULT_OVERLINE_TEXT_SIZE,
  DEFAULT_BUTTON_PADDING_VERTICAL,
  DEFAULT_BUTTON_PADDING_HORIZONTAL,
  DEFAULT_BUTTON_RADIUS,
} from 'res/constants/constants';
import {s, vs, ms, mvs} from 'react-native-size-matters';
import { Col } from 'native-base';

const FONT_AIRBNB_CEREAL_BOLD = 'AirbnbCereal-Bold';
const FONT_AIRBNB_CEREAL_MEDIUM = 'AirbnbCereal-Medium';
const FONT_AIRBNB_CEREAL_BLACK = 'AirbnbCereal-Black';
const FONT_AIRBNB_CEREAL_BOOK = 'AirbnbCereal-Book';
const FONT_AIRBNB_CEREAL_LIGHT = 'AirbnbCereal-Light';

const headingTextProperties = {
  fontFamily: FONT_AIRBNB_CEREAL_BOLD,
  letterSpacing: ms(0.15),
};
const subTitleProperties = {
  fontSize: ms(DEFAULT_SUBTITLE_TEXT_SIZE),
  fontFamily: FONT_AIRBNB_CEREAL_MEDIUM,
  letterSpacing: ms(0.15),
};
const bodyTextProperties = {
  fontSize: ms(DEFAULT_BODY_TEXT_SIZE),
  fontFamily: FONT_AIRBNB_CEREAL_LIGHT,
  letterSpacing: ms(0.5),
};

const buttonTextProperties = {
  fontSize: ms(DEFAULT_BUTTON_TEXT_SIZE),
  fontFamily: FONT_AIRBNB_CEREAL_MEDIUM,
  letterSpacing: ms(0.75),
};

const buttonProperties = {
  paddingVertical: vs(DEFAULT_BUTTON_PADDING_VERTICAL),
  paddingHorizontal: s(DEFAULT_BUTTON_PADDING_HORIZONTAL),
  borderRadius: ms(DEFAULT_BUTTON_RADIUS),
};

export default StyleSheet.create({
  // Screen Styles Container
  screenStyle: {
    flex: 1,
    backgroundColor: DEFAULT_SCREEN_COLOR,
  },

  //Splash Screen Style Starts
  splashScreenStyle: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: DEFAULT_SPLASH_SCREEN_COLOR,
  },

  //Splash Screen Style ends
  // Text/Font Styling Starts Here

  heading: {
    ...headingTextProperties,
    fontSize: ms(DEFAULT_HEADING_TEXT_SIZE),
    color: Colors.Black,
  },
  headingGrey: {
    ...headingTextProperties,
    fontSize: ms(DEFAULT_HEADING_TEXT_SIZE),
    color: Colors.DarkGrey,
  },

  headingLrg: {
    ...headingTextProperties,
    fontSize: ms(LARGE_HEADING_TEXT_SIZE),
    color: Colors.Black,
  },
  headingLrgGrey: {
    ...headingTextProperties,
    fontSize: ms(LARGE_HEADING_TEXT_SIZE),
    color: Colors.DarkGrey,
  },
  logoText: {
    fontFamily: FONT_AIRBNB_CEREAL_BLACK,
    letterSpacing: ms(0.25),
    fontSize: ms(28),
    color: Colors.Primary,
  },

  imageTextBold: {
    fontFamily: FONT_AIRBNB_CEREAL_BLACK,
    letterSpacing: ms(0.25),
    fontSize: ms(20),
    color: Colors.DarkGrey,
  },

  recentlySharedTitleText: {
    ...headingTextProperties,
    fontFamily: FONT_AIRBNB_CEREAL_MEDIUM,
    fontSize: ms(MEDIUM_HEADING_TEXT_SIZE),
    color: Colors.Primary,
  },

  recentlySharedSubtitleText: {
    ...headingTextProperties,
    fontFamily: FONT_AIRBNB_CEREAL_BOLD,
    fontSize: ms(SMALL_HEADING_TEXT_SIZE),
    color: Colors.DarkGrey,
  },
  availCategoryTextGrey: {
    fontSize: mvs(20, 0.7),
    color: Colors.DarkGrey,
    fontFamily: FONT_AIRBNB_CEREAL_MEDIUM,
    letterSpacing: ms(0.2),
  },

  subTitle: {
    ...subTitleProperties,
    color: Colors.DarkGrey,
  },
  subTitleBlack: {
    ...subTitleProperties,
    color: Colors.Black,
  },
  subTitleWhite: {
    ...subTitleProperties,
    color: Colors.White,
  },
  subTitleBold: {
    fontSize: ms(DEFAULT_SUBTITLE_TEXT_SIZE),
    color: Colors.DarkGrey,
    fontFamily: FONT_AIRBNB_CEREAL_BLACK,
    letterSpacing: ms(0.1),
  },
  sectionHeading: {
    fontSize: mvs(20, 0.7),
    color: Colors.Black,
    fontFamily: FONT_AIRBNB_CEREAL_MEDIUM,
    letterSpacing: ms(0.2),
  },
  shareActionAreaHeading: {
    fontSize: mvs(20, 0.7),
    color: Colors.Black,
    fontFamily: FONT_AIRBNB_CEREAL_MEDIUM,
    letterSpacing: ms(0.2),
  },
  groupLabel: {
    fontSize: ms(DEFAULT_GROUP_LABEL_TEXT_SIZE),
    color: Colors.DarkGrey,
    fontFamily: FONT_AIRBNB_CEREAL_BOOK,
    letterSpacing: ms(0.15),
    textTransform: 'uppercase',
  },

  body: {
    ...bodyTextProperties,
    color: Colors.LightGrey,
  },
  bodyWhite: {
    ...bodyTextProperties,
    color: Colors.White,
  },
  bodyBlack: {
    ...bodyTextProperties,
    color: Colors.Black,
  },
  bodyBold: {
    ...bodyTextProperties,
    fontFamily: FONT_AIRBNB_CEREAL_BOLD,
    color: Colors.Black,
  },
  bodyLight: {
    ...bodyTextProperties,
    fontSize: ms(LIGHT_BODY_TEXT_SIZE),
    color: Colors.LightGrey,
  },

  bottomTabText: {
    fontSize: ms(10),
    fontFamily: FONT_AIRBNB_CEREAL_BOOK,
    color: Colors.LightGrey,
    marginBottom: mvs(12, 0.7),
  },
  bottomTabFocusedText: {
    fontSize: ms(10),
    fontFamily: FONT_AIRBNB_CEREAL_BOLD,
    marginBottom: ms(12, 0.7),
  },
  formText: {
    fontSize: ms(10),
    fontFamily: FONT_AIRBNB_CEREAL_BOLD,
    marginBottom: ms(12, 0.7),
  },
  bottomTabHeight: {
    height: mvs(55, 0.7),
  },
  //ButtonText Properties

  buttonTextBlack: {
    ...buttonTextProperties,
    color: Colors.Black,
  },
  buttonTextWhite: {
    ...buttonTextProperties,
    color: Colors.White,
  },
  buttonTextLightGrey: {
    ...buttonTextProperties,
    color: Colors.LightGrey,
  },

  textButtonText: {
    ...buttonTextProperties,
    color: Colors.Primary,
  },
  captionText: {
    fontSize: ms(DEFAULT_CAPTION_TEXT_SIZE),
    color: Colors.LightGrey,
    fontFamily: FONT_AIRBNB_CEREAL_MEDIUM,
    letterSpacing: ms(0.4),
  },
  overlineText: {
    fontSize: ms(DEFAULT_OVERLINE_TEXT_SIZE),
    color: Colors.Black,
    fontFamily: FONT_AIRBNB_CEREAL_BLACK,
    letterSpacing: ms(1.5),
    textTransform: 'uppercase',
  },
  // Text/Font Styling Ends Here
  // Button Styling Starts Here

  buttonPrimary: {
    ...buttonProperties,
    backgroundColor: Colors.Primary,
  },
  buttonPrimaryWhite: {
    ...buttonProperties,
    backgroundColor: Colors.White,
  },
  buttonPrimaryDarkGrey: {
    ...buttonProperties,
    backgroundColor: Colors.DarkGrey,
  },
  buttonOutlined: {
    ...buttonProperties,
    borderColor: Colors.Primary,
    borderWidth: ms(2),
  },
  categoryButtonOutlined: {
    ...buttonProperties,
    borderColor: Colors.Black,
    borderWidth: ms(2),
    flexDirection: 'row',
    marginHorizontal: ms(10, 0.6),
    marginVertical: ms(10, 0.6),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  roundSearchIcon: {
    marginRight: s(10),
  },
  buttonLandscapeBlack: {
    ...buttonProperties,
    backgroundColor: Colors.Black,
    alignItems: 'center',
    paddingVertical: vs(15),
    justifyContent: 'center',
  },
  buttonLandscapePrimary: {
    ...buttonProperties,
    backgroundColor: Colors.Primary,
    alignItems: 'center',
    paddingVertical: vs(15),
    justifyContent: 'center',
  },
  buttonLandscapeImageWhite: {
    ...buttonProperties,
    backgroundColor: Colors.White,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: vs(15),
    justifyContent: 'space-evenly',
    borderWidth: 2,
  },
  buttonIconPrimary: {
    ...buttonProperties,
    backgroundColor: Colors.Primary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: vs(6),
    paddingHorizontal: s(60),
    justifyContent: 'center',
  },

  buttonActionIconOutlined: {
    ...buttonProperties,
    paddingVertical: vs(6),
    paddingHorizontal: s(60),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.LightGrey,
    borderWidth: ms(1),
  },
  buttonIconMargin: {
    marginRight: ms(10, 0.6),
  },
  goodsIconPrimary: {
    ...buttonProperties,
    backgroundColor: Colors.Primary,
    flexDirection: 'row',
    alignItems: 'center',
  },

  textIconStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: ms(5, 0.6),
  },

  addAssetButton: {
    ...buttonProperties,
    backgroundColor: Colors.White,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: ms(20, 0.6),
    width: ms(150, 0.6),
    height: mvs(110, 0.6),
    marginHorizontal: ms(5, 0.6),
    borderWidth: 3,
    borderColor: Colors.LightGrey,
  },
  addAssetButtonActive: {
    ...buttonProperties,
    backgroundColor: Colors.White,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: ms(20, 0.6),
    width: ms(150, 0.6),
    height: mvs(110, 0.6),
    marginHorizontal: ms(5, 0.6),
    borderWidth: 3,
    borderColor: Colors.Primary,
  },
  addAssetButtonCheckMark: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    width: ms(130, 0.6),
    // alignItems: 'center',
  },

  //Text Input Styles

  textInputAreaBlur: {
    width: '90%',
    height: mvs(70, 0.6),
    marginHorizontal: ms(15, 0.6),
    justifyContent: 'center',
    backgroundColor: Colors.White,
    borderWidth: ms(1),
    borderLeftColor: Colors.White,
    borderRightColor: Colors.White,
    borderBottomColor: Colors.SearchBarWhite,
    borderTopColor: Colors.White,
    padding: ms(5),
  },

  textInputAreaFocus: {
    width: '90%',
    height: mvs(70, 0.6),
    marginHorizontal: ms(15, 0.6),
    justifyContent: 'center',
    backgroundColor: Colors.White,
    borderWidth: ms(1),
    borderLeftColor: Colors.White,
    borderRightColor: Colors.White,
    borderBottomColor: Colors.Primary,
    borderTopColor: Colors.White,
    padding: ms(5),
    borderColor: 'green',
  },
  textInputTitle: {
    fontSize: mvs(12, 0.7),
    color: Colors.Black,
    fontFamily: FONT_AIRBNB_CEREAL_BOLD,
    letterSpacing: ms(0.2),
  },

  stepperButton: {
    ...buttonProperties,
    backgroundColor: Colors.White,
    alignItems: 'center',
    justifyContent: 'center',
    // borderRadius: ms(2, 0.6),
    width: ms(30, 0.6),
    height: mvs(30, 0.6),
    paddingHorizontal: ms(5, 0.6),
    marginRight: ms(6, 0.6),
    borderWidth: 2,
    borderRadius: 30,
  },

  stepperIconArea: {
    width: '100%',
    height: '100%',
    //backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center'
  },

  addImageButton: {
    ...buttonProperties,
    backgroundColor: Colors.White,
    alignItems: 'center',
    justifyContent: 'center',
    // borderRadius: ms(2, 0.6),
    width: ms(100, 0.6),
    height: mvs(100, 0.6),
    paddingHorizontal: ms(5, 0.6),
    marginRight: ms(6, 0.6),
    borderWidth: 1,
    borderColor: Colors.LightGrey,
    borderStyle: 'dashed'
    // borderRadius: 30,
  },

  addImageIconArea: {
    width: '100%',
    height: '100%',
    //backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center'
  },

  shareButton: {
    ...buttonProperties,
    backgroundColor: Colors.White,
    alignItems: 'center',
    justifyContent: 'center',
    // borderRadius: ms(2, 0.6),
    width: ms(50, 0.6),
    height: mvs(50, 0.6),
    paddingHorizontal: ms(5, 0.6),
    marginRight: ms(6, 0.6),
    //borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.LightGrey,
  },

  shareIconArea: {
    width: '100%',
    height: '100%',
    //backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center'
  },



  outlinedBorderTextInput: {
    width: '100%',
    height: mvs(60, 0.6),
    borderWidth: 2,
    borderColor: Colors.LightGrey,
    borderTopLeftRadius: ms(4, 0.6),
    borderTopRightRadius: ms(4, 0.6),
    justifyContent: 'center',
    //backgroundColor: 'yellow',
  },
  //text Input
  textInputErrorMessage: {
    fontSize: mvs(12, 0.7),
    color: Colors.Failure,
    fontFamily: FONT_AIRBNB_CEREAL_MEDIUM,
    letterSpacing: ms(0.2),
  },
  textInputAreaBaseline: {
    width: '100%',
    height: mvs(70, 0.6),
    justifyContent: 'center',
    backgroundColor: Colors.White,
    borderWidth: ms(2),
    borderLeftColor: Colors.White,
    borderRightColor: Colors.White,
    borderBottomColor: Colors.SearchBarWhite,
    borderTopColor: Colors.White,
  },
  inputTextSmall: {
    color: Colors.Black,
    fontFamily: 'FONT_AIRBNB_CEREAL_LIGHT',
    fontSize: mvs(15, 0.7),
    marginHorizontal: ms(5, 0.6),
  },

  inputText: {
    color: Colors.LightGrey,
    fontFamily: 'FONT_AIRBNB_CEREAL_LIGHT',
    fontSize: mvs(18, 0.7),
    marginHorizontal: ms(10, 0.6),
  },

  iconTextInputField: {
    backgroundColor: Colors.White,
    borderWidth: 2,
    borderColor: Colors.LightGrey,
    flexDirection: 'row',
    width: '100%',
    paddingVertical: mvs(5, 0.6),
    marginVertical: mvs(5, 0.6),
    alignItems: 'center',
  },

  stepperInputAreaBlur: {
    width: '100%',
    height: mvs(90, 0.6),
    justifyContent: 'center',
    backgroundColor: Colors.White,
    borderWidth: ms(1),
    borderLeftColor: Colors.White,
    borderRightColor: Colors.White,
    borderBottomColor: Colors.SearchBarWhite,
    borderTopColor: Colors.White,
    padding: ms(5),
    marginTop: ms(7)
  },
  stepperContainer: {
    width: '100%',
    height: mvs(50, 3.0),
    marginTop: mvs(10, 0.6),
    marginBottom: mvs(2, 0.6),
    borderRadius: ms(10, 0.7),
    // elevation: ms(3),
    marginHorizontal: ms(8, 0.6),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    // backgroundColor: 'white',
    // borderWidth: 0.5,
  },

  // Button Styling Ends Here

  //ScrollViewContainer Styles

  //ScrollViewContainer Styles ends
});
