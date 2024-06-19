import { StyleSheet, Text, View, TextInput as NativeTextInput, TextInputProps} from 'react-native'
import React, { ReactElement } from 'react'
import { colors } from '@utils'

const TextInput = (props : TextInputProps) : ReactElement => {
  return (
    
    <>
     <NativeTextInput  {...props} placeholderTextColor="#5d5379"  style={styles.textInput} />
    </>
  )
}



const styles = StyleSheet.create({
  textInput  :{
    height : 50,
    width : "100%",
    borderBottomWidth : 1,
    borderColor : colors.lightGreen,
    backgroundColor : colors.purple,
    padding : 10,
    color : colors.lightGreen,
    fontFamily : "DeliusUnicase_400Regular"
}
})

export default TextInput;