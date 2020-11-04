import React from 'react';
import {View} from 'react-native';
import {
  HeadingText,
  HeadingTextGrey,
  HeadingTextLarge,
  HeadingTextLargeGrey,
  SubtitleText,
  SubtitleTextBlack,
  SubtitleTextWhite,
  GroupLabelText,
  SubtitleTextBold,
  BodyText,
  BodyTextBlack,
  BodyTextWhite,
  BodyTextLight,
  ButtonTextBlack,
  ButtonTextWhite,
  TextButton,
  CaptionText,
  OverlineText,
} from 'res/UBC/Text.js';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports End

const Component = () => {
  return (
    <View
      style={{
        width: '100%',
        alignItems: 'flex-start',
        padding: 5,
      }}>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
        }}>
        <HeadingTextLarge>Typography</HeadingTextLarge>
      </View>
      <HeadingTextLarge>Large Heading</HeadingTextLarge>
      <HeadingTextLargeGrey>Large Heading</HeadingTextLargeGrey>
      <HeadingText>Heading</HeadingText>
      <HeadingTextGrey>Heading</HeadingTextGrey>
      <SubtitleText>Subtitle</SubtitleText>
      <SubtitleTextBlack>Subtitle Black</SubtitleTextBlack>
      <View
        style={{
          backgroundColor: '#000',
        }}>
        <SubtitleTextWhite>Subtitle White</SubtitleTextWhite>
      </View>
      <SubtitleTextBold>Subtitle Bold</SubtitleTextBold>
      <GroupLabelText>Group Label</GroupLabelText>
      <BodyText>Body</BodyText>
      <BodyTextBlack>Body Black</BodyTextBlack>
      <View
        style={{
          backgroundColor: '#000',
        }}>
        <BodyTextWhite>Body White</BodyTextWhite>
      </View>
      <BodyTextLight>Body Light</BodyTextLight>
      <View
        style={{
          backgroundColor: '#000',
        }}>
        <ButtonTextWhite>Button White</ButtonTextWhite>
      </View>
      <View
        style={{
          marginTop: 2,
          borderWidth: 2,
          borderColor: '#000',
        }}>
        <ButtonTextBlack>Button Black</ButtonTextBlack>
      </View>
      <TextButton>Text Button</TextButton>
      <CaptionText>Caption</CaptionText>
      <OverlineText>Overline</OverlineText>
    </View>
  );
};

export default Component;
