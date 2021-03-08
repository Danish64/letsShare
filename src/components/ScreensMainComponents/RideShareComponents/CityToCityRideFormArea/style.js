import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, ms, mvs} from 'react-native-size-matters';

export default StyleSheet.create({
    ComponentArea: {
        width: '90%',
        height: mvs(960, 0.7),
        marginVertical: mvs(15, 0.6),
        marginHorizontal: ms(20, 0.6),
        //backgroundColor: 'pink',
      },
      buttonAreastyle: {
        width: '100%',
        height: mvs(100, 0.7),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: ms(10, 0.6),
        backgroundColor: Colors.White,
        borderWidth: ms(0),
      },
});
