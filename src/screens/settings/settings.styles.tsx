import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '@utils'

const  styles = StyleSheet.create({
    container : {
        paddingHorizontal : 30, 
        paddingVertical : 40
    },
    field : {
        marginBottom : 30
    },
    label : {
        color : colors.lightGreen,
        fontSize: 18
    },
    choices  : {
        flexDirection : 'row',
        flexWrap : 'wrap',
        marginTop : 10,
        marginHorizontal : -5
    },
    choice : {
        backgroundColor : colors.lightGreen,
        padding : 10,
        margin : 5
    },
    choiceText: {
        color : colors.darkpurple
    },
    switch : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    }
})

export default styles