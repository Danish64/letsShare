import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, ms, mvs} from 'react-native-size-matters';

export default StyleSheet.create({
  subContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    height: '40%',
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
  iconsContainer: {
    flexDirection: 'column',
    width: '30%',
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: mvs(15, 0.6),
  },
  alignCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareItemContainer: {
    width: ms(270, 0.6),
    height: mvs(300, 0.7),
    backgroundColor: Colors.White,
    marginBottom: mvs(15, 0.6),
    marginTop: mvs(10, 0.5),

    marginRight: ms(20, 0.7),
    borderRadius: ms(10, 0.7),
    elevation: ms(3),
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
  subtitleContainer: {
    marginVertical: mvs(7, 0.6),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  locationStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: mvs(5, 0.6),
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
  separator: {
    width: 2,
    height: mvs(40, 0.6),
    backgroundColor: Colors.light,
  },
});
