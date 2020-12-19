import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, ms, mvs} from 'react-native-size-matters';

export default StyleSheet.create({
  shareItemContainer: {
    width: ms(260, 0.6),
    height: mvs(250, 0.7),
    backgroundColor: Colors.White,
    marginTop: mvs(15, 0.6),
    marginBottom: mvs(15, 0.6),

    marginRight: ms(15, 0.7),
    borderRadius: ms(10, 0.7),
    elevation: ms(3),
  },
  imageContainer: {
    width: '100%',
    height: '50%',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  descriptionStyle: {
    width: '100%',
    height: '30%',
    marginTop: mvs(5, 0.7),
    paddingHorizontal: ms(5, 0.6),
  },

  otherDetails: {
    justifyContent: 'space-evenly',
  },

  titleContainer: {
    width: '100%',
    height: '30%',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  seatsLeft: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
});
