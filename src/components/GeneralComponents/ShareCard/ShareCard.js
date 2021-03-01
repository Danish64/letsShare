import React, { useState, useEffect } from 'react';
import {View, Text, Image,  Button } from 'react-native';
import styles from './style';
import {ShareButton} from '../../../res/UniversalComponents/Button';
import {BodyTextBlack, BodyTextBold, SubtitleTextBlack, RecentlySharedSubtitleText} from '../../../res/UniversalComponents/Text';
import ScrollViewContainer from '../../../res/UniversalComponents/ScrollViewContainer';

const Component = ({navigation, item} ) => {
    return(
        <ScrollViewContainer>
            {/* goods display */}
            <View style={styles.mainContainer}>
                <View style={styles.subContainer1}>
                    <View style={styles.imageContainer}>
                        <Image source={item.images} style={styles.image}/>
                    </View>
                    <View style={styles.iconsContainer}>
                        <ShareButton iconName="call-outline" />
                        <ShareButton iconName="chatbubble-ellipses-outline" />
                        <ShareButton iconName="logo-whatsapp" />
                    </View>
                </View>
                <View style={styles.subContainer2}>
                    <View style={styles.titleSection}>
                        <BodyTextBold>{item.title}</BodyTextBold>
                        <BodyTextBlack>{item.description}</BodyTextBlack>
                    </View>
                    <View style={styles.detailsSection}>
                        <BodyTextBlack>Quantity: {item.quantity}</BodyTextBlack>
                        <BodyTextBlack>Pick Up Time: {item.PickupTime}</BodyTextBlack>
                    </View>
                    <View style={styles.locationSection}>
                        <BodyTextBold>Location:</BodyTextBold>
                        <BodyTextBlack>{item.pickupLocation}</BodyTextBlack>
                    </View>
                </View>
            </View>

        </ScrollViewContainer>
    );
};

export default Component;