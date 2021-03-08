import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, ms, mvs} from 'react-native-size-matters';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: mvs(215, 0.6),
    alignItems: 'flex-start',
    backgroundColor: Colors.White,
    borderWidth: ms(2),
    borderLeftColor: Colors.White,
    borderRightColor: Colors.White,
    borderBottomColor: Colors.SearchBarWhite,
    borderTopColor: Colors.White,

    justifyContent: 'space-between'

  },
  placeholder: {
    color: Colors.MediumGrey,
    flex: 1,
  },
  locationContainer: {
    padding: mvs(10, 0.6),
    height: '100%',
  },
  textInput: {
    // alignItems: 'center',
    // justifyContent: 'center',
    // padding: mvs(5, 0.6),
    // backgroundColor: Colors.BackgroundWhite,
    // marginVertical:mvs(5, 0.6),
    // marginHorizontal: mvs(10, 0.6)
    padding: 5,
    backgroundColor: '#eee',
    marginVertical: 5,
  },
  locationContainer: {
    ...StyleSheet.absoluteFillObject,
    height: mvs(160, 0.6),
    width: '100%',
    marginTop: mvs(25, 0.6),
  },
  setLocationContainer: {
    // height: '100%',
    // width: '100%',
    // marginTop: mvs(25, 0.6),
    padding: 10,
    height: '100%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonStyles: {
    width: '100%',
    height: mvs(100, 0.7),
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
    marginHorizontal: ms(10, 0.6),
    backgroundColor: Colors.White,
    borderWidth: ms(0),
  },
});
