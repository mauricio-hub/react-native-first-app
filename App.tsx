import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { HelloScreen } from './src/presentation/screens/HelloScreen'
import { CounterScreen } from './src/presentation/screens/CounterScreen'

export const App = () => {
  return (
   
    <SafeAreaView style={{flex:1}}>
     <CounterScreen />
    </SafeAreaView>
  )
}
