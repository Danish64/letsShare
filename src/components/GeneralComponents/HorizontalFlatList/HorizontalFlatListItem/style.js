import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, ms, mvs} from 'react-native-size-matters';

export default StyleSheet.create({
  shareItemContainer: {
    width: ms(200, 0.6),
    height: mvs(200, 0.7),
    marginTop: mvs(15, 0.6),
    marginBottom: mvs(15, 0.6),
    backgroundColor: 'white',
    marginRight: ms(20, 0.7),
    marginLeft: ms(2, 0.7),
    elevation: ms(3),
    borderRadius: ms(10, 0.7),
  },
  imageContainer: {
    width: '100%',
    height: '70%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  descriptionStyle: {
    width: '100%',
    height: '30%',
    marginTop: mvs(5, 0.7),
    paddingHorizontal: ms(10, 0.7),
  },

  otherDetails: {
    justifyContent: 'space-evenly',
  },

  titleContainer: {
    width: '100%',
    height: '40%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
