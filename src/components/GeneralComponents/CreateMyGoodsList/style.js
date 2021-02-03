import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, ms, mvs} from 'react-native-size-matters';
import {

  DEFAULT_BUTTON_PADDING_VERTICAL,
  DEFAULT_BUTTON_PADDING_HORIZONTAL,
  DEFAULT_BUTTON_RADIUS,
} from 'res/constants/constants';

export default StyleSheet.create({
  itemsArea: {
    flexDirection: 'row',
    marginHorizontal: ms(10, 0.6),
    marginVertical: mvs(10, 0.6),
    alignItems: 'center',
  },
});
