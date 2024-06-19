import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '@utils';


const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent : 'center',
        marginTop: 80
    },
    difficulty: {
        color: colors.lightGreen,
        fontSize: 22,
        textAlign: 'center',
        marginTop: 5
    },
    results: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 50,

    },
    resultBox: {
        backgroundColor: colors.lightGreen,
        borderWidth: 1,
        borderColor: colors.lightpurple,
        alignItems: 'center',
        padding: 15,
        marginHorizontal: 5
    },
    resultTitle: {
        color: colors.darkpurple,
        fontSize: 20
    },
    resultCount: {

    },
    modal: {
        position: 'absolute',
        backgroundColor: '#8e44ad',
        bottom: 40,
        left: 30,
        right: 30,
        padding: 30,
        borderWidth: 3,
        borderColor: colors.lightGreen,

    },
    modalText: {
        color: colors.lightGreen,
        fontSize: 28,
        textAlign: "center",
        marginBottom: 30
    }
})

export default styles;