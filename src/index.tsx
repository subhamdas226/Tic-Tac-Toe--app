import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Text, AppBootstrap } from "@components";
import Navigator from "@config/Navigator";
import { ReactElement } from "react";
import SettingsContext, { useSettings, SettingsProvider } from "@contexts/settings-context";
import { Amplify } from 'aws-amplify';
import awsExports from '../aws-exports';
Amplify.configure(awsExports);

export default function App() : ReactElement {
  
  return (
    <AppBootstrap>
      <SettingsProvider>
        <Navigator />
      </SettingsProvider>
      
    </AppBootstrap>
    
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
