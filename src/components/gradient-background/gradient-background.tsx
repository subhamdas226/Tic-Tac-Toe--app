import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { ReactElement, ReactNode } from 'react'
import { LinearGradient } from 'expo-linear-gradient'

type GradientBackgroundProps = {
    children : ReactNode
}
const GradientBackground = ({children} : GradientBackgroundProps ) : ReactElement => {
  return (
    <View style= {{flex  :1}}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#120318'}/>
      <LinearGradient
        // Background Linear Gradient
        colors={['#120318', '#221a36']}
        style={{ position : 'absolute',left : 0, right : 0, top  :0, bottom : 0}}
      />
      {children}
    </View>
  )
}

export default GradientBackground

const styles = StyleSheet.create({})