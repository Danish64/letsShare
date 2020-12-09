import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, ms, mvs} from 'react-native-size-matters';

export default StyleSheet.create({
  shareRideComponentArea: {
    width: '100%',
    height: mvs(140, 0.7),
    marginTop: mvs(15, 0.6),
    marginBottom: mvs(15, 0.6),
   // justifyContent: 'space-between',
   backgroundColor:"lightblue"
  },
  shareRideTitleText: {
    width: '100%',
    marginBottom: mvs(5, 0.6),
    marginTop: mvs(5, 0.6),
    backgroundColor: "pink",
    alignItems:"flex-start",
  },
  shareRideButtonView:{
    width:'100%',
    alignItems:"center",
    marginTop: mvs(20, 0.6),
  }
 
});
