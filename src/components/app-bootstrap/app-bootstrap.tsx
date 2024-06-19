import { StyleSheet, View } from 'react-native'
import React, { ReactElement, ReactNode } from 'react'
import {
  useFonts,
  DeliusUnicase_400Regular,
  DeliusUnicase_700Bold,
} from "@expo-google-fonts/delius-unicase";
import { Text } from "@components";
import AppLoading from "expo-app-loading";

type AppBootstrapProps = {
  children  : ReactNode
}

const AppBootstrap = ({children} : AppBootstrapProps) : ReactElement  => {
  const [fontLoaded]: any = useFonts({
    DeliusUnicase_400Regular,
    DeliusUnicase_700Bold,
  });
  if (!fontLoaded) return <AppLoading />;
  return fontLoaded ? <>{children}</>: <AppLoading />
}

export default AppBootstrap

const styles = StyleSheet.create({})