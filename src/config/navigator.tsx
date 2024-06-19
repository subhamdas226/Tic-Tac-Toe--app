import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import { SinglePlayerGame, Home, Settings, Login } from "@screens";
import { colors } from "@utils";


export type StackNavigatorParams = {
  Home: undefined;
  SinglePlayerGame: undefined;
  Settings: undefined;
  Login : undefined;
};
const Stack = createStackNavigator<StackNavigatorParams>();

const navigationOptions : StackNavigationOptions = {
  headerShown: false,
  headerStyle : {
    backgroundColor : colors.purple,
    shadowRadius : 0,
    shadowOffset  : {
      height : 0,
      width : 0
    }
  },
  headerTintColor : colors.lightGreen,
  headerTitleStyle : {
    fontFamily : "DeliusUnicase_700Bold",
    fontSize : 20,
  },
  headerBackTitleStyle : {
    fontFamily : "DeliusUnicase_400Regular",
    fontSize : 14
  }

};

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={navigationOptions}

      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SinglePlayerGame" component={SinglePlayerGame} />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
