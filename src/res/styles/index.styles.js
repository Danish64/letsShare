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
  scrollViewContainer: {
    marginHorizontal: ms(20),
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
    fontSize: ms(28),
    color: Colors.White,
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
  roundSearchIcon: {
    marginRight: s(10),
  },
  buttonIconPrimary: {
    ...buttonProperties,
    backgroundColor: Colors.Primary,
    flexDirection: 'row',
    alignItems: 'center',
  },

  chargesIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: ms(5, 0.6),
  },

  seatsLeft: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: ms(5, 0.6),
  },

  routeDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: ms(5, 0.6),
  },
  // Button Styling Ends Here

  //ScrollViewContainer Styles

  //ScrollViewContainer Styles ends
});
