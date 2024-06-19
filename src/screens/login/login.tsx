import { Text, View, ScrollView } from "react-native";
import React from "react";
import { GradientBackground, TextInput } from "@components";
import styles from "./login.styles";

const Login = () => {
  return (
    <GradientBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <TextInput placeholder={"UserName"} style={{ }}/>
        <TextInput placeholder={"Password"}/>
      </ScrollView>
    </GradientBackground>
  );
};

export default Login;
