import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text
} from 'react-native';
import Snackbar from 'react-native-snackbar';

function App(): React.JSX.Element {

  const [inputValue, setInputValue]=useState("");
  const [resultValue, setResultValue]=useState("");
  const [targetCurrency, setTargetCurrency]=useState("");

  const buttonPressed=(targetValue:Currency)=>{
    if(!inputValue){
      return Snackbar.show({
        text:"Enter a value to convert",
        backgroundColor:'#EA7773',
        textColor:'#000000'
      })
    }
    const inputAmount=parseFloat(inputValue)
    if(!isNaN(inputAmount)){
      const convertedValue=inputAmount * targetValue.value;
      const result=`${targetValue.symbol} ${convertedValue.toFixed(2)}`
      setResultValue(result)
      setTargetCurrency(targetValue.name)
    }else{
      return Snackbar.show({
        text:"Not a valid number to convert",
        backgroundColor:'#F4BE2C',
        textColor:'#000000'
      })
    }
  }

  return (
    <SafeAreaView style={styles.container} >
      <Text>hi</Text>
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
