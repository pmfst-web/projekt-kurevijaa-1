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

 export function ProductDetails ({route}){
  const { productId } = route.params;
  const dispatch = useDispatch();
  const items = useSelector((store) => store.items.items);
  const item = items.find((item) => item.id === productId);
  
  
  return (
    <SafeAreaView>
      <ScrollView>
        <Image
          style={styles.image}
          source={item.image}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>{item.price} eur</Text>
          <Text style={styles.description}>{item.description}</Text>
            <Button
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
  },
  image: {
    height: 300,
  },
  infoContainer: {
  },
  name: {
    
  },
  price: {
    
  },
  description: {
    
  },
});

