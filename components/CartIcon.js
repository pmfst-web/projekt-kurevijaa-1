
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

export function CartIcon({navigation}) {
  const cart = useSelector((store) => store.cart.cart);

  return (
    <View style={styles.container}>
      <Text style={styles.text} 
        onPress={() => {
          navigation.navigate('Cart');
        }}
      >Košarica</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
  },
});
