import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import {  useSelector, useDispatch} from 'react-redux';
import { removeItem } from '../store/actions/cartActions';

export function Cart ({navigation}) {

  const cart = useSelector((store) => store.cart.cart);
  const total = useSelector((store) => store.totalPrice.totalPrice);
  const dispatch = useDispatch();

  function Totals() {
    return (
       <View >
        <View style={styles.cartLineTotal}>
        <Text style={[styles.lineLeft, styles.lineTotal]}>Ukupno</Text>
          <Text style={styles.lineRight}> {total.toFixed(2)} eur</Text>
        </View>
          <View styles={styles.buttonbuy}>
            <Button title='KUPI' onPress={() => {
        navigation.navigate('Unos')}}
        ></Button>
          </View>
       </View>
    );
  }
  function remove(id) {
    console.log(id);
    dispatch(removeItem(id))
  }
  const renderItem = (podaci) =>  {
    return (
      <View styles={styles.marrgina}>
       <View style={styles.cartLine}>
          <Text style={styles.lineLeft}>{podaci.item.name} x {podaci.item.quantity} </Text>
          <Text style={styles.lineRight}>{podaci.item.price} eur</Text>
          <Button styles={styles.buttonx} title="x" onPress={() => {remove(podaci.item.id)}}></Button>
       </View>
       </View>
    );
  }
  return (
    <FlatList
      style={styles.itemsList}
      contentContainerStyle={styles.itemsListContainer}
      data={cart}
      renderItem={renderItem}
      ListFooterComponent={Totals}
    />
  );
}

const styles = StyleSheet.create({
  cartLine: { 
    flexDirection: 'row',
  },
  cartLineTotal: { 
    flexDirection: 'row',
    borderTopColor: '#dddddd',
    borderTopWidth: 5
  },
  lineTotal: {
    fontWeight: 'bold',    
  },
  lineLeft: {
    fontSize: 15, 
    lineHeight: 40, 
    color:'#333333',
    marginLeft: 10,
  },
  lineRight: { 
    flex: 1,
    fontSize: 15, 
    fontWeight: 'bold',
    lineHeight: 40, 
    color:'#333333', 
    textAlign:'right',
    marginRight: 10,
  },
  itemsListContainer: {
    paddingVertical: 5,
    marginHorizontal: 12,
  },
  buttonx:{
    borderRadius: 70,
    width: 30,
    fontSize: 50,
    backgroundColor: 'blue',
  },
  
});
