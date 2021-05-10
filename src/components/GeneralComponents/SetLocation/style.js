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

    justifyContent: 'space-between',
  },
  placeholder: {
    color: Colors.MediumGrey,
    flex: 1,
  },

  textInput: {
    padding: 5,
    backgroundColor: '#eee',
    marginVertical: mvs(5, 0.5),
    marginHorizontal: ms(10, 0.5),
  },
  locationContainer: {
    ...StyleSheet.absoluteFillObject,
    height: mvs(150, 0.6),
    marginTop: mvs(25, 0.6),
    marginHorizontal: ms(12, 0.4),
    borderWidth: 1,
    borderColor: Colors.LightGrey,
    borderRadius: 5,
  },
  setLocationContainer: {
    padding: 10,
    height: '100%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonStyles: {
    marginHorizontal: ms(10, 0.6),
    marginVertical: mvs(5, 0.6),
  },
});
