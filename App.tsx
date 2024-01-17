import React, {useEffect, useState, useMemo} from 'react';
import {SafeAreaView, StyleSheet, View, Text, TextInput, FlatList, Pressable} from 'react-native';
import Snackbar from 'react-native-snackbar';
import { currencyByRupee } from './src/Constatnts/constants';
import CurrencyButton from './src/components/CurrencyButton';

function App(): React.JSX.Element {
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);

  const buttonPressed = (targetValue: Currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'Enter a value to convert',
        backgroundColor: '#EA7773',
        textColor: '#000000',
      });
    }
    const inputAmount = parseFloat(inputValue);
    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value;
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`;
      setResultValue(result);
      setTargetCurrency(targetValue.name);
    } else {
      return Snackbar.show({
        text: 'Not a valid number to convert',
        backgroundColor: '#F4BE2C',
        textColor: '#000000',
      });
    }
  };

  const handleInputChange=(text:any)=>{
    console.log("text",text);
    console.log("resultValue",resultValue);
    console.log("targetCurrency",targetCurrency);
    if(text===''){
      console.log("inside",text);
      setInputValue('')
      setResultValue('')
      setTargetCurrency('')
      setButtonClicked(false);
    }else{
      setInputValue(text);
    }
  }

  const currencyByRupeeMemoized: Currency[] = useMemo(() => {
    return currencyByRupee;
  }, [])
  
  // useEffect(()=>{
    
  //   if(buttonClicked){
  //     if(inputValue){
  //       const inputAmount = parseFloat(inputValue);
  //       if (!isNaN(inputAmount)) {
  //         const targetValue: Currency[] = currencyByRupeeMemoized.map((currency) => ({ ...currency }));
  //         const convertedValue = inputAmount * targetValue.value;
  //         const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`;
  //         setResultValue(result);
  //         setTargetCurrency(targetValue.name);
  //       } else {
  //         return Snackbar.show({
  //           text: 'Not a valid number to convert',
  //           backgroundColor: '#F4BE2C',
  //           textColor: '#000000',
  //         });
  //       }
  //     }
      
  //   }
  // },[buttonClicked])

  return (
    <>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>₹</Text>
            <TextInput
              style={styles.inputAmountField}
              maxLength={14}
              keyboardType="numeric"
              clearButtonMode="always" // for ios only
              value={inputValue}
              onChangeText={handleInputChange}
              placeholder="Enter amount in rupee"
            />
          </View>
          {resultValue && (
            <Text style={styles.resultTxt}>{resultValue}</Text>
          )}
        </View>
        <View style={styles.bottomContainer}>
            <FlatList
            numColumns={3}
            data={currencyByRupee}
            keyExtractor={item=> item.name}
            renderItem={({item})=>(
              <Pressable 
              style={[styles.button, targetCurrency===item.name && styles.selected]}
              onPress={()=>buttonPressed(item)}
              >
                {/* <CurrencyButton name={item.name} flag={item.flag}/>  */}
                 {/* name , flag as a prop h or direct v kr skte h   */}
                <CurrencyButton {...item}/>
              </Pressable>
            )}
            />
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#FFFFFF',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,
    fontSize: 40,
    color: '#FFFFFF',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,
    margin: 12,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});

export default App;
