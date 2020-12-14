import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, ms, mvs} from 'react-native-size-matters';

export default StyleSheet.create({
  availRideComponentArea: {
    width: '90%',
    height: mvs(280, 3.0),
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: mvs(30, 0.6),
    marginBottom: mvs(15, 0.6),
    marginHorizontal: ms(20, 0.6),
  },
  availRideTitleText: {
    width: '100%',
    marginBottom: mvs(5, 0.6),
    marginTop: mvs(5, 0.6),
    //backgroundColor: 'pink',
    alignItems: 'flex-start',
  },
});





// import {StyleSheet} from 'react-native';
// import {Colors} from 'res/constants/Colors';
// import {s, vs, ms, mvs} from 'react-native-size-matters';

// export default StyleSheet.create({
//   shareAssetComponentArea: {
//     width: '90%',
//     height: mvs(400, 0.7),
//     marginTop: mvs(15, 0.6),
//     marginBottom: mvs(15, 0.6),
//     justifyContent: 'space-between',
//     marginHorizontal: ms(20, 0.6),
//   },
//   shareAssetTitleText: {
//     width: '100%',
//     marginBottom: mvs(5, 0.6),
//     marginTop: mvs(5, 0.6),
//   },
//   shareAssetRowContainer: {
//     width: '100%',
//     height: '45%',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: mvs(15, 0.6),
//     marginTop: mvs(130, 0.6),
//   },

//   shareAssetCardContainer: {
//     width: '45%',
//     height: '65%',
//     borderRadius: mvs(20, 0.6),
//     borderWidth: ms(1),
//     borderColor: Colors.Black,

//     alignItems: 'center',
//     justifyContent: 'center',

//     marginBottom: mvs(5, 0.6),
//   },
//   cardIcon: {
//     width: '80%',
//     height: '80%',
//   },
//   cardTitle: {
//     marginTop: mvs(5, 0.6),
//   },
// });
