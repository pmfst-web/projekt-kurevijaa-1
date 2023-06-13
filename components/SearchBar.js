import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SearchBar = ({ containerStyle, value, clearSearch, onChangeText }) => {
  return (
    <View style={[styles.container, { ...containerStyle }]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.searchBar}
        placeholder='Pretraži..'
        placeholderTextColor={'black'}
      />
      {value ? (
        <AntDesign
          name='close'
          size={20}
          onPress={clearSearch}
          style={styles.clearIcon}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    borderStyle: 'solid',
    borderBottomColor: 'black',
    marginLeft: 10,
    borderBottomWidth: 1,
    width: 70,

  },
  container: {
    justifyContent: 'center',
  },
  clearIcon: {
    position: 'absolute',
    right: 10,
  },
});

export default SearchBar;