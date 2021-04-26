import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, mvs, ms} from 'react-native-size-matters';

export default StyleSheet.create({
  mainContainer: {
    height: mvs(1000, 0.5),
    width: '100%',
    backgroundColor: Colors.White,
    marginTop: mvs(15, 0.6),
    marginBottom: mvs(15, 0.6),
  },
  subContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    height: mvs(200, 0.6),
  },
  imageContainer: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  subContainer2: {
    width: '100%',
    //alignItems: 'center',
    paddingLeft: mvs(10, 0.6),
    paddingRight: mvs(10, 0.6),
    marginTop: mvs(10, 0.6),
    marginBottom: mvs(10, 0.6),
  },
  titleSection: {
    padding: mvs(5, 0.6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  descriptionSection: {
    padding: mvs(5, 0.6),
    backgroundColor: Colors.BackgroundWhite,
  },
  detailsSection: {
    padding: mvs(5, 0.6),
  },
  locationSection: {
    width: '100%',
    // height: mvs(220, 0.6),
    // justifyContent: 'space-between',
  },
  locationBody: {
    width: '100%',
    // height: '30%',
  },
  locationContainer: {
    // ...StyleSheet.absoluteFillObject,
    height: mvs(160, 0.6),
    width: '100%',
    marginTop: mvs(5, 0.6),
  },
  setLocationContainer: {
    padding: 10,
    height: '100%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
