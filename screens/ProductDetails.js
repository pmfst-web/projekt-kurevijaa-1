import React from 'react';
import {
  Text, 
  Image, 
  View, 
  ScrollView, 
  SafeAreaView, 
  Button, 
  StyleSheet
  } from 'react-native';
  import { useDispatch, useSelector} from 'react-redux';
  import { addToCart } from '../store/actions/cartActions';

 export function ProductDetails ({route}){
  const { productId } = route.params;
  const dispatch = useDispatch();
  const items = useSelector((store) => store.items.items);
  const item = items.find((item) => item.id === productId);
  
  function onAddToCart() {
    dispatch(addToCart(item))
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <Image
          style={styles.image}
          source={item.image}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>{item.price} kn</Text>
          <Text style={styles.description}>{item.description}</Text>
            <Button
            onPress={onAddToCart}
            title="Dodaj u košaricu"
            />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    marginVertical: 20,
  },
  image: {
    height: 300,
    width: '100%'
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
    marginBottom: 16,
  },
});

