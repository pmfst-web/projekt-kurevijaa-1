import React, { useState} from 'react';
import { FlatList, StyleSheet } from 'react-native';
import  SearchBar  from '../components/SearchBar';
import  Product  from '../components/Product.js';
import {useSelector} from 'react-redux';
export function ProductsList ({navigation}) {

  const [search, setSeach] = useState('');
  const items = useSelector((store) => store.items.items) 
  function renderProduct({item: product}) {
    console.log(product.name)

    navigation.setOptions({
      headerLeft: () => <SearchBar onChangeText={setSeach}/>,
    })
    if(product.name.toLowerCase().includes(search.toLowerCase())) {
    return (
      <Product name = {product.name}
      price = {product.price}
      image = {product.image}
      onPress={() => {
        navigation.navigate('ProductDetails', {
          productId: product.id,
        });
      }}
      />
    );
  }
}
  return (
    <FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={(item) => item.id.toString()}
      data={items}
      renderItem={renderProduct}
    />
  );
}
const styles = StyleSheet.create({
  productsList: {
    backgroundColor: 'grey',
  },
  productsListContainer: {
    backgroundColor: 'grey',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
