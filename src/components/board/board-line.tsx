import { Animated, Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { ReactElement, useEffect, useRef } from 'react'
import { BoardResult, colors } from '@utils'

type BoardLineProps = {
    size: number,
    gameResult?: BoardResult | false
}
const SCREEN_WIDTH = Dimensions.get("screen").width;
const BoardLine = ({ size, gameResult }: BoardLineProps):
 ReactElement => {

    const diagonalHeight = Math.sqrt(Math.pow(size,2) 
    + Math.pow( size, 2) );

    const animationRef = useRef<Animated.Value>(new Animated.Value(0)) ;


    useEffect(() => {
      Animated.timing(animationRef.current, {
        toValue  : 1,
        duration : 700,
        useNativeDriver : false,
      }).start();
    
      return () => {
        
      }
    }, [])
    
    return (
        <>
            {gameResult && gameResult.column && 
            gameResult.direction === "V" && 
            <Animated.View style={[styles.line, styles.vLine, {
                left : `${33.333 * gameResult.column - 16.6666}%`,
                height : animationRef.current.interpolate({
                    inputRange : [0,0.5,1],
                    outputRange : ["0%","50%","100%"]
                })
            }]}>
                
            </Animated.View>
            }

            {gameResult && gameResult.row && 
            gameResult.direction === "H" && 
            <Animated.View style={[styles.line, styles.hLine, {
                top : `${33.333 * gameResult.row - 16.6666}%`,
                width : animationRef.current.interpolate({
                    inputRange : [0,0.5,1],
                    outputRange : ["0%","50%","100%"]
                })
            }]}>
                
            </Animated.View>
            }

            {gameResult && gameResult.diagonal && 
            gameResult.direction === "D" && 
            <Animated.View style={[styles.line, styles.dLine, {
                // height : diagonalHeight,
                height : animationRef.current.interpolate({
                    inputRange : [0,1],
                    outputRange : [0,diagonalHeight]
                }),
                transform : [
                    {
                        // translateY : -(diagonalHeight - size )/2,
                        translateY : animationRef.current.interpolate({
                            inputRange : [0,1],
                            outputRange : [ size/2 ,-(diagonalHeight - size )/2]
                        })
                    },
                    {
                        rotateZ : 
                            gameResult.diagonal === "COUNTER" 
                            ? "45deg" 
                            : "-45deg"
                    }
                ]
            }]}>
                
            </Animated.View>
            }
        </>
    )
}

export default BoardLine

const styles = StyleSheet.create({
    line : {
         position: "absolute",
         backgroundColor : colors.lightpurple
    },
    vLine: {
        width :4,
        // height : '100%',

    },
    hLine : {
        height : 4,
        // width :'100%'
    },
    dLine : {
        width: 4,
        // height: '100%',
        top : 0,
        left : '50%'
    }
})