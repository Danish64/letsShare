import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, ms, mvs} from 'react-native-size-matters';

export default StyleSheet.create({
  mainContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    height: mvs(140, 0.6),
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center'
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.White,
    borderWidth: ms(2),
    padding: 5,
    marginVertical: 10,
    width: mvs(250, 0.6),
    height: mvs(50, 0.6)
  },
  imageStyle: {
    width: mvs(130, 0.6),
    height:  mvs(130, 0.6),
  },
});