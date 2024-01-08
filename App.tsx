import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import InputCurrency from './src/components/InputField/InputCurrency';


function App(): React.JSX.Element {

  return (
    <SafeAreaView style={styles.container} >
      <InputCurrency/>
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
