import { StyleSheet, Text, View } from 'react-native'
import { colors } from '@utils'




const styles = StyleSheet.create({
    board :  {
        backgroundColor: 'green',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    cell : {
        width: '33.33333%',
        height: '33.33333%',
        backgroundColor: '#fff',
        borderWidth: 2,
        // borderColor : colors.lightGreen,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default styles;