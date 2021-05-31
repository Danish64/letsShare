import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, ms, mvs} from 'react-native-size-matters';

export default StyleSheet.create({
  ComponentArea: {
    width: '90%',
    height: mvs(600, 0.7),
    marginVertical: mvs(15, 0.6),
    marginHorizontal: ms(20, 0.6),
    backgroundColor: 'white',
  },
  buttonAreaStyle: {
    flex: 1,
    justifyContent: 'flex-end',
    marginHorizontal: ms(20, 0.5),
    marginVertical: mvs(25, 0.5),
  },
  myAssetsListArea: {
    marginVertical: mvs(30, 0.6),
    width: '100%',
    height: mvs(140, 0.7),
    alignItems: 'center',
  },
  mainContainer: {
    width: '100%',
    height: mvs(120, 0.6),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    width: '100%',
    height: mvs(120, 0.6),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
