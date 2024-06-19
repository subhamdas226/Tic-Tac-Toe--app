import { View, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React, { ReactElement } from 'react'
import styles from './button.styles'
import { Text } from '@components'

type ButtonProps = {
    title : string
} & TouchableOpacityProps
const Button = ( {title, style, ...props} : ButtonProps) : ReactElement => {
    return (
        <TouchableOpacity {...props } style={[styles.menu, style]}>
            <Text style={[styles.buttonText, ]}>{title}</Text>
        </TouchableOpacity >
    )
}

export default Button