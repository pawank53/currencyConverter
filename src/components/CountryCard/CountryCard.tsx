import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import CountryFlag from "react-native-country-flag";

export default function CountryCard() {
  return (
    <View style={styles.container}>
      <Text>CountryCard</Text>
      <CountryFlag isoCode="de" size={25}  />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFFFFF'
    }
})