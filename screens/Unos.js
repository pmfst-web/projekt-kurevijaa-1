import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Button,
  TextInput,
  Alert
} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const Unos = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
   <View styles={styles.allinputs}>
      <View style={styles.text1}>
        <Text style={styles.name}>Ime i prezime:</Text>
        <TextInput placeholder="Unesi ime i prezime " 
        placeholderTextColor={'grey'} 
        style={styles.input}
         />
      </View>
      <View style={styles.text1}>
        <Text style={styles.name}>Broj mobitela:</Text>
        <TextInput placeholder="Unesi broj mobitela " 
        placeholderTextColor={'grey'} 
        style={styles.input}
        />
      </View>
      <View style={styles.text1}>
        <Text style={styles.name}>Adresa:</Text>
        <TextInput placeholder="Unesi ulicu i kućni broj" placeholderTextColor={'grey'} style={styles.input}/>
      </View>
      <View style={styles.text1}>
        <Text style={styles.name}>Grad:</Text>
        <TextInput placeholder="Unesi ime grada" placeholderTextColor={'grey'} style={styles.input}/>
      </View>
      <View>
    </View>
      <View>
        <Button title="Nastavi" onPress={() => navigation.navigate('ProductsList')}/>
    </View>
  </View>
  </View>
  );
};

const styles = StyleSheet.create({
  input:{
    borderWidth: 1,
    width: '100%',
    marginVertical: 10,
    },
    text1:{
      marginLeft: 50,
      marginRight:50,
      marginTop: 32,
    },
    name:{
      color: 'gray',
      fontSize: 22,
      fontWeight: 'bold',
    },
    container:{
      borderWidth: 2,
      borderColor: 'black',
      width: '90%',
      marginLeft: 15,
      marginTop: 50,
      height: '70%',
    },
    
});

export default Unos;