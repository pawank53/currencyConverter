import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import InputCurrency from './src/components/InputField/InputCurrency';
import CountryCard from './src/components/CountryCard/CountryCard';


function App(): React.JSX.Element {

  return (
    <SafeAreaView style={styles.container} >
      {/* <InputCurrency/> */}
      <CountryCard/>
    </SafeAreaView>
  );
}
const styles=StyleSheet.create({
  container:{
    backgroundColor:"#000000",
    height:'100%',
    width:'auto'
  }
})

export default App;
