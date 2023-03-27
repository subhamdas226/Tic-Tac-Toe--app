import { StyleSheet, Text as NativeText,TextProps as NativeTextProps } from "react-native";
import React, {ReactNode, ReactElement} from "react";

type TextProps = {
    weight : "400" | "700";
    children : ReactNode
} & NativeTextProps;

const defaultProps = {
    weight  : "700"
}

const Text = ({ children, style, weight, ...props }: TextProps) : ReactElement => {
    let fontFamily;
    if(weight === "400"){
        fontFamily = "DeliusUnicase_400Regular"
    }
    if(weight === "700"){
        fontFamily = "DeliusUnicase_700Bold"
    }
  return (
    <NativeText
      {...props}
      style={[{ fontFamily: fontFamily }, style]}
    >
      {children}
    </NativeText>
  );
};
Text.defaultProps = defaultProps;
export default Text;

const styles = StyleSheet.create({});
