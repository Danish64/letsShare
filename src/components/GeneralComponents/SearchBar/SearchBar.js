import React, {useState, useRef} from 'react';
import {View, KeyboardAvoidingView, Platform} from 'react-native';
import {HeadingText, GroupLabelText} from 'res/UniversalComponents/Text.js';
import {SearchBar} from 'react-native-elements';
import SearchIcon from '../../Icons/SearchIcon';

import styles from './style';
//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const searchBar = useRef(null);

  const updateSearch = (query) => {
    setSearchQuery(query);
    console.log(`No result found for \"${searchQuery}\" `);
  };

  return (
    <View style={styles.searchBarArea}>
      <SearchBar
        placeholder="Search on lets share"
        onChangeText={updateSearch}
        value={searchQuery}
        searchIcon={SearchIcon}
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.searchBarInputContainer}
      />
    </View>
  );
};

export default Component;
