import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator }  from '@react-navigation/native-stack';
import { ProductsList } from './screens/ProductsList.js';
import { ProductDetails } from './screens/ProductDetails.js';
import {createStore, combineReducers} from 'redux';
import itemReducer from './store/reducers/itemReducer.js';
import { Provider } from 'react-redux';
import { Cart } from './screens/Cart.js';
import { CartIcon } from './components/CartIcon.js';
import cartReducer from './store/reducers/cartReducer.js';



const Stack = createNativeStackNavigator();

const glavniReducer = combineReducers({
  cart: cartReducer,
  items: itemReducer, 
  totalPrice: cartReducer
})
const store = createStore(glavniReducer)

function App() {
  return (
    <Provider store = {store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='ProductsList' component={ProductsList} 
          options={({ navigation }) => ({
            title: 'Proizvodi',
            headerTitleStyle: styles.headerTitle
          })}/>
          <Stack.Screen name='ProductDetails' component={ProductDetails} 
          options={({ navigation }) => ({
            title: 'Detalji o proizvodu',
            headerTitleStyle: styles.headerTitle,
          })} />
          <Stack.Screen name='Cart' component={Cart} 
          options={({ navigation }) => ({
            title: 'Košarica',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
  },
});

export default App;
