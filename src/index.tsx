import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Home, Game } from "@screens";
import {
  useFonts,
  DeliusUnicase_400Regular,
  DeliusUnicase_700Bold,
} from "@expo-google-fonts/delius-unicase";
import { Text } from "@components";
import React from "react";
import AppLoading from "expo-app-loading";

export default function App() {
  const [fontLoaded]: any = useFonts({
    DeliusUnicase_400Regular,
    DeliusUnicase_700Bold,
  });
  if (!fontLoaded) return <AppLoading />;
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.tsx to start working on your app!</Text>
       */}
      <Text
        onPress={() => {
          alert(true);
        }}
        weight="700"
        style={{fontSize : 25}}
      >
        this is app
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
