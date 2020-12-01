import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, ms} from 'react-native-size-matters';

export default StyleSheet.create({
  searchBarArea: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: Colors.White,
    borderWidth: ms(1),
    borderBottomColor: Colors.SearchBarWhite,
    borderTopColor: Colors.SearchBarWhite,
  },
  searchBarContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.White,
    borderBottomColor: Colors.White,
    borderTopColor: Colors.White,
  },
  searchBarInputContainer: {
    width: '90%',
    borderRadius: ms(30),
    backgroundColor: Colors.SearchBarWhite,
    borderColor: Colors.White,
  },
});
