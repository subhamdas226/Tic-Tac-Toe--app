import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '@utils'


const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
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
export default styles