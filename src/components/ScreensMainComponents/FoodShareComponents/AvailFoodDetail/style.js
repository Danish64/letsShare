import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, mvs, ms} from 'react-native-size-matters';

export default StyleSheet.create({
  mainContainer: {
    width: '100%',
    backgroundColor: Colors.White,
    marginBottom: mvs(15, 0.6),
  },
  categoryTitleText: {
    marginTop: mvs(5, 0.3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  descriptionView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: mvs(35, 0.5),
  },
  deliveryInfoView: {
    marginHorizontal: ms(40, 0.6),
    paddingLeft: mvs(10, 0.6),
    paddingRight: mvs(10, 0.6),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: mvs(20, 0.6),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: ms(40, 0.6),
    marginBottom: mvs(3, 0.2),
    paddingLeft: mvs(10, 0.6),
    paddingRight: mvs(10, 0.6),
  },
  rowSeparator: {
    height: 1,
    flexDirection: 'row',
    width: 300,
    backgroundColor: Colors.SearchBarWhite,
    alignSelf: 'center',
  },

  subContainer2: {
    width: '100%',
    paddingLeft: mvs(10, 0.6),
    paddingRight: mvs(10, 0.6),
    marginTop: mvs(10, 0.6),
    marginBottom: mvs(10, 0.6),
  },

  locationBody: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: mvs(10, 0.5),
  },

  locationContainer: {
    height: mvs(150, 0.6),
    marginHorizontal: ms(12, 0.5),
    borderWidth: 2,
    borderRadius: 5,
    elevation: 2,
    borderColor: Colors.LightGrey,
  },

  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bookFoodButtonView: {
    marginHorizontal: ms(20, 0.5),
    marginVertical: mvs(10, 0.5),
  },
  imageContainer: {
    width: '100%',
    height: mvs(150, 0.6),
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  ContactContainer: {
    width: '100%',
    flexDirection: 'row',
    // marginHorizontal: ms(15, 0.3),
    marginTop: mvs(20, 0.5),
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  contactIconsView: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    width: '40%',
  },
});
