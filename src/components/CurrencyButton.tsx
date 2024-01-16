import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react' // use as props type

type CurrencyButtonProps=PropsWithChildren<{
    name:string,
    flag:string // minimum value ke sath prop ke type ko define krenge
}>;

 const CurrencyButton=(props :CurrencyButtonProps): JSX.Element=> {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.country}>{props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    buttonContainer:{
        alignItems:'center'
    },
    flag:{
        fontSize:26,
        color:'#FFFFFF',
        marginBottom:4
    },
    country:{
        fontSize:20,
        color:'#de234f'
    }
})

export default CurrencyButton;