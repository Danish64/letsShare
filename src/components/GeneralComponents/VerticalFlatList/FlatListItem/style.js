import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, ms, mvs} from 'react-native-size-matters';

export default StyleSheet.create({
    mainContainer:{
        width: '90%',
        height: mvs(100, 0.7),
        backgroundColor: Colors.White,
        marginTop: mvs(5, 0.6),
        marginBottom: mvs(5, 0.6),
        borderRadius: ms(10, 0.7),
        elevation: ms(3),
        alignSelf: 'center',
        flexDirection: 'row'
    },
    imageContainer:{
        height: '90%',
        width: '30%',
    },
    image:{
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    detailsContainer:{
        justifyContent: 'space-evenly',
        width: '70%'
        // marginTop: mvs(5, 0.5),
        // marginBottom: mvs(5, 0.6),
    },
    subContainer:{
        width: '100%'
    }
 

});
