import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, ms, mvs} from 'react-native-size-matters';

export default StyleSheet.create({
    mainContainer:{
        alignSelf: 'center',
        width: '95%',
        height: mvs(400, 0.7),
        backgroundColor: Colors.White,
        marginTop: mvs(15, 0.6),
        marginBottom: mvs(15, 0.6),
        borderRadius: ms(10, 0.7),
        elevation: ms(3),
    },
    subContainer1:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        height: '45%'
    },
    imageContainer:{
        width: '70%',
        height:  '100%',
    },
    image:{
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    iconsContainer:{
        flexDirection: 'column',
        width: '30%',
        height:  '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: mvs(15, 0.6),
    },
    subContainer2:{
        width: '100%',
        //alignItems: 'center',
        paddingLeft: mvs(10, 0.6),
        paddingRight: mvs(10, 0.6),
        marginTop: mvs(10, 0.6),
        marginBottom: mvs(10, 0.6),
    },
    titleSection:{
        padding: mvs(5, 0.6),
    },
    detailsSection:{
        backgroundColor: Colors.BackgroundWhite,
        padding: mvs(5, 0.6)
    },
    locationSection:{

    }
});