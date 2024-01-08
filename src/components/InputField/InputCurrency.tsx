import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function InputCurrency(): React.JSX.Element {
  return (
    <SafeAreaView>
      <View style={styles.convertedContainer}>
        <Text>Amount is=</Text>
        <FontAwesome name="rocket" size={30} color="#900" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.rs}>Rs</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter amount to convert"
          keyboardType="numeric"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection:'row',
    alignItems:'center',
    borderColor:'red',
    borderWidth:2,
    marginHorizontal:55
  },
  convertedContainer: {
    height: 40,
    width: 100,
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: 30,
  },
  rs: {
    borderWidth: 2,
    borderColor: 'red',
    margin:10,
    color:'#ffffff'
  },
  input: {
    borderWidth: 2,
    borderColor: 'green',
    width:200,
    backgroundColor: '#ffffff',
  },
});
