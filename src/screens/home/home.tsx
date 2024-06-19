import { ScrollView, Text, View, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './home.styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackNavigatorParams } from '@config/Navigator';
import { LinearGradient } from 'expo-linear-gradient';
import { GradientBackground, Button } from '@components';
type HomeProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "Home">
}

const Home = ({ navigation }: HomeProps) => {
  return (
    <GradientBackground>
      <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.logo}
        source={require('@assets/avatar.png')}
      />
      {/* <Text>home</Text>
      <Button
        title='Game'
        onPress={() => {
          navigation.navigate("Game", { gameId: "string" })
        }} /> */}
        <View style={styles.buttons}>
          <Button onPress={()=> navigation.navigate('SinglePlayerGame') } title={'Single Player'} style={styles.button}/>
          <Button onPress={()=> alert(true)} title={'MultiPlayer'} style={styles.button}/>
          <Button onPress={()=> navigation.navigate('Login') } title={'Login'} style={styles.button}/>
          <Button onPress={()=> navigation.navigate('Settings') } title={'Settings'} style={styles.button}/>
        </View>
      </ScrollView>
    </GradientBackground>
    

  )
}

export default Home